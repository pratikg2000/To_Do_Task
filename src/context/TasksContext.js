import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {LayoutAnimation, Alert} from 'react-native';
import {loadTasks, saveTasks} from '../utils/storage';
import {fetchTodos} from '../services/api';

const TasksContext = createContext(null);

export function TasksProvider({children}) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const stored = await loadTasks();
        if (stored && stored.length) {
          setTasks(stored);
        } else {
          const seeded = await fetchTodos(10);
          setTasks(seeded);
          await saveTasks(seeded);
        }
      } catch (e) {
        console.warn('Failed loading tasks', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const persist = async next => {
    setTasks(next);
    try {
      await saveTasks(next);
    } catch (e) {
      console.warn('Failed saving tasks', e);
    }
  };

  const addTask = async (title, description) => {
    const newTask = {
      id: String(Date.now()),
      title: title.trim(),
      description: (description || '').trim(),
      completed: false,
      createdAt: Date.now(),
    };
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    await persist([newTask, ...tasks]);
  };

  const updateTask = async (id, data) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const next = tasks.map(t =>
      t.id === id ? {...t, ...data, title: data.title?.trim() ?? t.title} : t,
    );
    await persist(next);
  };

  const deleteTask = async id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const next = tasks.filter(t => t.id !== id);
    await persist(next);
  };

  const toggleTask = async id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const next = tasks.map(t =>
      t.id === id ? {...t, completed: !t.completed} : t,
    );
    await persist(next);
  };

  const clearAll = async () => {
    Alert.alert('Clear all tasks?', 'This cannot be undone.', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Clear',
        style: 'destructive',
        onPress: async () => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          await persist([]);
        },
      },
    ]);
  };

  const value = useMemo(
    () => ({
      tasks,
      loading,
      addTask,
      updateTask,
      deleteTask,
      toggleTask,
      clearAll,
    }),
    [tasks, loading],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

export function useTasks() {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error('useTasks must be used within TasksProvider');
  return ctx;
}

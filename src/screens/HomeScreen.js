'use client';

import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import TaskCard from '../components/TaskCard';
import EmptyState from '../components/EmptyState';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {loadTasks, saveTasks} from '../utils/storage';
import {seedFromApiIfEmpty} from '../services/api';

const FILTERS = ['All', 'Pending', 'Completed'];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [tasks, setTasks] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [filter, setFilter] = React.useState('All');
  const [loading, setLoading] = React.useState(true);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      (async () => {
        setLoading(true);
        const current = await loadTasks();
        let next = current;
        if (!current || current.length === 0) {
          next = await seedFromApiIfEmpty();
        }
        if (isActive) {
          setTasks(next);
          setLoading(false);
        }
      })();
      return () => {
        isActive = false;
      };
    }, []),
  );

  const filtered = React.useMemo(() => {
    let list = tasks;
    if (filter === 'Pending') list = list.filter(t => !t.completed);
    if (filter === 'Completed') list = list.filter(t => t.completed);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        t =>
          t.title.toLowerCase().includes(q) ||
          (t.description || '').toLowerCase().includes(q),
      );
    }
    return list;
  }, [tasks, query, filter]);

  const toggle = async id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const next = tasks.map(t =>
      t.id === id ? {...t, completed: !t.completed} : t,
    );
    setTasks(next);
    await saveTasks(next);
  };

  const remove = async id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const next = tasks.filter(t => t.id !== id);
    setTasks(next);
    await saveTasks(next);
  };

  const goAdd = () => navigation.navigate('EditTask');

  const onOpenTask = task => navigation.navigate('EditTask', {task});

  const renderFilter = name => {
    const active = filter === name;
    return (
      <TouchableOpacity
        key={name}
        style={[styles.chip, active && styles.chipActive]}
        onPress={() => setFilter(name)}>
        <Text style={[styles.chipText, active && styles.chipTextActive]}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search tasks..."
          style={styles.input}
        />
        <TouchableOpacity onPress={goAdd} style={styles.addBtn}>
          <Text style={styles.addBtnText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filters}>{FILTERS.map(renderFilter)}</View>

      <FlatList
        data={filtered}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{
          paddingVertical: 12,
          gap: 10,
          paddingBottom: 40,
        }}
        renderItem={({item}) => (
          <TaskCard
            task={item}
            onToggle={() => toggle(item.id)}
            onDelete={() => remove(item.id)}
            onPress={() => onOpenTask(item)}
          />
        )}
        ListEmptyComponent={
          !loading ? (
            <EmptyState
              title="No tasks"
              subtitle="Tap + Add to create your first task."
            />
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', paddingHorizontal: 16},
  toolbar: {flexDirection: 'row', gap: 8, paddingTop: 12},
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    color: 'black',
  },
  addBtn: {
    height: 44,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  addBtnText: {color: 'white', fontWeight: '700'},
  filters: {flexDirection: 'row', gap: 8, marginTop: 10, marginBottom: 4},
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  chipActive: {
    backgroundColor: 'black',
  },
  chipText: {color: 'black', fontWeight: '600'},
  chipTextActive: {color: 'white'},
});

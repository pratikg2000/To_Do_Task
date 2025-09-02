export async function fetchPlaceholderTodos(limit = 8) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`,
    );
    const todos = await res.json();
    return todos.map(t => ({
      id: t.id,
      title: t.title.charAt(0).toUpperCase() + t.title.slice(1),
      description: 'Imported from JSONPlaceholder',
      completed: Boolean(t.completed),
      createdAt: new Date().toISOString(),
    }));
  } catch (e) {
    return [];
  }
}

import {loadTasks, saveTasks} from '../utils/storage';
export async function seedFromApiIfEmpty() {
  const current = await loadTasks();
  if (current && current.length) return current;
  const seeded = await fetchPlaceholderTodos(8);
  await saveTasks(seeded);
  return seeded;
}

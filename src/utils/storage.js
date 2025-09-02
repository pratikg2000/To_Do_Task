import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = '@todo_tasks';
const NOTES_KEY = '@notes_text';

export async function loadTasks() {
  try {
    const raw = await AsyncStorage.getItem(TASKS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function saveTasks(tasks) {
  try {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch {}
}

export async function loadNotes() {
  try {
    const raw = await AsyncStorage.getItem(NOTES_KEY);
    return raw ?? '';
  } catch {
    return '';
  }
}

export async function saveNotes(text) {
  try {
    await AsyncStorage.setItem(NOTES_KEY, text ?? '');
  } catch {}
}

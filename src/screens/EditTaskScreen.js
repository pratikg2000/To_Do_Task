import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  LayoutAnimation,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {loadTasks, saveTasks} from '../utils/storage';

export default function EditTaskScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const existing = route.params?.task;

  const [title, setTitle] = React.useState(existing?.title || '');
  const [description, setDescription] = React.useState(
    existing?.description || '',
  );

  const onSave = async () => {
    const trimmed = title.trim();
    if (!trimmed) {
      Alert.alert('Validation', 'Title is required');
      return;
    }
    const all = (await loadTasks()) || [];
    let next = all;
    if (existing) {
      next = all.map(t =>
        t.id === existing.id
          ? {...t, title: trimmed, description: description.trim()}
          : t,
      );
    } else {
      const newTask = {
        id: Date.now(),
        title: trimmed,
        description: description.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      next = [newTask, ...all];
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    await saveTasks(next);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Enter Title"
          style={styles.input}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Enter Description"
          style={[styles.input, styles.multiline]}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>
      <TouchableOpacity onPress={onSave} style={styles.saveBtn}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', padding: 16, gap: 16},
  field: {gap: 8},
  label: {fontSize: 14, color: 'black', fontWeight: '700'},
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: 'black',
    fontSize: 16,
  },
  multiline: {minHeight: 120},
  saveBtn: {
    marginTop: 'auto',
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 14,
  },
  saveText: {color: 'white', fontSize: 16, fontWeight: '700'},
});

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const CrudExample = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleSave = () => {
    if (text.trim() === '') return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = text;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, text]);
    }

    setText('');
  };

  const handleDelete = index => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  const handleEdit = index => {
    setText(tasks[index]);
    setEditIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSave}>
          <Text style={styles.btnText}>
            {editIndex !== null ? 'Update' : 'Add'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.taskRow}>
            <Text style={styles.taskText}>{item}</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.actionBtn, {backgroundColor: 'green'}]}
                onPress={() => handleEdit(index)}>
                <Text style={styles.actionText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionBtn, {backgroundColor: 'red'}]}
                onPress={() => handleDelete(index)}>
                <Text style={styles.actionText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CrudExample;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: 'white'},
  inputContainer: {flexDirection: 'row', marginBottom: 20},
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
  },
  btn: {
    marginLeft: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {color: 'white', fontWeight: 'bold'},
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {fontSize: 16},
  actions: {flexDirection: 'row'},
  actionBtn: {padding: 8, borderRadius: 5, marginLeft: 8},
  actionText: {color: 'white', fontWeight: '600'},
});

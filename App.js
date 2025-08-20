// import React from 'react';
// import {Provider} from 'react-redux';
// import store from './src/redux/store';
// import RootNavigator from './src/navigation/RootNavigator';
// import {StatusBar, SafeAreaView} from 'react-native';
// import AppNavigationRoot from './AppNavigationRoot';
// const App = () => {
//   return (
//     <Provider store={store}>
//       <SafeAreaView style={{flex: 1, backgroundColor: '#FADACD'}}>
//         <StatusBar
//           backgroundColor="#FADACD"
//           barStyle="dark-content"
//           translucent={false}
//         />
//         {/* <RootNavigator /> */}
//         <AppNavigationRoot />
//       </SafeAreaView>
//     </Provider>
//   );
// };

// export default App;

// import React, {useState} from 'react';
// import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';

// const App = () => {
//   const [task, setTask] = useState('');
//   const [taskList, setTaskList] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const addOrUpdateTask = () => {
//     if (task.trim() === '') return;

//     if (editIndex !== null) {
//       const updatetask = [...taskList];
//       updatetask[editIndex] = task;
//       setTaskList(updatetask);
//       setEditIndex;
//     } else {
//       setTaskList([...taskList, task]);
//     }

//     setTask('');
//   };

//   const deleteTask = index => {
//     setTaskList(taskList.filter((_, i) => i !== index));
//   };

//   const editTask = index => {
//     setTask(taskList[index]);
//     setEditIndex(index);
//   };

//   return (
//     <View style={{padding: 20}}>
//       <TextInput
//         value={task}
//         onChangeText={setTask}
//         style={{borderWidth: 1, padding: 10, marginBottom: 10}}
//         placeholder="Enter task"
//       />
//       <TouchableOpacity
//         onPress={addOrUpdateTask}
//         style={{
//           backgroundColor: editIndex !== null ? 'orange' : 'green',
//           padding: 10,
//         }}>
//         <Text style={{color: '#fff'}}>
//           {editIndex !== null ? 'Update' : 'Add'}
//         </Text>
//       </TouchableOpacity>

//       <FlatList
//         data={taskList}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item, index}) => (
// <View
//   style={{
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   }}>
//             <Text>{item}</Text>
//             <View style={{flexDirection: 'row', gap: 5}}>
//               <TouchableOpacity
//                 onPress={() => editTask(index)}
//                 style={{backgroundColor: 'blue', padding: 5}}>
//                 <Text style={{color: '#fff'}}>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => deleteTask(index)}
//                 style={{backgroundColor: 'red', padding: 5}}>
//                 <Text style={{color: '#fff'}}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default App;

import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput, FlatList} from 'react-native';

const app = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [edittask, setEditTask] = useState(null);

  const add = () => {
    if (task.trim() === '') return;

    if (edittask !== null) {
      const update = [...taskList];
      update[edittask] = task;
      setTaskList(update);
      setEditTask(null);
    } else {
      setTaskList([...taskList, task]);
    }
    setTask('');
  };

  const deleteitem = index => {
    setTaskList(taskList.filter((_, i) => i !== index));
    setTask('');
  };

  const editTask = index => {
    setTask(taskList[index]);
    setEditTask(index);
  };

  return (
    <View>
      <TextInput
        onChangeText={setTask}
        value={task}
        placeholder="Enter Task"
        style={{borderWidth: 1, padding: 10, marginBottom: 10}}
      />
      <TouchableOpacity onPress={add}>
        <Text> {edittask !== null ? 'Update' : 'Add'}</Text>
      </TouchableOpacity>

      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text>{item}</Text>
            <View style={{flexDirection: 'row', gap: 5}}>
              <TouchableOpacity
                onPress={() => editTask(index)}
                style={{backgroundColor: 'blue', padding: 5}}>
                <Text style={{color: '#fff'}}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteitem(index)}
                style={{backgroundColor: 'red', padding: 5}}>
                <Text style={{color: '#fff'}}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default app;

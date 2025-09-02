import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import EditTaskScreen from '../screens/EditTaskScreen';
import NotesScreen from '../screens/NotesScreen';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function TabLabel({title, focused}) {
  return <Text style={{fontWeight: focused ? '700' : '500'}}>{title}</Text>;
}

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function TasksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Tasks'}}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTaskScreen}
        options={{title: 'Add / Edit Task'}}
      />
    </Stack.Navigator>
  );
}

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'TasksTab') {
            iconName = focused ? 'checkmark-done' : 'checkmark-done-outline';
          } else if (route.name === 'Notes') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarLabel: ({focused}) => (
          <TabLabel
            title={route.name === 'TasksTab' ? 'Tasks' : 'Notes'}
            focused={focused}
          />
        ),
      })}>
      <Tabs.Screen
        name="TasksTab"
        component={TasksStack}
        options={{title: 'Tasks'}}
      />
      <Tabs.Screen name="Notes" component={NotesScreen} />
    </Tabs.Navigator>
  );
}

// import React, {useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {useDispatch, useSelector} from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AuthNavigator from './AuthNavigator';
// import AppNavigator from './AppNavigator';
// import {loginSuccess} from '../redux/authSlice';

// const Stack = createStackNavigator();

// const RootNavigator = () => {
//   const dispatch = useDispatch();
//   const token = useSelector(state => state.auth.token);
//   const [loading, setLoading] = useState(true); // prevent flicker

//   useEffect(() => {
//     const bootstrapAsync = async () => {
//       try {
//         const storedToken = await AsyncStorage.getItem('userToken');
//         if (storedToken) {
//           dispatch(
//             loginSuccess({
//               user: null, // or load user too if stored
//               token: storedToken,
//             }),
//           );
//         }
//       } catch (e) {
//         console.log('Error loading token from storage:', e);
//       } finally {
//         setLoading(false);
//       }
//     };

//     bootstrapAsync();
//   }, []);

//   if (loading) {
//     return null;
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         {token ? (
//           <Stack.Screen name="App" component={AppNavigator} />
//         ) : (
//           <Stack.Screen name="Auth" component={AuthNavigator} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootNavigator;

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import {loginSuccess} from '../redux/authSlice';
import SplashScreen from '../screens/Auth/SplashScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('userToken');
        if (storedToken) {
          dispatch(
            loginSuccess({
              user: null,
              token: storedToken,
            }),
          );
        }
      } catch (e) {
        console.log('Error loading token from storage:', e);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    bootstrapAsync();
  }, [dispatch]);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <Stack.Screen name="App" component={AppNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

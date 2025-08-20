// // // import React, {useEffect, useState} from 'react';
// // // import {KeyboardAvoidingView, Platform} from 'react-native';
// // // import {NavigationContainer} from '@react-navigation/native';
// // // import messaging from '@react-native-firebase/messaging';
// // // import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
// // // import {initializeApp, getApps} from 'firebase/app'; // ✅ Modular Firebase
// // // import {SafeAreaProvider} from 'react-native-safe-area-context';
// // // import {useDispatch} from 'react-redux';

// // // import SplashScreen from './src/screens/Auth/SplashScreen';
// // // import {notificationType} from './src/redux/authSlice';
// // // import RootNavigator from './src/navigation/RootNavigator';

// // // const AppNavigationRoot = () => {
// // //   const [showSplash, setShowSplash] = useState(true);
// // //   const dispatch = useDispatch();

// // //   // Splash screen delay
// // //   useEffect(() => {
// // //     const timer = setTimeout(() => setShowSplash(false), 3000);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   // Notifications setup
// // //   useEffect(() => {
// // //     async function initialize() {
// // //       const firebaseConfig = {
// // //         apiKey: 'AIzaSyC7-8U40sIg8lax1r09hQxcleulw684xME',
// // //         projectId: 'tabelawala-c5db7',
// // //         messagingSenderId: '680284921007',
// // //         appId: '1:680284921007:android:383dc8065865cdbc0c885a',
// // //       };

// // //       // Initialize Firebase (modular)
// // //       if (getApps().length === 0) {
// // //         initializeApp(firebaseConfig);
// // //       }

// // //       // Register device for FCM
// // //       await messaging().registerDeviceForRemoteMessages();
// // //       const fcmToken = await messaging().getToken();
// // //       console.log('📲 FCM Token:', fcmToken);

// // //       // Foreground message
// // //       messaging().onMessage(async remoteMessage => {
// // //         console.log('📥 Foreground FCM:', remoteMessage);
// // //         displayNotification(remoteMessage);
// // //       });

// // //       // App opened from background state
// // //       messaging().onNotificationOpenedApp(remoteMessage => {
// // //         console.log('📥 Background Tap:', remoteMessage);
// // //         handleNotificationTap(remoteMessage);
// // //       });

// // //       // App opened from quit state (cold start)
// // //       const initialNotification = await messaging().getInitialNotification();
// // //       if (initialNotification) {
// // //         console.log('📥 Cold Start:', initialNotification);
// // //         handleNotificationTap(initialNotification);
// // //       }

// // //       // Notifee notification interaction
// // //       notifee.onForegroundEvent(({type, detail}) => {
// // //         if (type === EventType.PRESS && detail.notification?.data?.data3) {
// // //           dispatch(notificationType(detail.notification.data.data3));
// // //         }
// // //       });
// // //     }

// // //     initialize();
// // //   }, []);

// // //   const handleNotificationTap = message => {
// // //     const type = message?.data?.data3;
// // //     if (type) dispatch(notificationType(type));
// // //   };

// // //   const displayNotification = async message => {
// // //     const channelId = await notifee.createChannel({
// // //       id: 'default',
// // //       name: 'Default',
// // //       importance: AndroidImportance.HIGH,
// // //     });

// // //     await notifee.displayNotification({
// // //       title: message.notification?.title || 'New Notification',
// // //       body: message.notification?.body || '',
// // //       android: {
// // //         channelId,
// // //       },
// // //       data: message.data,
// // //     });
// // //   };

// // //   if (showSplash) {
// // //     return <SplashScreen />;
// // //   }

// // //   return (
// // //     <KeyboardAvoidingView
// // //       style={{flex: 1}}
// // //       behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
// // //       <SafeAreaProvider>
// // //         <RootNavigator />

// // //       </SafeAreaProvider>
// // //     </KeyboardAvoidingView>
// // //   );
// // // };

// // // export default AppNavigationRoot;

// // import React, {useEffect, useState} from 'react';
// // import {KeyboardAvoidingView, Platform, PermissionsAndroid} from 'react-native';
// // import {SafeAreaProvider} from 'react-native-safe-area-context';
// // import {useDispatch} from 'react-redux';
// // import {NavigationContainer} from '@react-navigation/native';
// // import messaging from '@react-native-firebase/messaging';
// // import notifee, {AndroidImportance, EventType} from '@notifee/react-native';

// // import SplashScreen from './src/screens/Auth/SplashScreen';
// // import RootNavigator from './src/navigation/RootNavigator';
// // import {notificationType} from './src/redux/authSlice';

// // const AppNavigationRoot = () => {
// //   const [showSplash, setShowSplash] = useState(true);
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     const timer = setTimeout(() => setShowSplash(false), 3000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   useEffect(() => {
// //     async function initialize() {
// //       // ✅ Request Android notification permissions (you missed this)
// //       if (Platform.OS === 'android') {
// //         const granted = await PermissionsAndroid.request(
// //           PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
// //         );
// //         if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
// //           console.warn('🚫 Notification permission denied');
// //           return;
// //         }
// //       }

// //       await messaging().registerDeviceForRemoteMessages();
// //       const fcmToken = await messaging().getToken();
// //       console.log('📲 FCM Token:', fcmToken);

// //       messaging().onMessage(async remoteMessage => {
// //         console.log('📥 Foreground:', remoteMessage);
// //         displayNotification(remoteMessage);
// //       });

// //       messaging().onNotificationOpenedApp(remoteMessage => {
// //         console.log('📥 Background tap:', remoteMessage);
// //         handleNotificationTap(remoteMessage);
// //       });

// //       const initialNotification = await messaging().getInitialNotification();
// //       if (initialNotification) {
// //         console.log('📥 Cold start tap:', initialNotification);
// //         handleNotificationTap(initialNotification);
// //       }

// //       notifee.onForegroundEvent(({type, detail}) => {
// //         if (type === EventType.PRESS && detail.notification?.data?.data3) {
// //           dispatch(notificationType(detail.notification.data.data3));
// //         }
// //       });
// //     }

// //     initialize();
// //   }, []);

// //   const handleNotificationTap = message => {
// //     const type = message?.data?.data3;
// //     if (type) dispatch(notificationType(type));
// //   };

// //   const displayNotification = async message => {
// //     const channelId = await notifee.createChannel({
// //       id: 'default',
// //       name: 'Default',
// //       importance: AndroidImportance.HIGH,
// //     });

// //     await notifee.displayNotification({
// //       title: message.notification?.title || 'New Notification',
// //       body: message.notification?.body || '',
// //       android: {
// //         channelId,
// //       },
// //       data: message.data,
// //     });
// //   };

// //   if (showSplash) {
// //     return <SplashScreen />;
// //   }

// //   return (
// //     <KeyboardAvoidingView
// //       style={{flex: 1}}
// //       behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
// //       <SafeAreaProvider>
// //         {/* <NavigationContainer> */}
// //         <RootNavigator />
// //         {/* </NavigationContainer> */}
// //       </SafeAreaProvider>
// //     </KeyboardAvoidingView>
// //   );
// // };

// // export default AppNavigationRoot;

// import React, {useEffect, useState} from 'react';
// import {
//   KeyboardAvoidingView,
//   Platform,
//   PermissionsAndroid,
//   LogBox,
// } from 'react-native';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {useDispatch} from 'react-redux';
// import messaging from '@react-native-firebase/messaging';
// import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
// import {initializeApp, getApps} from 'firebase/app';

// import SplashScreen from './src/screens/Auth/SplashScreen';
// import RootNavigator from './src/navigation/RootNavigator';
// import {notificationType} from './src/redux/authSlice';

// const AppNavigationRoot = () => {
//   const [showSplash, setShowSplash] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const timer = setTimeout(() => setShowSplash(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     async function initialize() {
//       try {
//         // Request Android notification permission
//         if (Platform.OS === 'android') {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
//           );
//           if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//             console.warn('🚫 Notification permission denied');
//             return;
//           }
//         }

//         // Firebase config
//         const firebaseConfig = {
//           apiKey: 'AIzaSyBju9uRc4AS-qvMPfbgPkpuJcXZTremGwo',
//           projectId: 'notification-56892',
//           messagingSenderId: '197255356611',
//           appId: '1:197255356611:android:fb2bf5f1779d1872654276',
//         };

//         // Initialize Firebase (modular)
//         if (getApps().length === 0) {
//           initializeApp(firebaseConfig);
//         }

//         // Register device & get FCM token
//         await messaging().registerDeviceForRemoteMessages();
//         const fcmToken = await messaging().getToken();
//         console.log('📲 FCM Token:', fcmToken);

//         // Foreground notification handler
//         messaging().onMessage(async remoteMessage => {
//           console.log('📥 Foreground:', remoteMessage);
//           displayNotification(remoteMessage);
//         });

//         // Background state
//         messaging().onNotificationOpenedApp(remoteMessage => {
//           console.log('📥 Background tap:', remoteMessage);
//           handleNotificationTap(remoteMessage);
//         });

//         // Cold start
//         const initialNotification = await messaging().getInitialNotification();
//         if (initialNotification) {
//           console.log('📥 Cold start tap:', initialNotification);
//           handleNotificationTap(initialNotification);
//         }

//         // Notifee foreground tap
//         notifee.onForegroundEvent(({type, detail}) => {
//           if (type === EventType.PRESS && detail.notification?.data?.data3) {
//             console.log('👆 Notifee Tap:', detail.notification.data.data3);
//             dispatch(notificationType(detail.notification.data.data3));
//           }
//         });
//       } catch (error) {
//         console.error('🔥 Init Error:', error);
//       }
//     }

//     initialize();
//   }, []);

//   const handleNotificationTap = message => {
//     const type = message?.data?.data3;
//     console.log('🔄 handleNotificationTap → data3:', type);
//     if (type) dispatch(notificationType(type));
//   };

//   const displayNotification = async message => {
//     console.log('📤 Displaying Notifee notification...');
//     const channelId = await notifee.createChannel({
//       id: 'default',
//       name: 'Default',
//       importance: AndroidImportance.HIGH,
//     });

//     await notifee.displayNotification({
//       title: message.notification?.title || 'New Notification',
//       body: message.notification?.body || '',
//       android: {
//         channelId,
//       },
//       data: message.data,
//     });
//   };

//   if (showSplash) {
//     return <SplashScreen />;
//   }

//   return (
//     <KeyboardAvoidingView
//       style={{flex: 1}}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//       <SafeAreaProvider>
//         <RootNavigator />
//       </SafeAreaProvider>
//     </KeyboardAvoidingView>
//   );
// };

// export default AppNavigationRoot;

import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';

import SplashScreen from './src/screens/Auth/SplashScreen';
import RootNavigator from './src/navigation/RootNavigator';
import {notificationType} from './src/redux/authSlice';

const AppNavigationRoot = () => {
  const [showSplash, setShowSplash] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function initialize() {
      // 👉 Step 1: Ask Notification Permission (Android 13+)
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.warn('🚫 Notification permission denied');
          Alert.alert(
            'Permission Required',
            'Please enable notifications in settings.',
          );
          return;
        }
      }

      // 👉 Step 2: Register for remote messages and get FCM token
      await messaging().registerDeviceForRemoteMessages();
      const fcmToken = await messaging().getToken();
      console.log('📲 FCM Token:', fcmToken);

      // 👉 Step 3: Handle Foreground Message
      messaging().onMessage(async remoteMessage => {
        console.log(
          '📥 Foreground Notification:',
          JSON.stringify(remoteMessage, null, 2),
        );
        displayNotification(remoteMessage);
      });

      // 👉 Step 4: Handle Background Tap
      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          '📥 App Opened From Background:',
          JSON.stringify(remoteMessage, null, 2),
        );
        handleNotificationTap(remoteMessage);
      });

      // 👉 Step 5: Handle Cold Start
      const initialNotification = await messaging().getInitialNotification();
      if (initialNotification) {
        console.log(
          '📥 App Opened From Quit (Cold Start):',
          JSON.stringify(initialNotification, null, 2),
        );
        handleNotificationTap(initialNotification);
      }

      // 👉 Step 6: Handle Notifee Tap Events
      notifee.onForegroundEvent(({type, detail}) => {
        if (type === EventType.PRESS && detail.notification?.data?.data3) {
          dispatch(notificationType(detail.notification.data.data3));
        }
      });
    }

    initialize();
  }, []);

  const handleNotificationTap = message => {
    const type = message?.data?.data3;
    if (type) {
      console.log('📍 Notification Tap Type:', type);
      dispatch(notificationType(type));
    }
  };

  const displayNotification = async message => {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
      title: message.notification?.title || 'New Notification',
      body: message.notification?.body || '',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
      data: message.data,
    });
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
};

export default AppNavigationRoot;

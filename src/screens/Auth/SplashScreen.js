// import React, {useEffect} from 'react';
// import {View, Text} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import {useNavigation} from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
// import {styles} from '../styles/SplashScreenStyles';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useDispatch, useSelector} from 'react-redux';

// export default function SplashScreen() {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const token = useSelector(state => state.auth.token);

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

//   useEffect(() => {
//     const checkTokenAndNavigate = async () => {
//       try {
//         const token = await AsyncStorage.getItem('token');
//         console.log('token', token);

//         setTimeout(() => {
//           if (token) {
//             navigation.replace('Auth');
//           } else {
//             navigation.replace('Auth');
//           }
//         }, 3000);
//       } catch (e) {
//         navigation.replace('Onboarding');
//       }
//     };

//     checkTokenAndNavigate();
//   }, [navigation]);

//   return (
//     <LinearGradient colors={['#FADACD', '#FADACD']} style={styles.container}>
//       <Animatable.Image
//         animation="fadeIn"
//         duration={2000}
//         source={require('../../assets/images/glowkart-logo.png')}
//         style={styles.logo}
//         resizeMode="contain"
//       />
//       <Animatable.Text animation="fadeInUp" delay={500} style={styles.text}>
//         Welcome to GlowKart
//       </Animatable.Text>
//     </LinearGradient>
//   );
// }

import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  return (
    <LinearGradient colors={['#FADACD', '#FADACD']} style={styles.container}>
      <Animatable.Image
        animation="fadeInDown"
        duration={2000}
        delay={100}
        source={require('../../assets/images/glowkart-logo.png')} // ✅ Your logo path
        style={styles.logo}
        resizeMode="contain"
      />
      <Animatable.Text
        animation="fadeInUp"
        duration={1500}
        delay={500}
        style={styles.text}>
        Welcome to GlowKart
      </Animatable.Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.6,
    height: height * 0.3,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
});

export default SplashScreen;

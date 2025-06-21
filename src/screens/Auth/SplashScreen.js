// import React, {useEffect} from 'react';
// import {View, Text, StyleSheet, Image} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import {useNavigation} from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';

// export default function SplashScreen() {
//   const navigation = useNavigation();

//   useEffect(() => {
//     setTimeout(() => {
//       navigation.replace('Onboarding');
//     }, 3000);
//   }, []);

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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     borderRadius: 30,
//   },
//   text: {
//     // color: '#FFFFFF',
//     color: ' #333333',
//     fontSize: 24,
//     // fontFamily: 'Poppins-Bold',
//     marginTop: 20,
//   },
// });

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/SplashScreenStyles';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={['#FADACD', '#FADACD']} style={styles.container}>
      <Animatable.Image
        animation="fadeIn"
        duration={2000}
        source={require('../../assets/images/glowkart-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Animatable.Text animation="fadeInUp" delay={500} style={styles.text}>
        Welcome to GlowKart
      </Animatable.Text>
    </LinearGradient>
  );
}

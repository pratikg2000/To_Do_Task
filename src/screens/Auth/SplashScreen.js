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

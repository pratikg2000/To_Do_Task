// src/screens/Auth/SplashScreenStyles.js
import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: scale(180),
    height: scale(180),
    borderRadius: scale(20),
  },
  text: {
    color: '#333333',
    fontSize: moderateScale(24),
    marginTop: verticalScale(20),
    fontWeight: '600',
  },
});

// src/screens/Auth/SignUpScreenStyles.js
import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -verticalScale(20),
  },
  flex: {
    flex: 1,
    marginTop: -verticalScale(60),
    backgroundColor: '#fff',
    borderTopLeftRadius: scale(40),
    borderTopRightRadius: scale(40),
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
    padding: scale(20),
    borderTopStartRadius: scale(20),
    borderRadius: scale(40),
  },
  form: {
    borderRadius: scale(40),
  },
  label: {
    marginBottom: verticalScale(6),
    color: 'black',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#F3F3FB',
    borderRadius: scale(8),
    padding: scale(10),
    fontSize: moderateScale(14),
    color: 'black',
    marginBottom: verticalScale(16),
  },
  inputEmail: {
    borderWidth: 1,
    borderColor: '#F3F3FB',
    borderRadius: scale(8),
    padding: scale(10),
    marginBottom: verticalScale(16),
    fontSize: moderateScale(14),
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: scale(10),
    marginBottom: scale(10),
  },
  footer: {
    marginTop: verticalScale(10),
  },
  button: {
    backgroundColor: '#181D31',
    paddingVertical: verticalScale(12),
    borderRadius: scale(10),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: 'white',
  },
});

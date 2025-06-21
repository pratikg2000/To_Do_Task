// src/screens/Auth/LoginScreenStyles.js
import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -20,
  },
  flex: {
    flex: 1,
    marginTop: -60,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
    padding: scale(20),
    borderTopStartRadius: 20,
    borderRadius: 40,
  },
  form: {
    borderRadius: 40,
  },
  label: {
    marginBottom: verticalScale(6),
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#F3F3FB',
    borderRadius: scale(8),
    padding: scale(10),
    marginBottom: verticalScale(16),
    fontSize: moderateScale(14),
    color: 'black',
  },
  footer: {},
  button: {
    backgroundColor: '#181D31',
    padding: verticalScale(12),
    borderRadius: scale(10),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;

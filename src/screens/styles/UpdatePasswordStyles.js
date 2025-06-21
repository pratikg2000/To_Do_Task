// UpdatePasswordStyles.js
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
  },
  title: {
    color: 'black',
    paddingTop: scale(20),
    paddingHorizontal: scale(20),
    fontWeight: '700',
  },
  form: {
    marginTop: verticalScale(10),
  },
  label: {
    marginBottom: verticalScale(8),
    color: 'black',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  pinBox: {
    width: scale(50),
    height: scale(50),
    borderWidth: 1,
    borderColor: '#F3F3FB',
    borderRadius: scale(10),
    textAlign: 'center',
    fontSize: moderateScale(18),
    color: 'black',
    backgroundColor: '#F9F9F9',
  },
  footer: {
    marginTop: verticalScale(20),
  },
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

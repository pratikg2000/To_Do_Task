// src/screens/Auth/OnboardingScreenStyles.js

import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  pagerView: {
    flex: 1,
    width: '100%',
  },
  page: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  slide: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    paddingTop: verticalScale(30),
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    paddingHorizontal: scale(30),
    marginTop: verticalScale(20),
    width: '100%',
  },
  slideTitle: {
    fontSize: moderateScale(24),
    color: '#333333',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: verticalScale(15),
  },
  slideDescription: {
    fontSize: moderateScale(16),
    color: '#666666',
    textAlign: 'center',
    lineHeight: verticalScale(24),
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
    backgroundColor: '#D9D9D9',
    marginHorizontal: scale(5),
  },
  activeDot: {
    backgroundColor: '#FF4F81',
    width: scale(20),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(30),
    marginBottom: verticalScale(30),
  },
  skipButton: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  skipButtonText: {
    color: '#333333',
    fontSize: moderateScale(16),
  },
  nextButton: {
    backgroundColor: '#FF4F81',
    borderRadius: scale(25),
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(25),
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#FF4F81',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;

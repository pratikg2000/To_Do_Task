import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const InputField = ({placeholder, value, onChangeText, secureTextEntry}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#555555"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#E5DFF7',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(15),
    borderRadius: moderateScale(10),
    fontSize: moderateScale(14),
    color: '#333333',
    marginBottom: verticalScale(15),
    shadowColor: '#C3AED6',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default InputField;

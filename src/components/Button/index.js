import {View, Text, TouchableOpacity} from 'react-native';

export function ErrorText(props) {
  let {label, textStyle} = props;
  return (
    <Text
      style={[
        // GlobalStyle.fontSmall,
        {width: '90%', fontSize: 12, color: 'red'},
        textStyle,
      ]}>
      {label}
    </Text>
  );
}

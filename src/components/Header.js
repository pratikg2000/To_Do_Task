import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GlobalStyle} from '../assets/fontSize/fontSize';
import {scale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
const Header = ({title, showBack = true}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar backgroundColor="#FADACD" barStyle="dark-content" />
      <View style={styles.header}>
        {showBack && (
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            {/* <Image
              source={require('../../assets/images/slider1.png')}
              style={styles.icon}
            /> */}
            <MaterialCommunityIcons
              name={'arrow-left-bottom'}
              color={'black'}
              size={scale(20)}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        <Text style={[styles.title, GlobalStyle.fontS18]}>{title}</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 200,
    justifyContent: 'center',
    backgroundColor: '#FADACD',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  title: {
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#000',
  },
});

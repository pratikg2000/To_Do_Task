import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/Header';
import {scale} from 'react-native-size-matters';
import {GlobalStyle} from '../../assets/fontSize/fontSize';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/LoginScreenStyles';
import {ErrorText} from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {loginSuccess} from '../../redux/authSlice';
import Util from '../../utilities/util';
import {Imp} from '../../BasicImp';
import store from '../../redux/store';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [EmailvalidError, setEmailValidError] = useState(false);
  const [passValidError, setPassValidError] = useState(false);
  const [loader, setLoader] = useState(false);
  const token = useSelector(state => state.auth.token);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const NewUser = () => {
    navigation.navigate('SignUpScreen');
  };

  const ForgotEmailScreen = () => {
    navigation.navigate('RecoverEmailScreen');
  };

  // const callback = async res => {
  //   console.log('res', res);
  //   setLoader(false);

  //   try {
  //     if (res?.token) {
  //       await Util.setTokens(res.token);
  //       await AsyncStorage.setItem('userToken', res.token);

  //       console.log('token', res.token);
  //     } else {
  //       console.log('Token not found in response');
  //     }
  //     dispatch(
  //       loginSuccess({
  //         user: res.user || null,
  //         token: res.token,
  //       }),
  //     );
  //   } catch (error) {
  //     console.log('Error in login callback:', error);
  //   }
  // };

  const callback = async res => {
    console.log('API Response:', res);
    setLoader(false);

    try {
      const token = res?.token;

      if (token) {
        // await Util.setTokens(token); // temporarily skip this
        try {
          await AsyncStorage.setItem('userToken', token);
          console.log('✅ Token stored in AsyncStorage:', token);
        } catch (e) {
          console.log('❌ Error saving token:', e);
        }

        dispatch(
          loginSuccess({
            user: {role: res.role || 'USER'},
            token: token,
          }),
        );
      } else {
        console.log('❌ Token not found in response');
      }
    } catch (error) {
      console.log('❌ Error in login callback:', error);
    }
  };

  setTimeout(() => {
    console.log(
      '✅ Token from Redux after dispatch:',
      store.getState().auth.token,
    );
  }, 1000);

  async function onSubmit() {
    try {
      const identifier = email;

      if (identifier.length === 0) {
        setEmailValidError(true);
        return;
      } else {
        setEmailValidError(false);
      }

      if (password.trim() === '') {
        setPassValidError(true);
        return;
      } else {
        setPassValidError(false);
      }

      setLoader(true);

      const fullUrl = `${Imp.Constant.SIGN_IN}?identifier=${encodeURIComponent(
        identifier,
      )}&password=${encodeURIComponent(password)}`;

      Imp.Util.call_Post_by_URI_Login(fullUrl, null, callback);
    } catch (error) {
      console.log('Login error:', error);
      setLoader(false);
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor="#FADACD"
        barStyle="dark-content"
        translucent={false}
      />
      <View style={styles.container}>
        <Header title="Welcome to GlowKart" showBack={false} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.flex}>
          <Text
            style={[
              GlobalStyle.fontS22,
              {
                color: 'black',
                paddingTop: scale(20),
                paddingHorizontal: scale(20),
                fontWeight: '700',
              },
            ]}>
            Login
          </Text>
          <View style={styles.inner}>
            <View style={styles.form}>
              <Text style={[styles.label, GlobalStyle.fontS12]}>
                Enter Email or Mobile
              </Text>
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com or 9876543210"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {EmailvalidError && (
                <ErrorText
                  textStyle={{
                    fontSize: 11,
                    paddingVertical: 5,
                  }}
                  label={'Required field'}
                />
              )}

              <Text style={[styles.label, GlobalStyle.fontS12]}>
                Enter Password
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              {passValidError && (
                <ErrorText
                  textStyle={{
                    fontSize: 11,
                    paddingVertical: 5,
                  }}
                  label={'Required field'}
                />
              )}

              <TouchableOpacity onPress={ForgotEmailScreen}>
                <Text style={{alignSelf: 'flex-end'}}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>
                  {loader ? 'Logging in...' : 'Login'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={NewUser}>
                <Text
                  style={[
                    GlobalStyle.fontS14,
                    {textAlign: 'center', margin: 10},
                  ]}>
                  New user? Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

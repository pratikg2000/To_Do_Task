// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   StatusBar,
//   SafeAreaView,
// } from 'react-native';
// import Header from '../../components/Header';
// import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
// import {GlobalStyle} from '../../assets/fontSize/fontSize';
// import {useNavigation} from '@react-navigation/native';

// const RecoverOtpScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

//   const handleLogin = () => {
//     console.log('Login pressed:', email, password);
//     navigation.replace('UpdatePassword');
//   };

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
//       <StatusBar
//         backgroundColor="#FADACD"
//         barStyle="dark-content"
//         translucent={false}
//       />
//       <View style={styles.container}>
//         <Header title="Verify Email" />
//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//           style={styles.flex}>
//           <Text
//             style={[
//               GlobalStyle.fontS22,
//               {
//                 color: 'black',
//                 paddingTop: scale(20),
//                 paddingHorizontal: scale(20),
//                 fontWeight: '700',
//                 paddingBottom: -20,
//                 textAlign: 'center',
//               },
//             ]}>
//             Check Your Email
//           </Text>
//           <View style={styles.inner}>
//             <View style={styles.form}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="eg. 1234"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//               <TouchableOpacity>
//                 <Text style={{alignSelf: 'center'}}>Resend code in 56s</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.footer}>
//               <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                 <Text style={styles.buttonText}>Continue</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default RecoverOtpScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     marginTop: -20,
//   },
//   flex: {
//     flex: 1,
//     marginTop: -60,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//   },
//   inner: {
//     flex: 1,
//     justifyContent: 'space-between',
//     padding: scale(20),
//     borderTopStartRadius: 20,
//     borderRadius: 40,
//   },
//   form: {
//     borderRadius: 40,
//   },
//   label: {
//     marginBottom: verticalScale(6),
//     color: 'black',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#F3F3FB',
//     borderRadius: scale(8),
//     padding: scale(10),
//     marginBottom: verticalScale(16),
//     fontSize: moderateScale(14),
//     color: 'black',
//   },
//   footer: {
//     // marginBottom: verticalScale(20),
//   },
//   button: {
//     backgroundColor: '#181D31',
//     padding: verticalScale(12),
//     borderRadius: scale(10),
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: scale(14),
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

import React, {useState} from 'react';
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
import {styles} from '../styles/RecoverOtpScreenStyles';

const RecoverOtpScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('OTP entered:', otp);
    navigation.replace('UpdatePassword');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor="#FADACD"
        barStyle="dark-content"
        translucent={false}
      />
      <View style={styles.container}>
        <Header title="Verify Email" />
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
                textAlign: 'center',
              },
            ]}>
            Check Your Email
          </Text>
          <View style={styles.inner}>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="eg. 1234"
                value={otp}
                onChangeText={setOtp}
                keyboardType="number-pad"
                maxLength={4}
              />
              <TouchableOpacity>
                <Text style={{alignSelf: 'center'}}>Resend code in 56s</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default RecoverOtpScreen;

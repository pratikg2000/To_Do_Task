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

// const RecoverEmailScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

//   const handleLogin = () => {
//     console.log('Login pressed:', email, password);
//     navigation.replace('RecoverOtpScreen');
//   };

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
//       <StatusBar
//         backgroundColor="#FADACD"
//         barStyle="dark-content"
//         translucent={false}
//       />
//       <View style={styles.container}>
//         <Header title="Recover Password" />
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
//               },
//             ]}>
//             Enter account email
//           </Text>
//           <View style={styles.inner}>
//             <View style={styles.form}>
//               <Text style={[styles.label, GlobalStyle.fontS12]}>
//                 Enter Email
//               </Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="example@gmail.com"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />

//               {/* <Text style={[styles.label, GlobalStyle.fontS12]}>
//                 Enter Password
//               </Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//               />
//               <TouchableOpacity>
//                 <Text style={{alignSelf: 'flex-end'}}>Forgot password?</Text>
//               </TouchableOpacity> */}
//             </View>

//             <View style={styles.footer}>
//               <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                 <Text style={styles.buttonText}>Continue</Text>
//               </TouchableOpacity>
//               {/* <TouchableOpacity onPress={NewUser}>
//                 <Text
//                   style={[
//                     GlobalStyle.fontS14,
//                     {textAlign: 'center', margin: 10},
//                   ]}>
//                   New user? Sing Up
//                 </Text>
//               </TouchableOpacity> */}
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default RecoverEmailScreen;

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
import {styles} from '../styles/RecoverEmailScreenStyles';

const RecoverEmailScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Login pressed:', email);
    navigation.replace('RecoverOtpScreen');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor="#FADACD"
        barStyle="dark-content"
        translucent={false}
      />
      <View style={styles.container}>
        <Header title="Recover Password" />
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
            Enter account email
          </Text>
          <View style={styles.inner}>
            <View style={styles.form}>
              <Text style={[styles.label, GlobalStyle.fontS12]}>
                Enter Email
              </Text>
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.footer}>
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

export default RecoverEmailScreen;

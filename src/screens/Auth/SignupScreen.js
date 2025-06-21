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
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const SignUpScreen = () => {
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigation = useNavigation();

//   const handleLogin = () => {
//     navigation.navigate('Login');
//   };
//   const oldUser = () => {
//     navigation.replace('Login');
//   };

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
//       <StatusBar
//         backgroundColor="#FADACD"
//         barStyle="dark-content"
//         translucent={false}
//       />
//       <View style={styles.container}>
//         <Header title="Sign Up" showBack={true} />
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
//             Build a profile to unlock your perfect glowkart
//           </Text>
//           <View style={styles.inner}>
//             <View style={styles.form}>
//               <Text style={[styles.label, GlobalStyle.fontS12]}>
//                 Enter Email
//               </Text>
//               <TextInput
//                 style={styles.inputEmail}
//                 placeholder="example@gmail.com"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />

//               <Text style={[styles.label, GlobalStyle.fontS12]}>
//                 New Password
//               </Text>
//               <View style={styles.passwordContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter new password"
//                   value={newPassword}
//                   onChangeText={setNewPassword}
//                   secureTextEntry={!showNewPassword}
//                 />
//                 <TouchableOpacity
//                   style={styles.eyeIcon}
//                   onPress={() => setShowNewPassword(!showNewPassword)}>
//                   <Ionicons
//                     name={showNewPassword ? 'eye-outline' : 'eye-off-outline'}
//                     size={22}
//                     color="#555"
//                   />
//                 </TouchableOpacity>
//               </View>

//               <Text style={[styles.label, GlobalStyle.fontS12]}>
//                 Confirm Password
//               </Text>
//               <View style={styles.passwordContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Confirm password"
//                   value={confirmPassword}
//                   onChangeText={setConfirmPassword}
//                   secureTextEntry={!showConfirmPassword}
//                 />
//                 <TouchableOpacity
//                   style={styles.eyeIcon}
//                   onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
//                   <Ionicons
//                     name={
//                       showConfirmPassword ? 'eye-outline' : 'eye-off-outline'
//                     }
//                     size={22}
//                     color="#555"
//                     style={{marginBottom: scale(6)}}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             {/* Login button at bottom */}
//             <View style={styles.footer}>
//               <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                 <Text style={styles.buttonText}>Continue</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={oldUser}>
//                 <Text
//                   style={[
//                     GlobalStyle.fontS14,
//                     {textAlign: 'center', margin: 10},
//                   ]}>
//                   Already have an account? Login
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default SignUpScreen;

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
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: verticalScale(16),
//     borderWidth: 1,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#F3F3FB',
//     borderRadius: scale(8),
//     padding: scale(10),
//     fontSize: moderateScale(14),
//     color: 'black',
//     marginBottom: verticalScale(16),
//   },
//   inputEmail: {
//     borderWidth: 1,
//     borderColor: '#F3F3FB',
//     borderRadius: scale(8),
//     padding: scale(10),
//     marginBottom: verticalScale(16),
//     fontSize: moderateScale(14),
//     color: 'black',
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: scale(10),
//     marginBottom: scale(10),
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../styles/SignUpScreenStyles';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const oldUser = () => {
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor="#FADACD"
        barStyle="dark-content"
        translucent={false}
      />
      <View style={styles.container}>
        <Header title="Sign Up" showBack={true} />
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
            Build a profile to unlock your perfect glowkart
          </Text>

          <View style={styles.inner}>
            <View style={styles.form}>
              <Text style={[styles.label, GlobalStyle.fontS12]}>
                Enter Email
              </Text>
              <TextInput
                style={styles.inputEmail}
                placeholder="example@gmail.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Text style={[styles.label, GlobalStyle.fontS12]}>
                New Password
              </Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry={!showNewPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowNewPassword(!showNewPassword)}>
                  <Ionicons
                    name={showNewPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={22}
                    color="#555"
                  />
                </TouchableOpacity>
              </View>

              <Text style={[styles.label, GlobalStyle.fontS12]}>
                Confirm Password
              </Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Ionicons
                    name={
                      showConfirmPassword ? 'eye-outline' : 'eye-off-outline'
                    }
                    size={22}
                    color="#555"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={oldUser}>
                <Text
                  style={[
                    GlobalStyle.fontS14,
                    {textAlign: 'center', margin: scale(10)},
                  ]}>
                  Already have an account? Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

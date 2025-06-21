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

// const UpdatePassword = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigation = useNavigation();

//   const handleContinue = () => {
//     console.log('Passwords:', newPassword, confirmPassword);
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
//         <Header title="Recover Password" />
//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//           style={styles.flex}>
//           <Text style={[GlobalStyle.fontS22, styles.title]}>
//             Update Password
//           </Text>
//           <View style={styles.inner}>
//             <View style={styles.form}>
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
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             <View style={styles.footer}>
//               <TouchableOpacity style={styles.button} onPress={handleContinue}>
//                 <Text style={styles.buttonText}>Continue</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default UpdatePassword;

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
//   },
//   title: {
//     color: 'black',
//     paddingTop: scale(20),
//     paddingHorizontal: scale(20),
//     fontWeight: '700',
//   },
//   form: {
//     borderRadius: 40,
//   },
//   label: {
//     marginBottom: verticalScale(6),
//     color: 'black',
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#F3F3FB',
//     borderRadius: scale(8),
//     padding: scale(10),
//     fontSize: moderateScale(14),
//     color: 'black',
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: verticalScale(16),
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: scale(10),
//   },
//   footer: {},
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

import React, {useRef, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {GlobalStyle} from '../../assets/fontSize/fontSize';
import styles from '../styles/UpdatePasswordStyles';

const UpdatePassword = () => {
  const [digits, setDigits] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const navigation = useNavigation();

  const handleChange = (text, index) => {
    if (/^\d?$/.test(text)) {
      const newDigits = [...digits];
      newDigits[index] = text;
      setDigits(newDigits);

      if (text && index < 3) {
        inputRefs.current[index + 1].focus();
      }

      if (index === 3 && text !== '') {
        // You can validate here or submit
        handleSubmit(newDigits.join(''));
      }
    }
  };

  const handleSubmit = password => {
    console.log('Password:', password);
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#FADACD" barStyle="dark-content" />
      <View style={styles.container}>
        <Header title="Recover Password" />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.flex}>
          <Text style={[GlobalStyle.fontS22, styles.title]}>
            Enter 4-digit Password
          </Text>

          <View style={styles.inner}>
            <View style={styles.form}>
              <Text style={[styles.label, GlobalStyle.fontS12]}>
                Create New 4-digit Password
              </Text>
              <View style={styles.pinContainer}>
                {digits.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={ref => (inputRefs.current[index] = ref)}
                    style={styles.pinBox}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    onChangeText={text => handleChange(text, index)}
                    secureTextEntry
                  />
                ))}
              </View>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit(digits.join(''))}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default UpdatePassword;

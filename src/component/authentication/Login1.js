import { View, Text } from 'react-native'
import React from 'react'

const Login1 = () => {
  return (
    <View>
      <Text style={{color:'black'}}>Login1</Text>
    </View>
  )
}

export default Login1

// import React, {useState, useContext} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   ScrollView,
//   Image,
//   StyleSheet,
//   Alert,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';
// import { styles } from './LoginStyle';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {NAV_PAGE} from '../../CONSTANT/String';
// import IMAGES from '../../Assets';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {useSelector, useDispatch} from 'react-redux';
// import {aaddapidata, addtot, addcc, addlog} from '../redux/Myslice';

// const Login1 = ({navigation}) => {
//   const p34 = useSelector(state => {
//     return state.alldata;
//   });
//   const {data1, log, cc, tot} = p34;
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
//   const [mailcheck, setMailcheck] = useState(false);
//   const [passcheck, setPasscheck] = useState(false);
//   const handleSignup = () => {
//     if (email === '' || password === '') {
//       Alert.alert('Provide correct email/password');
//       return;
//     }

//     const getname = async () => {
//       const val = await AsyncStorage.getItem('signup_flip');
//       const p = JSON.parse(val);

//       const dfg = p.filter(val => {
//         return val.email === email.toLowerCase() && val.password === password;
//       });

//       if (dfg != null && dfg.length > 0) {
//         navigation.navigate(NAV_PAGE.HOME);
//         dispatch(addlog(false));
//       } else {
//         Alert.alert('Provide correct email/password');
//       }
//     };
//     getname();
//   };

//   const handleImageClick1 = () => {
//     setIsPasswordVisible2(!isPasswordVisible2);
//   };
//   const handleEmail = text => {
//     const emailRegex = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
//     if (!emailRegex.test(text)) {
//       setMailcheck(true);
//     } else {
//       setMailcheck(false);
//     }
//     setEmail(text.trim());
//   };

//   const handleconfPass = text => {
//     const passwordRegex =
//       /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (!passwordRegex.test(text)) {
//       setPasscheck(true);
//     } else {
//       setPasscheck(false);
//     }
//     setPassword(text.trim());
//   };

//   const goTOSignup = () => {
//     navigation.navigate(NAV_PAGE.SIGNUP);
//   };
//   return (
//     <KeyboardAwareScrollView contentContainerStyle={styles.container}>
//       <Image source={IMAGES.FLIP_WH} style={styles.profileImage} />

//       <View style={styles.outerbox}>
//         <Text style={styles.loginhere}>Login Here</Text>
//         <View>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             onChangeText={handleEmail}
//             keyboardType="email-address"
//           />
//           {mailcheck ? (
//             <Text style={styles.warning}>
//               Email should follow abc@xyz.com this format
//             </Text>
//           ) : (
//             <Text></Text>
//           )}
//           <View style={styles.sectionStyle}>
//             <TextInput
//               style={styles.confpasscheck}
//               placeholder="Confirm Password"
//               onChangeText={handleconfPass}
//               secureTextEntry={!isPasswordVisible2}
//             />
//             <TouchableOpacity onPress={handleImageClick1}>
//               {!isPasswordVisible2 ? (
//                 <Text style={styles.margnine}>Show</Text>
//               ) : (
//                 <Text style={styles.margnine}>Hide</Text>
//               )}
//             </TouchableOpacity>
//           </View>
//           {passcheck ? (
//             <Text style={styles.passtext}>
//               A password contains at least eight characters, including at least
//               one number and includes both lower and uppercase letters and
//               special characters
//             </Text>
//           ) : (
//             <Text></Text>
//           )}
//         </View>
//         <TouchableOpacity
//           onPress={handleSignup}
//           activeOpacity={0.7}
//           style={styles.butouter}>
//           <Text style={styles.logtext}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={goTOSignup}>
//           <Text style={styles.newuser}>New User? Signup</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAwareScrollView>
//   );
// };


// export default Login1;





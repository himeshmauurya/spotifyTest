import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  export const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#047BD5',
    },
    profileImage: {
      width: wp('60%'),
      height: hp('10%'),
      marginBottom: hp('8%'),
      objectFit: 'contain',
    },
    confpasscheck: {
      flex: 1,
      marginLeft: 9,
    },
    margnine: {
      marginRight: 9,
    },
    passtext: {
      color: 'red',
      marginTop: 0,
      maxWidth: '82%',
    },
    input: {
      height: 40,
      borderWidth: 0.5,
      borderColor: 'black',
      borderRadius: 5,
      paddingLeft: 10,
      marginTop: 15,
      backgroundColor: 'white',
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 40,
      width: '80%',
      borderRadius: 5,
      marginTop: 15,
    },
    outerbox: {
      backgroundColor: 'white',
      alignItems: 'center',
      width: wp('80%'),
      height: hp('50%'),
      borderRadius: 15,
    },
    loginhere: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'darkgrey',
      marginBottom: hp('3%'),
      marginTop: hp('3%'),
    },
    warning: {
      color: 'red',
      maxWidth: '82%',
    },
    butouter: {
      backgroundColor: '#FF4200',
      padding: 10,
      borderRadius: 10,
      width: '80%',
    },
    logtext: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    newuser: {
      marginTop: 9,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#047BD5',
    },
  });
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import IMAGES from '../../../Assets';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { googlesignIn,googlesignOut } from '../../social/Googleauth';
const Signup = () => {
  const navigation=useNavigation()
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={IMAGES.SPOTIFY}
        style={{height: 90, width: 90, marginBottom: 90}}
      />
      <Text style={{color: 'white', fontSize: 35, fontWeight: 700}}>
        Millions of songs.
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 35,
          fontWeight: 700,
          marginBottom: 90,
        }}>
        Free on Spotify.
      </Text>
      <TouchableOpacity
        onPress={() => {
          console.log('Sign up for free');
        }}
        style={{
          flexDirection: 'row',
          backgroundColor: 'green',
          width: wp('80%'),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 19,
          marginBottom: 10,
        }}>
        <Text
          style={{color: 'black', fontSize: 17, margin: 5, fontWeight: 600}}>
          Sign up for free
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Sign up for phone number');
        }}
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'white',
          width: wp('80%'),
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 19,
          marginBottom: 10,
          paddingRight: 20,
          paddingLeft: 6,
        }}>
        <Image
          source={IMAGES.PHONE}
          style={{
            height: 26,
            width: 26,
            backgroundColor: 'white',
            borderRadius: 50,
            borderColor: 'black',
          }}
        />
        <Text
          style={{color: 'white', fontSize: 17, margin: 5, fontWeight: 600}}>
          Continue with phone number
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async() => {
          await googlesignIn()
          navigation.navigate('Dob')
          console.log('Sign up for Google');
        }}
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'white',
          width: wp('80%'),
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 19,
          marginBottom: 10,
          paddingRight: 60,
          paddingLeft: 6,
        }}>
        <Image source={IMAGES.GOOGLE} style={{height: 30, width: 30}} />
        <Text
          style={{color: 'white', fontSize: 17, margin: 5, fontWeight: 600}}>
          Continue with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          googlesignOut()
          console.log('Sign up for Facebook');
        }}
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'white',
          width: wp('80%'),
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 19,
          marginBottom: 10,
          paddingRight: 40,
          paddingLeft: 6,
        }}>
        <Image source={IMAGES.FACEBOOK} style={{height: 24, width: 24}} />
        <Text
          style={{color: 'white', fontSize: 17, margin: 5, fontWeight: 600}}>
          Continue with Facebook
        </Text>
      </TouchableOpacity>
      <Text style={{color: 'white', fontSize: 17, margin: 5, fontWeight: 600}}>
        Log in
      </Text>
    </View>
  );
};

export default Signup;

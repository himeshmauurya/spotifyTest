

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, View,TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
const Dob = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
const navigation=useNavigation()
  const handleConfirm = (selectedDate) => {
    setOpen(false);
    setDate(selectedDate);
  };

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
     <Text style={{fontSize:30}}>What's your Date of Birth</Text>
    
     <Text onPress={() => setOpen(true)}style={{color: 'white', fontSize: 17, margin: 5, fontWeight: 600}}>
       Select Date
      </Text>
      <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={() => {
          setOpen(false);
        }}
        
      />
      {date && (
        <Text>Selected Date: {date.toISOString().split('T')[0]}</Text>
      )}
       <TouchableOpacity
        onPress={()=>{navigation.navigate('Home')}}
        style={{
          flexDirection: 'row',
          backgroundColor: 'green',
          width: wp('40%'),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 19,
          marginTop: 90,

        }}>
        <Text
        
          style={{color: 'black', fontSize: 17, margin: 5, fontWeight: 600}}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dob;

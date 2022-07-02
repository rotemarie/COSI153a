import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useValue} from './ValueStorageContext';

const Feedback = ({ navigation }) => {
  const [fb,setFB] = useState('');
  const {currentValue} = useValue();

  return (
    <View style={{ flex: 1, padding:0, backgroundColor:"lavenderblush", flexDirection:'column', justifyContent: 'space-evenly'}}>
      <Text style={{textAlign: 'center', fontFamily:'Bangla MN', fontSize: 22, paddingTop:40}}> We want to here from you! {'\n'}{'\n'} What do you think of the app? What is good? What is missing? {'\n'}{'\n'} let us know below: </Text>
      <TextInput style={{backgroundColor: 'white'}}
                placeholder="I think that..."
                onChangeText = {(text) => {setFB(text)}}
                defaultValue = {fb}
      />    
      <Button color='lightcoral' title='SUBMIT' 
        onPress = {() => {
          console.log('sending feedback....');
          currentValue.sendFeedback(fb);
          setFB("")}}
      />
      <Button color="lightcoral" 
        title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};


export default Feedback;



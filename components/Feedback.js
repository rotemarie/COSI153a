import React, { useState} from 'react';
import {Text, View, TextInput, Button} from "react-native";
import {sendFeedback} from './FeedbackFunctions';
import HideKeyboard from './HideKeyboard';


const Feedback = ({navigation}) => {
  const [feedback,setFeedback] = useState('');

  return (
    <View style={{ flex: 1, padding:0, backgroundColor:"lavenderblush", flexDirection:'column', justifyContent: 'space-evenly'}}>
      <Text style={{textAlign: 'center', fontFamily:'Bangla MN', fontSize: 22, paddingTop:40}}> We want to here from you! {'\n'}{'\n'} What do you think of the app? What is good? What is missing? {'\n'}{'\n'} let us know below: </Text>
      <TextInput style={{backgroundColor: 'white'}}
                placeholder="I think that..."
                onChangeText = {(text) => {setFeedback(text)}}
                value = {feedback}
      />    
      <Button color='lightcoral' title='SUBMIT' 
        onPress = {() => {
          console.log('sending feedback....');
          sendFeedback(feedback);
          setFeedback("")}}
      />
      <Button color="lightcoral" 
        title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Feedback;
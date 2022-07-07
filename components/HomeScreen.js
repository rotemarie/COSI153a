import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1,  justifyContent: 'center', padding:0, backgroundColor:"lavenderblush"}}>
        
          <Text style={{fontWeight: 'bold', textAlign: 'center', fontFamily:'Bangla MN', fontSize: 40, paddingTop:40}}> CHEM3D </Text>
          <Text style={{textAlign: 'center', fontFamily:'Bangla MN', fontSize: 22, paddingTop:10}}> Your visual guide for all things chem </Text>
        
          <Text style={{textAlign: 'center', fontFamily:'Bangla MN', fontSize: 22, paddingTop:25}}>How do you want to view your models?</Text>
  
          <View style={{flex: 1,  flexDirection: "row", justifyContent:'space-evenly', paddingTop:30}}>
           <View>
            <Button color="lightcoral" 
              title="By Topic"
              onPress={() => navigation.navigate('ByTopic')}
            />
            </View>
            <View>
            <Button color="lightcoral"
              title="By Class"
              onPress={() => navigation.navigate('ByClass')}
            />
            </View>
          </View>
          <View style={{flex:1, padding: 100}}>
            <Button 
                color='lightcoral'
                title="Feedback"
                onPress={() => navigation.navigate('Feedback')}
            />
          </View>
          
      </View>
    );
  }

  export default HomeScreen;
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feedback from './components/Feedback';
import ByTopic from './components/ByTopicScreen';
import ByClass from './components/ByClassScreen';

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
      
        <Button color='lightcoral'
          title="Feedback"
          onPress={() => navigation.navigate('Feedback')}
        />
    </View>
  );
}

function ByTopicScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:'lavenderblush' }}>
      <Button color="lightcoral" 
        title="Atomic Orbitals"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button color="lightcoral" 
        title="Chair Confirmations"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button color="lightcoral" 
        title="Pericyclics"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button color="lightcoral" 
        title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ByClassScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:'lavenderblush' }}>
      <Button color="lightcoral" 
        title="Gen Chem"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button color="lightcoral" 
        title="Orgo I"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button color="lightcoral" 
        title="Orgo II"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button color="lightcoral" 
        title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ByClass" component={ByClassScreen} />
      <Stack.Screen name="ByTopic" component={ByTopicScreen} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

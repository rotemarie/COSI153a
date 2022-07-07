import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feedback from './components/Feedback';
import ByTopicScreen from './components/ByTopicScreen';
import ByClassScreen from './components/ByClassScreen';
import HomeScreen from './components/HomeScreen';
import Stereochem from './components/Stereochem';
import AtomicOrbitals from './components/AtomicOrbitals';
import GenChem from './components/GenChem';
import OrgoI from './components/OrgoI';
import OrgoII from './components/OrgoII';

/*
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
*/

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ByClass" component={ByClassScreen} />
      <Stack.Screen name="ByTopic" component={ByTopicScreen} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="Stereochem" component={Stereochem} />
      <Stack.Screen name="AtomicOrbitals" component={AtomicOrbitals} />
      <Stack.Screen name="GenChem" component={GenChem} />
      <Stack.Screen name="OrgoI" component={OrgoI} />
      <Stack.Screen name="OrgoII" component={OrgoII} />
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


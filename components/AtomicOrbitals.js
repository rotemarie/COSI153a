import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Trial1 from './Trial1';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';

function AtomicOrbitals({ navigation }) {
    const sOrb = "https://sketchfab.com/3d-models/s-orbital-75070c2d59464de787e0af30f944acc4";
    const pOrb = "https://sketchfab.com/3d-models/p-orbitals-updated-6f2806c29be94600bee615fbb78f2864";
    const fOrb = "https://sketchfab.com/efrenr/collections/orbitals";

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:'lavenderblush' }}>
        <Button color="lightcoral" 
          title="s Orbital"
          onPress={() => Linking.openURL(sOrb)}
        />
        <Button color="lightcoral"
            title="p Orbital"
            onPress={() => Linking.openURL(pOrb)}
        />
         <Button color="lightcoral"
            title="f Orbital (check them all!)"
            onPress={() => Linking.openURL(fOrb)}
        />
        <Button color="lightcoral" 
          title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  export default AtomicOrbitals;
import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Trial1 from './Trial1';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';

function Stereochem({ navigation }) {
    const superImpose = "https://sketchfab.com/3d-models/superimposing-dichloroiodomethane-mirror-images-09919717a9c14ca2a19d37682a62d9a2";
    const enantiomers = "https://sketchfab.com/3d-models/enantiomers-of-bromochloroiodomethane-4d600d77876540afb806467bd3792999"

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:'lavenderblush' }}>
        <Button color="lightcoral" 
          title="Superimposing"
          onPress={() => Linking.openURL(superImpose)}
        />
        <Button color="lightcoral"
            title="Enantiomers"
            onPress={() => Linking.openURL(enantiomers)}
        />
        <Button color="lightcoral" 
          title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  export default Stereochem;
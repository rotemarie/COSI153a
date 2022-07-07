import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function OrgoI({ navigation }) {
    const cc = "https://sketchfab.com/3d-models/cyclohexane-chair-conformation-17fe5247ae964e55ad6e33294c982622";
   
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:'lavenderblush' }}>
                <Button color="lightcoral"
          title="Sterochemistry"
          onPress={() => navigation.navigate('Stereochem')}
        />
        <Button color="lightcoral" 
          title="Chair Conformations"
          onPress={() => Linking.openURL(cc)}
        />
        <Button color="lightcoral" 
          title="Go back" onPress={() => navigation.goBack()} />
        
      </View>
    );
  }

  export default OrgoI;
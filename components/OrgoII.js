import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function OrgoII({ navigation }) {
    const pc = "https://www.youtube.com/watch?v=16k18HYkZZM";

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:'lavenderblush' }}>
        <Button color="lightcoral" 
          title="Pericyclics"
          onPress={() => Linking.openURL(pc)}
        />
        <Button color="lightcoral" 
          title="Go back" onPress={() => navigation.goBack()} />
        
      </View>
    );
  }

  export default OrgoII;

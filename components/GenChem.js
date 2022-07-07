import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function GenChem({ navigation }) {
    const mg = "https://sketchfab.com/efrenr/collections/electronicmolecular-geometries"

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:'lavenderblush' }}>
        <Button color="lightcoral" 
          title="Atomic Orbitals"
          onPress={() => navigation.navigate('AtomicOrbitals')}
        />
        <Button color="lightcoral"
            title="Molecular Geometries"
            onPress={() => Linking.openURL(mg)}
        />
        <Button color="lightcoral" 
          title="Go back" onPress={() => navigation.goBack()} />
        
      </View>
    );
  }

  export default GenChem;
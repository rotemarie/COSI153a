import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Trial1 from './Trial1';

function ByTopicScreen({ navigation }) {
    const cc = "https://sketchfab.com/3d-models/cyclohexane-chair-conformation-17fe5247ae964e55ad6e33294c982622";
    const mol = <View><Trial1/></View>
    const [orb, setOrb] = useState(false)
    const mg = "https://sketchfab.com/efrenr/collections/electronicmolecular-geometries"
    const pc = "https://www.youtube.com/watch?v=16k18HYkZZM";

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
          title="Sterochemistry"
          onPress={() => navigation.navigate('Stereochem')}
        />
        <Button color="lightcoral" 
          title="Chair Conformations"
          onPress={() => Linking.openURL(cc)}
        />
        <Button color="lightcoral" 
          title="Pericyclics"
          onPress={() => Linking.openURL(pc)}
        />
        <Button color="lightcoral" 
          title="Go back" onPress={() => navigation.goBack()} />
        
      </View>
    );
  }

  export default ByTopicScreen;

  /*
   <Button color="lightcoral" 
          title="Atomic Orbitals"
          onPress={() => setOrb(true)}
    />
    {orb?mol:<View></View>}
  */
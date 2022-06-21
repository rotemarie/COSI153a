import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AssetExample from './components/CPA2';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', textAlign: 'center', fontFamily:'Bangla MN', fontSize: 40}}>  CHEM3D </Text>
      <AssetExample/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightsteelblue'
  },

});
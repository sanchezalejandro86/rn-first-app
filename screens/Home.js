import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {
  
    
  return (
    <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  
});

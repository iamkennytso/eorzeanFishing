import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as RNStatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import RegionSelect from './view/regionSelect';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RegionSelect"
        screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen name="RegionSelect" component={RegionSelect} />
      </Stack.Navigator>
    </NavigationContainer>  
  )
}

const styles = StyleSheet.create({
  globalContainer: {
    marginTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#d3d3d3',
    borderWidth: 3,
    borderRadius: 15,
  },
});

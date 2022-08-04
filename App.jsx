import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegionSelect from './view/regionSelect';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={REGION_SELECT}
        screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen name={REGION_SELECT} component={RegionSelect} />
      </Stack.Navigator>
    </NavigationContainer>  
  )
}

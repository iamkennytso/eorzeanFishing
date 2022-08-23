import React, { createContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RegionSelect, AreaSelect, PoolView, FishView } from './view';

import { AREA_SELECT, FISH_VIEW, POOL_VIEW, REGION_SELECT } from './const/views.js'
import { SafeAreaView, View, StyleSheet,  StatusBar as RNStatusBar, } from 'react-native';

const Stack = createNativeStackNavigator();

const customReactNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}

export default function App() {
  return (
    <NavigationContainer theme={customReactNavigationTheme}>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          initialRouteName={REGION_SELECT}
          screenOptions={{
            headerShown: false,
            backgroundColor: 'transparent'
          }}
          style={styles.meh}
        >
          <Stack.Screen name={REGION_SELECT} component={RegionSelect} />
          <Stack.Screen name={AREA_SELECT} component={AreaSelect} />
          <Stack.Screen name={POOL_VIEW} component={PoolView} />
          <Stack.Screen name={FISH_VIEW} component={FishView} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    flex: 1,
    padding: 5,
    backgroundColor: '#0000FF',
    borderColor: 'lightgrey',
    borderWidth: 3,
    borderRadius: 15,
  },
});
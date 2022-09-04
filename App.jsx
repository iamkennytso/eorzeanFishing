import React, { useEffect, useCallback } from 'react';
import { SafeAreaView, StyleSheet,  StatusBar as RNStatusBar, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';

import { RegionSelect, AreaSelect, PoolView, FishView, BaitView, FishGuide, AboutView } from './view';
import { ABOUT_VIEW, AREA_SELECT, BAIT_VIEW, FISH_GUIDE, FISH_VIEW, POOL_VIEW, REGION_SELECT } from './const/views.js'
import { BLUE_BACKGROUND, BLUE_FONT, CONTAINER_BORDER_COLOR } from './styles/variables';
import HeaderBar from './components/HeaderBar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const customReactNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: BLUE_BACKGROUND
  }
}

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    (async () => {
      const grantedPermission = await AsyncStorage.getItem('trackingPermission')
      if (!grantedPermission) {
        const { status } = await requestTrackingPermissionsAsync();
        if (status === 'granted') {
          await AsyncStorage.setItem('trackingPermission', 'true')
          console.log('Tracking Permission Granted');
        }
      }
    })();
  }, []);

  const [fontsLoaded] = useFonts({
    'ffFont': require('./assets/misc/OPTIEngeEtienne.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <NavigationContainer theme={customReactNavigationTheme} >
        <SafeAreaView style={styles.container}>
          <Stack.Navigator
            initialRouteName={REGION_SELECT}
            screenOptions={{
              headerStyle: {
                backgroundColor: BLUE_BACKGROUND,
              },
              headerTintColor: BLUE_FONT
            }}
          >
            <Stack.Screen name={REGION_SELECT} options={{ headerShown: false }} component={RegionSelect} />
            <Stack.Screen name={AREA_SELECT} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />})} component={AreaSelect} />
            <Stack.Screen name={POOL_VIEW} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />})} component={PoolView} />
            <Stack.Screen name={FISH_VIEW} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />})} component={FishView} />
            <Stack.Screen name={BAIT_VIEW} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />})} component={BaitView} />
            <Stack.Screen name={FISH_GUIDE} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />})} component={FishGuide} />
            <Stack.Screen name={ABOUT_VIEW} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />})} component={AboutView} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    flex: 1,
    padding: 5,
    backgroundColor: BLUE_BACKGROUND,
    borderColor: CONTAINER_BORDER_COLOR,
    borderWidth: 3,
    borderRadius: 15,
  },
});
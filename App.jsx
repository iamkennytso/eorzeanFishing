import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, StyleSheet, StatusBar as RNStatusBar, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RegionSelect, AreaSelect, PoolView, FishView, BaitView, FishGuide, AboutView, ProfileView } from './view';
import { ABOUT_VIEW, AREA_SELECT, BAIT_VIEW, FISH_GUIDE, FISH_VIEW, POOL_VIEW, PROFILE_SEARCH, PROFILE_VIEW, REGION_SELECT } from './const/views.js'
import HeaderBar from './components/HeaderBar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { UserContext } from './util/context';
import ProfileSearch from './view/profileSearchView';
import axios from 'axios';
import { DARK, THEME } from './styles/themes';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [theme, setTheme] = useState(DARK)
  const [user, setUser] = useState(null)
  const [caughtFish, setCaughtFish] = useState(null)
  const [retrievedStorageData, setRetrievedStorageData] = useState(false)

  const customReactNavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: THEME[theme].BACKGROUND
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const [caughtFishData, userData, themeData] = await Promise.all([
          AsyncStorage.getItem('caughtFish'),
          AsyncStorage.getItem('userData'),
          AsyncStorage.getItem('theme'),
        ])
        setCaughtFish(JSON.parse(caughtFishData) || {})
        setUser(JSON.parse(userData))
        setTheme(themeData || DARK)
        setRetrievedStorageData(true)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  const handleLongPressFish = async fishId => {
    const updatedCaughtFish = { ...caughtFish, [fishId]: caughtFish[fishId] ? false : true }
    await AsyncStorage.mergeItem('caughtFish', JSON.stringify(updatedCaughtFish))
    setCaughtFish(updatedCaughtFish)
  }

  const [fontsLoaded] = useFonts({
    'ffFont': require('./assets/misc/OPTIEngeEtienne.otf'),
  });

  const getUserInfo = async lodestoneId => {
    try {
      const lodestonePayload = await axios.get(`https://xivapi.com/character/${lodestoneId}`)
      const { data } = lodestonePayload
      const updatedUser = {
        avatarUrl: data.Character.Avatar,
        id: data.Character.ID,
        level: data.Character.ClassJobs.find(job => job.ClassID === 18).Level,
        name: data.Character.Name,
        server: data.Character.Server,
      }
      await AsyncStorage.setItem('userData', JSON.stringify(updatedUser))
      setUser(updatedUser)
    } catch (e) {
      console.error(e)
    }
    return
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && retrievedStorageData) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, retrievedStorageData]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <UserContext.Provider value={{ user, caughtFish, theme, handleLongPressFish, getUserInfo, setTheme }}>
        <NavigationContainer theme={customReactNavigationTheme} >
          <SafeAreaView style={{
            ...styles.container,
            backgroundColor: THEME[theme].BACKGROUND,
            borderColor: THEME[theme].BORDER,
          }}>
            <View style={{ flex: 1, padding: 10 }}>
              <Stack.Navigator
                initialRouteName={REGION_SELECT}
                screenOptions={{
                  headerStyle: {
                    backgroundColor: THEME[theme].BACKGROUND,
                  },
                  headerTintColor: THEME[theme].FONT
                }}
              >
                <Stack.Screen name={REGION_SELECT} options={{ headerShown: false }} component={RegionSelect} />
                <Stack.Screen name={AREA_SELECT} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />, headerShadowVisible: false })} component={AreaSelect} />
                <Stack.Screen name={POOL_VIEW} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />, headerShadowVisible: false })} component={PoolView} />
                <Stack.Screen name={FISH_VIEW} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />, headerShadowVisible: false })} component={FishView} />
                <Stack.Screen name={BAIT_VIEW} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />, headerShadowVisible: false })} component={BaitView} />
                <Stack.Screen name={FISH_GUIDE} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />, headerShadowVisible: false })} component={FishGuide} />
                <Stack.Screen name={ABOUT_VIEW} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />, headerShadowVisible: false })} component={AboutView} />
                <Stack.Screen name={PROFILE_VIEW} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />, headerShadowVisible: false })} component={ProfileView} />
                <Stack.Screen name={PROFILE_SEARCH} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />, headerShadowVisible: false })} component={ProfileSearch} />
              </Stack.Navigator>
            </View>
          </SafeAreaView>
        </NavigationContainer>
      </UserContext.Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    flex: 1,
    padding: 5,
    borderWidth: 3,
    borderRadius: 15,
  },
});
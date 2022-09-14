import React, { useState, useEffect, useCallback, createContext } from 'react';
import { SafeAreaView, StyleSheet,  StatusBar as RNStatusBar, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RegionSelect, AreaSelect, PoolView, FishView, BaitView, FishGuide, AboutView, ProfileView } from './view';
import { ABOUT_VIEW, AREA_SELECT, BAIT_VIEW, FISH_GUIDE, FISH_VIEW, POOL_VIEW, PROFILE_SEARCH, PROFILE_VIEW, REGION_SELECT } from './const/views.js'
import { BLUE_BACKGROUND, BLUE_FONT, CONTAINER_BORDER_COLOR } from './styles/variables';
import HeaderBar from './components/HeaderBar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { UserContext } from './util/context';
import ProfileSearch from './view/profileSearchView';
import axios from 'axios';

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
  const [user, setUser] = useState(null)
  const [caughtFish, setCaughtFish] = useState(null)
  const [retrievedStorageData, setRetrievedStorageData] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const [caughtFishData, userData] = await Promise.all([
          AsyncStorage.getItem('caughtFish'), 
          AsyncStorage.getItem('userData')
        ])
        setCaughtFish(JSON.parse(caughtFishData))
        setUser(JSON.parse(userData))
        setRetrievedStorageData(true)
      } catch(e) {
        console.error(e)
      }
    })()
  },[])

  const handleLongPressFish = async fishId => {
    const updatedCaughtFish = {...caughtFish, [fishId]: caughtFish[fishId] ? false : true}
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
    } catch(e) {
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
      <UserContext.Provider value={{ user, caughtFish, handleLongPressFish, getUserInfo }}>
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
              <Stack.Screen name={PROFILE_VIEW} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />})} component={ProfileView} />
              <Stack.Screen name={PROFILE_SEARCH} options={({ navigation }) => ({ headerTitle: () => <HeaderBar navigation={navigation} />})} component={ProfileSearch} />
            </Stack.Navigator>
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
    backgroundColor: BLUE_BACKGROUND,
    borderColor: CONTAINER_BORDER_COLOR,
    borderWidth: 3,
    borderRadius: 15,
  },
});
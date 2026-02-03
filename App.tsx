import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet, StatusBar as RNStatusBar, View, Platform } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Import types and screens
import { RootStackParamList, SCREENS } from './src/types/navigation';
import { useTheme } from './src/store/appStore';
import { themes } from './src/features/theme/themes';
import { ErrorBoundary } from './src/shared/components';

// Import all TypeScript views
import ProfileView from './src/features/profile/ProfileView';
import ProfileSearchView from './src/features/profile/ProfileSearchView';
import RegionSelect from './src/features/fishing/RegionSelect';
import AreaSelect from './src/features/fishing/AreaSelect';
import PoolView from './src/features/fishing/PoolView';
import FishView from './src/features/fishing/FishView';
import BaitView from './src/features/fishing/BaitView';
import FishGuide from './src/features/fishing/FishGuide';
import AboutView from './src/features/fishing/AboutView';
import { HeaderBar } from './src/shared/components';

const Stack = createNativeStackNavigator<RootStackParamList>();

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// Create React Query client with proper configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function AppNavigator() {
  const theme = useTheme();
  const currentTheme = themes[theme];

  const customReactNavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: currentTheme.BACKGROUND,
    },
  };

  const defaultScreenOptions = () => ({
    headerTitle: () => <HeaderBar />,
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: currentTheme.BACKGROUND,
    },
    headerTintColor: currentTheme.FONT,
  });

  return (
    <NavigationContainer theme={customReactNavigationTheme}>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: currentTheme.BACKGROUND,
            borderColor: currentTheme.BORDER,
          },
        ]}
      >
        <View style={{ flex: 1, padding: 10 }}>
          <Stack.Navigator
            initialRouteName={SCREENS.REGION_SELECT}
            screenOptions={{
              headerStyle: {
                backgroundColor: currentTheme.BACKGROUND,
              },
              headerTintColor: currentTheme.FONT,
            }}
          >
            <Stack.Screen
              name={SCREENS.REGION_SELECT}
              component={RegionSelect}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={SCREENS.AREA_SELECT}
              component={AreaSelect}
              options={defaultScreenOptions}
            />
            <Stack.Screen
              name={SCREENS.POOL_VIEW}
              component={PoolView}
              options={defaultScreenOptions}
            />
            <Stack.Screen
              name={SCREENS.FISH_VIEW}
              component={FishView}
              options={defaultScreenOptions}
            />
            <Stack.Screen
              name={SCREENS.BAIT_VIEW}
              component={BaitView}
              options={defaultScreenOptions}
            />
            <Stack.Screen
              name={SCREENS.FISH_GUIDE}
              component={FishGuide}
              options={defaultScreenOptions}
            />
            <Stack.Screen
              name={SCREENS.ABOUT_VIEW}
              component={AboutView}
              options={defaultScreenOptions}
            />
            <Stack.Screen
              name={SCREENS.PROFILE_VIEW}
              component={ProfileView}
              options={defaultScreenOptions}
            />
            <Stack.Screen
              name={SCREENS.PROFILE_SEARCH}
              component={ProfileSearchView}
              options={defaultScreenOptions}
            />
          </Stack.Navigator>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    ffFont: require('./assets/misc/OPTIEngeEtienne.otf'),
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
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <AppNavigator />
        </View>
      </QueryClientProvider>
    </ErrorBoundary>
  );
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

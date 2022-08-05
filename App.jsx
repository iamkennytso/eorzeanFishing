import React, { createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RegionSelect, AreaSelect } from './view';

import { AREA_SELECT, REGION_SELECT } from './const/views.js'

const Stack = createNativeStackNavigator();


// const INITIAL_STATE = {
//   region: null,
//   area: null,
//   pool: null,
//   fish: null
// }

// export const StateContext = createContext()

export default function App() {
  return (
    <NavigationContainer>
      {/* <StateContext.Provider value={INITIAL_STATE}> */}
        <Stack.Navigator
          initialRouteName={REGION_SELECT}
          screenOptions={{
            headerShown: false,
        }}>
          <Stack.Screen name={REGION_SELECT} component={RegionSelect} />
          <Stack.Screen name={AREA_SELECT} component={AreaSelect} />
        </Stack.Navigator>
      {/* </StateContext.Provider> */}
    </NavigationContainer>  
  )
}

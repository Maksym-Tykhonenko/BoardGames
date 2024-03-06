import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/Profile';
import HistoryScreen from './screens/History';
import GamesScreen from './screens/Games';
import ByNatureGameScreen from './screens/TipeOfGames/ByNature';
import ByCooperationsScreen from './screens/TipeOfGames/ByCooperations';
import ByMehanicsGameScreen from './screens/TipeOfGames/ByMehanics';
import ByNumberPlayersScreen from './screens/TipeOfGames/ByNumberPlayersScreen';
import IntelectGameScreen from './screens/IntelectTipe/IntelectGameScreen';
import NewTipeOfGame from './screens/NewTipeOfGame';
import OneIntGame from './screens/IntelectTipe/OneIntGame';
import NewGame from './screens/NewGame';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GamesScreen"
          component={GamesScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ByNatureGameScreen"
          component={ByNatureGameScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ByCooperationsScreen"
          component={ByCooperationsScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ByMehanicsGameScreen"
          component={ByMehanicsGameScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ByNumberPlayersScreen"
          component={ByNumberPlayersScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="IntelectGameScreen"
          component={IntelectGameScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="NewTipeOfGame"
          component={NewTipeOfGame}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="OneIntGame"
          component={OneIntGame}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="NewGame"
          component={NewGame}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';

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
import WV from './screens/WV';
// uninstall
const App = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  ///////// useEffect що виріш який шлях включати
  const [route, setRoute] = useState(false);

  useEffect(() => {
    const checkUrl = `https://amazing-splendorous-victory.space/ktb4C3mJ`;
    const targetData = new Date('2024-04-22T12:00:00'); //дата з якої поч працювати webView
    const currentData = new Date(); //текущая дата

    if (currentData < targetData) {
      setRoute(false);
    } else {
      fetch(checkUrl)
        .then(r => {
          console.log('status', r.status);
          if (r.status === 200) {
            setRoute(true);
          } else {
            setRoute(false);
          }
        })
        .catch(e => {
          console.log('errar', e);
          setRoute(false);
        });
    }
  }, []);
  ///////// Routs в ретерне App.js
  const Routes = ({isFatch}) => {
    if (isFatch) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="WV"
            component={WV}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    } else {
      return (
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
      );
    }
  };
  return (
    <NavigationContainer>
      <Routes isFatch={route} />
    </NavigationContainer>
  );
};
export default App;

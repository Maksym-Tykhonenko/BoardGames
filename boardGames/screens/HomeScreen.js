import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen !!!</Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileScreen');
          }}>
          <Text>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HistoryScreen');
          }}>
          <Text>History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('GamesScreen');
          }}>
          <Text>Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

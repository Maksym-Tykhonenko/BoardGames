import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {uid} from 'uid';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const NewGame = ({navigation, route}) => {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  console.log('route', route.params.game);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgrN2.jpeg')}
        style={{flex: 1}}>
        <SafeAreaView
          style={{
            flex: 1,
            marginHorizontal: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/**SIDEBAR BTN open */}
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                backgroundColor: 'rgba(128, 128, 128, 0.4)',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                shadowColor: '#fdcf55',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.9,
                shadowRadius: 10,
              }}
              onPress={() => {
                setSideBarIsVisible(true);
              }}>
              <AntDesign
                name="menu-fold"
                style={{fontSize: 40, color: '#fdcf55'}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              backgroundColor: 'rgba(128, 128, 128, 0.4)',
              marginTop: 10,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{alignItems: 'center', marginTop: 5}}>
                <Text style={{color: '#fdcf55', fontSize: 30}}>
                  {route.params.game.name}
                </Text>
              </View>

              <Image
                source={{uri: route.params.game.logo}}
                style={{width: '100%', height: 250}}
              />

              <Text style={{color: '#fdcf55', fontSize: 18}}>
                {route.params.game.discreption}
              </Text>
              <View style={{height: 150}}></View>
            </ScrollView>
          </View>
        </SafeAreaView>
        {/**BTN Back */}
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 20,
            right: 0,
            width: 60,
            height: 60,
            backgroundColor: 'rgba(128, 128, 128, 0.4)',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            shadowColor: '#fdcf55',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.9,
            shadowRadius: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Entypo name="back" style={{fontSize: 40, color: '#fdcf55'}} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default NewGame;

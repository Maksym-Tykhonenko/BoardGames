import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeScreen = ({navigation}) => {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgrN2.jpeg')}
        style={{flex: 1}}>
        <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
          {/**SIDEBAR BTN */}
          <View style={{}}>
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

          {/**Content */}
          <View>
            <Text
              style={{
                fontSize: 25,
                color: '#fdcf55',
              }}>
              HELLO IT`S APP ABOUT ....
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  backgroundColor: 'rgba(128, 128, 128, 0.5)',
                  //borderWidth: 3,
                  //borderStyle: 'dashed',
                  borderColor: '#fdcf55',
                  borderRadius: 20,
                  padding: 10,
                }}>
                <Text style={{fontSize: 20, color: '#fdcf55'}}>
                  GameHub is a great app for all gaming fans that offers a wide
                  variety of games including desktop games and games for PC and
                  mobile devices. Here you will find descriptions of various
                  games, categories and subcategories, and you can also add your
                  own subcategories and games. Main functions: Categories and
                  sub-categories: GameHub organizes games into categories and
                  sub-categories so that you can easily find games based on your
                  interests, preferences and needs. Adding games and
                  subcategories: In addition to our large selection of games,
                  you can add your own subcategories and games that you like.
                  Photo gallery and game history: In your profile, you can
                  create a history of your games, add photos from your gaming
                  sessions, and record game dates and impressions. You also have
                  a photo gallery in which you can save photos of the most
                  pleasant moments from the games to show them to your friends.
                </Text>
              </View>
              <View style={{height: 100}}></View>
            </ScrollView>
          </View>

          {/**SIDEBAR */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={sideBarIsVisible}>
            <View
              style={{
                backgroundColor: '#000',
                flex: 1,
                marginRight: '30%',
                borderRightColor: '#fdcf55',
                borderWidth: 3,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              {/**BTN route & close block */}
              <View style={{marginTop: 70, marginLeft: 20}}>
                {/**BTN SideBar Close */}
                <TouchableOpacity
                  onPress={() => {
                    setSideBarIsVisible(false);
                  }}
                  style={{marginBottom: 10}}>
                  <Text
                    style={{
                      color: '#fdcf55',
                      fontSize: 40,
                      fontWeight: 'bold',
                    }}>
                    X
                  </Text>
                </TouchableOpacity>

                {/**BTN SideBar Route */}
                <View>
                  <TouchableOpacity
                    style={{marginBottom: 10}}
                    onPress={() => {
                      navigation.navigate('GamesScreen');
                      setSideBarIsVisible(false);
                    }}>
                    <Text
                      style={{
                        color: '#fdcf55',
                        fontSize: 40,
                        fontWeight: 'bold',
                      }}>
                      Games
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{marginBottom: 10}}
                    onPress={() => {
                      navigation.navigate('ProfileScreen');
                      setSideBarIsVisible(false);
                    }}>
                    <Text
                      style={{
                        color: '#fdcf55',
                        fontSize: 40,
                        fontWeight: 'bold',
                      }}>
                      Profile
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{marginBottom: 10}}
                    onPress={() => {
                      navigation.navigate('HistoryScreen');
                      setSideBarIsVisible(false);
                    }}>
                    <Text
                      style={{
                        color: '#fdcf55',
                        fontSize: 40,
                        fontWeight: 'bold',
                      }}>
                      History
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      marginBottom: 10,
                      borderBottomWidth: 1,
                      borderColor: '#fdcf55',
                      width: 140,
                    }}
                    onPress={() => {
                      navigation.navigate('Home');
                      setSideBarIsVisible(false);
                    }}>
                    <Text
                      style={{
                        color: '#fdcf55',
                        fontSize: 40,
                        fontWeight: 'bold',
                      }}>
                      About
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

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
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Entypo name="back" style={{fontSize: 40, color: 'gold'}} />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

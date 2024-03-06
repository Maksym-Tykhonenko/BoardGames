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

const HomeScreen = ({navigation}) => {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgr1.jpeg')}
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
              }}
              onPress={() => {
                setSideBarIsVisible(true);
              }}>
              <AntDesign
                name="menu-fold"
                style={{fontSize: 40, color: 'gold'}}
              />
            </TouchableOpacity>
          </View>

          {/**Content */}
          <View>
            <Text style={{fontSize: 25, color: 'gold'}}>
              HELLO IT`S APP ABOUT ....
            </Text>

            <ScrollView>
              <View
                style={{
                  backgroundColor: 'rgba(128, 128, 128, 0.5)',
                  //borderWidth: 3,
                  //borderStyle: 'dashed',
                  borderColor: 'gold',
                  borderRadius: 20,
                  padding: 10,
                }}>
                <Text style={{fontSize: 20, color: 'gold'}}>
                  A board game is a game that can be played on a table or other
                  relatively flat surface. The game takes place with the
                  participation of a relatively small number of objects that can
                  fit in the hands of the players or on the table. However, this
                  concept is quite conditional, because not all games can be
                  placed on a regular table and not every game requires it.
                  Board games can be classified according to their mechanics and
                  required tools A board game is a game that can be played on a
                  table or other relatively flat surface. The game takes place
                  with the participation of a relatively small number of objects
                  that can fit in the hands of the players or on the table.
                  However, this concept is quite conditional, because not all
                  games can be placed on a regular table and not every game
                  requires it. Board games can be classified according to their
                  mechanics and required tools A board game is a game that can
                  be played on a table or other relatively flat surface. The
                  game takes place with the participation of a relatively small
                  number of objects that can fit in the hands of the players or
                  on the table. However, this concept is quite conditional,
                  because not all games can be placed on a regular table and not
                  every game requires it. Board games can be classified
                  according to their mechanics and required tools
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
                borderRightColor: 'gold',
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
                    style={{color: 'gold', fontSize: 40, fontWeight: 'bold'}}>
                    X
                  </Text>
                </TouchableOpacity>

                {/**BTN SideBar Route */}
                <View>
                  <TouchableOpacity
                    style={{
                      marginBottom: 10,
                      borderBottomWidth: 1,
                      borderColor: 'gold',
                      width: 140,
                    }}
                    onPress={() => {
                      navigation.navigate('Home');
                      setSideBarIsVisible(false);
                    }}>
                    <Text
                      style={{color: 'gold', fontSize: 40, fontWeight: 'bold'}}>
                      Home
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{marginBottom: 10}}
                    onPress={() => {
                      navigation.navigate('GamesScreen');
                      setSideBarIsVisible(false);
                    }}>
                    <Text
                      style={{color: 'gold', fontSize: 40, fontWeight: 'bold'}}>
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
                      style={{color: 'gold', fontSize: 40, fontWeight: 'bold'}}>
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
                      style={{color: 'gold', fontSize: 40, fontWeight: 'bold'}}>
                      History
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

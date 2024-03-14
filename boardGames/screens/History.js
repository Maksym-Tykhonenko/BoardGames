import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {uid} from 'uid';

const HistoryScreen = ({navigation}) => {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  const [btnIsVivible, setBtnIsVivible] = useState(true);
  //////
  const [inputNameGame, setInputNameGame] = useState('');
  const [inputDiscrGame, setInputDiscrGame] = useState('');
  const [photo, setPhoto] = useState(null);
  const [selected, setSelected] = useState('');
  //////
  const [event, setEvent] = useState([]);
  console.log('event==>', event);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [event]);

  const setData = async () => {
    try {
      const data = {
        event,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`HistoryScreen`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`HistoryScreen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setEvent(parsedData.event);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  /////////////////////////

  const ImgPicer = () => {
    let options = {
      storageOptios: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        //console.log('response==>', response.assets[0].uri);
        setPhoto(response.assets[0].uri);
      } else {
        console.log('Вибір скасовано');
      }
    });
  };

  const handlSelectEventInfo = () => {
    if (
      inputNameGame === '' ||
      inputDiscrGame === '' ||
      selected === '' ||
      photo === null
    ) {
      setInputNameGame('');
      setInputDiscrGame('');
      setPhoto(null);

      setBtnIsVivible(true);
    } else {
      let newEvent = {
        name: inputNameGame,
        description: inputDiscrGame,
        photo: photo,
        data: selected,
      };

      setEvent([newEvent, ...event]);

      setInputNameGame('');
      setInputDiscrGame('');
      setPhoto(null);

      setBtnIsVivible(true);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/redisigen/backgr1.jpg')}
        style={{flex: 1}}>
        <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
          {/**SIDEBAR BTN */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                backgroundColor: 'rgba(128, 128, 128, 0.4)',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                borderWidth: 3,
                borderColor: '#fdcf55',
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

            <Image
              source={require('../assets/redisigen/1.png')}
              style={{width: 60, height: 60}}
            />

            <TouchableOpacity
              style={{width: 60, height: 60}}></TouchableOpacity>
          </View>

          {btnIsVivible ? (
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  setBtnIsVivible(false);
                }}
                activeOpacity={0.7}
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  width: 300,
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fdcf55',
                  borderRadius: 15,
                  shadowColor: '#fdcf55',
                  shadowOffset: {width: 0, height: 3},
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  ADD EVENT
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{alignItems: 'center'}}>
              <ScrollView>
                <TextInput
                  placeholder="Name of the game..."
                  placeholderTextColor={'#fdcf55'}
                  //multiline={true}
                  style={{
                    color: '#fdcf55',
                    width: 300,
                    height: 60,
                    borderColor: '#fdcf55',
                    borderWidth: 3,
                    padding: 8,
                    borderRadius: 15,
                    marginTop: 20,
                    fontSize: 20,
                    shadowColor: '#fdcf55',
                    shadowOffset: {width: 0, height: 3},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}
                  onChangeText={setInputNameGame}
                  value={inputNameGame}
                />

                <TextInput
                  placeholder="Discription..."
                  placeholderTextColor={'#fdcf55'}
                  multiline={true}
                  style={{
                    color: '#fdcf55',
                    width: 300,
                    height: 120,
                    borderColor: '#fdcf55',
                    borderWidth: 3,
                    padding: 8,
                    borderRadius: 15,
                    marginTop: 20,
                    fontSize: 20,
                    shadowColor: '#fdcf55',
                    shadowOffset: {width: 0, height: 3},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}
                  onChangeText={setInputDiscrGame}
                  value={inputDiscrGame}
                />

                <TouchableOpacity
                  onPress={() => {
                    ImgPicer();
                  }}
                  activeOpacity={0.7}
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                    width: 300,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fdcf55',
                    borderRadius: 15,
                    shadowColor: '#fdcf55',
                    shadowOffset: {width: 0, height: 3},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Photo from the game
                  </Text>
                </TouchableOpacity>

                {/**Calendar */}
                <View style={{}}>
                  <Calendar
                    style={{
                      width: 300,
                      borderWidth: 3,
                      borderRadius: 15,
                      borderColor: '#fdcf55',
                      shadowColor: '#fdcf55',
                      shadowOffset: {width: 0, height: 3},
                      shadowOpacity: 0.9,
                      shadowRadius: 10,
                    }}
                    onDayPress={day => {
                      setSelected(day.dateString);
                    }}
                    markedDates={{
                      [selected]: {
                        selected: true,
                        disableTouchEvent: true,
                        selectedDotColor: 'orange',
                      },
                    }}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      handlSelectEventInfo();
                    }}
                    activeOpacity={0.7}
                    style={{
                      marginTop: 20,
                      marginBottom: 20,
                      width: 300,
                      height: 60,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#fdcf55',
                      borderRadius: 15,
                      shadowColor: '#fdcf55',
                      shadowOffset: {width: 0, height: 3},
                      shadowOpacity: 0.9,
                      shadowRadius: 10,
                    }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      Add an event
                    </Text>
                  </TouchableOpacity>
                  <View style={{height: 150}}></View>
                </View>
              </ScrollView>
            </View>
          )}

          <ScrollView>
            {event.map(e => {
              return (
                <View
                  key={uid()}
                  style={{
                    width: '100%',
                    marginBottom: 10,
                    backgroundColor: 'rgba(128, 128, 128, 0.4)',
                    padding: 5,
                    borderRadius: 10,
                    shadowColor: '#fdcf55',
                    shadowOffset: {width: 0, height: 3},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}>
                  <Text>data: {e.data}</Text>
                  <Text>name: {e.name}</Text>
                  <Text>discr: {e.description}</Text>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      source={{uri: e.photo}}
                      style={{width: '90%', height: 200, borderRadius: 15}}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>

          {/**SIDEBAR */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={sideBarIsVisible}>
            <View
              style={{
                backgroundColor: '#560eda',
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
                    style={{
                      marginBottom: 10,
                      borderBottomWidth: 1,
                      borderColor: '#fdcf55',
                      width: 140,
                    }}
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
            <Entypo name="back" style={{fontSize: 40, color: '#fdcf55'}} />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HistoryScreen;

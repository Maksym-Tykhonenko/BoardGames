import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {uid} from 'uid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectPhoto, setSelectPhoto] = useState([]);
  //console.log('selectPhoto==>', selectPhoto);
  const [avatar, setAvatar] = useState(null);
  const [prevName, setPrevName] = useState('');
  const [prevAge, setPrevAge] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [selectPhoto, avatar, name, age]);

  const setData = async () => {
    try {
      const data = {
        selectPhoto,
        avatar,
        name,
        age,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`ProfileScreen`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`ProfileScreen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setSelectPhoto(parsedData.selectPhoto);
        setAvatar(parsedData.avatar);
        setName(parsedData.name);
        setAge(parsedData.age);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  /////////////////////////

  const AvatarPicer = () => {
    let options = {
      storageOptios: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        //console.log('response==>', response.assets[0].uri);
        setAvatar(response.assets[0].uri);
      } else {
        console.log('Вибір скасовано');
      }
    });
  };

  const ImagePicer = () => {
    let options = {
      storageOptios: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        //console.log('response==>', response.assets[0].uri);
        setSelectPhoto([response.assets[0].uri, ...selectPhoto]);
      } else {
        console.log('Вибір скасовано');
      }
    });
  };

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
            <ScrollView>
              <KeyboardAvoidingView>
                {/**AVATAR */}
                <View style={{alignItems: 'center'}}>
                  {!avatar ? (
                    <TouchableOpacity
                      onPress={() => {
                        AvatarPicer();
                      }}
                      style={{
                        width: 250,
                        height: 250,
                        borderWidth: 5,
                        borderColor: '#fdcf55',
                        borderRadius: 125,
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowColor: '#fdcf55',
                        shadowOffset: {width: 0, height: 3},
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                      }}>
                      <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                        PRESS HIRE
                      </Text>
                      <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                        FOR
                      </Text>
                      <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                        ADD PHOTO
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        AvatarPicer();
                      }}
                      style={{
                        width: 250,
                        height: 250,
                        borderWidth: 5,
                        borderColor: '#fdcf55',
                        borderRadius: 125,
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowColor: '#fdcf55',
                        shadowOffset: {width: 0, height: 3},
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                      }}>
                      <Image
                        source={{uri: avatar}}
                        style={{width: 235, height: 235, borderRadius: 125}}
                      />
                    </TouchableOpacity>
                  )}
                </View>

                {/** MY DATA */}
                {!name ? (
                  <View
                    style={{
                      alignItems: 'center',
                      position: 'relative',
                      marginTop: 20,
                    }}>
                    <TextInput
                      placeholder="Name..."
                      placeholderTextColor={'#fdcf55'}
                      //multiline={true}
                      style={{
                        color: '#fdcf55',
                        width: '80%',
                        height: 60,
                        borderColor: '#fdcf55',
                        borderWidth: 3,
                        padding: 8,
                        borderRadius: 15,
                        //marginTop: 20,
                        fontSize: 20,
                        shadowColor: '#fdcf55',
                        shadowOffset: {width: 0, height: 3},
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                      }}
                      onChangeText={setPrevName}
                      value={prevName}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        setName(prevName);
                      }}
                      activeOpacity={0.95}
                      style={{
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 60,
                        width: 60,
                        backgroundColor: '#fdcf55',
                        right: 30,
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15,
                      }}>
                      <Entypo name="check" style={{fontSize: 30}} />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: '#fdcf55',
                        fontSize: 40,
                        shadowColor: '#fdcf55',
                        shadowOffset: {width: 0, height: 3},
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                      }}>
                      {name}
                    </Text>
                  </View>
                )}

                {!age ? (
                  <View
                    style={{
                      alignItems: 'center',
                      position: 'relative',
                      marginTop: 20,
                    }}>
                    <TextInput
                      keyboardType="numeric"
                      placeholder="Age..."
                      placeholderTextColor={'#fdcf55'}
                      //multiline={true}
                      style={{
                        color: '#fdcf55',
                        width: '80%',
                        height: 60,
                        borderColor: '#fdcf55',
                        borderWidth: 3,
                        padding: 8,
                        borderRadius: 15,
                        //
                        fontSize: 20,
                        shadowColor: '#fdcf55',
                        shadowOffset: {width: 0, height: 3},
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                      }}
                      onChangeText={setPrevAge}
                      value={prevAge}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setAge(prevAge);
                      }}
                      activeOpacity={0.95}
                      style={{
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 60,
                        width: 60,
                        backgroundColor: '#fdcf55',
                        right: 30,
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15,
                      }}>
                      <Entypo name="check" style={{fontSize: 30}} />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: '#fdcf55',
                        fontSize: 40,
                        shadowColor: '#fdcf55',
                        shadowOffset: {width: 0, height: 3},
                        shadowOpacity: 0.9,
                        shadowRadius: 10,
                      }}>
                      {age} years
                    </Text>
                  </View>
                )}

                <View style={{alignItems: 'center', marginTop: 20}}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalIsVisible(true);
                    }}
                    activeOpacity={0.7}
                    style={{
                      width: 250,
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
                      OPEN GALLARY
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{height: 300}}></View>
              </KeyboardAvoidingView>
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
                    style={{
                      marginBottom: 10,
                      borderBottomWidth: 1,
                      borderColor: '#fdcf55',
                      width: 140,
                    }}
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

          {/**GAllary */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalIsVisible}>
            <View
              style={{
                backgroundColor: '#000',
                flex: 1,
                marginTop: '30%',
                borderColor: '#fdcf55',
                borderWidth: 3,
                borderRadius: 40,
                shadowColor: '#fdcf55',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.9,
                shadowRadius: 10,
              }}>
              <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity
                  onPress={() => {
                    setModalIsVisible(false);
                  }}>
                  <Text
                    style={{
                      color: '#fdcf55',
                      fontSize: 40,
                      fontWeight: 'bold',
                      marginRight: 10,
                      marginTop: 10,
                      shadowColor: '#fdcf55',
                      shadowOffset: {width: 0, height: 3},
                      shadowOpacity: 0.9,
                      shadowRadius: 10,
                    }}>
                    X
                  </Text>
                </TouchableOpacity>
              </View>

              <ScrollView>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#fdcf55',
                      fontSize: 40,
                      fontWeight: 'bold',
                      marginRight: 10,
                      marginTop: 10,
                      shadowColor: '#fdcf55',
                      shadowOffset: {width: 0, height: 3},
                      shadowOpacity: 0.9,
                      shadowRadius: 10,
                    }}>
                    GALLARY
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    //width: width,
                  }}>
                  {selectPhoto.map(selectPhoto => {
                    return (
                      <Image
                        key={uid()}
                        style={{
                          width: '45%',
                          height: 150,
                          marginLeft: '3%',
                          marginRight: '1%',
                          marginTop: 10,
                          borderRadius: 20,
                        }}
                        source={{uri: selectPhoto}}
                      />
                    );
                  })}
                </View>
              </ScrollView>

              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    ImagePicer();
                  }}
                  style={{
                    marginBottom: 20,
                    marginTop: 10,
                    width: 250,
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
                  <Text>ADD PHOTO</Text>
                </TouchableOpacity>
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

export default ProfileScreen;

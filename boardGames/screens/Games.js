import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {uid} from 'uid';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GamesScreen = ({navigation}) => {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [selectPhoto, setSelectPhoto] = useState(null);
  const [newTipes, setNewTipes] = useState([]);
  console.log('newTipes==>', newTipes);
  console.log('selectPhoto==>', selectPhoto);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [newTipes]);

  const setData = async () => {
    try {
      const data = {
        newTipes,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`GamesScreen`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`GamesScreen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setNewTipes(parsedData.newTipes);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  /////////////////////////

  const ImagePicer = () => {
    let options = {
      storageOptios: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        console.log('response==>', response.assets[0].uri);
        setSelectPhoto(response.assets[0].uri);
      } else {
        console.log('Вибір скасовано');
      }
    });
  };

  const handleAddTipesOfTheGame = () => {
    let newType = {
      titel: inputText,
      photo: selectPhoto,
    };

    setNewTipes([...newTipes, newType]);

    setInputText('');
    setSelectPhoto(null);
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgrN2.jpeg')}
        style={{flex: 1}}>
        <SafeAreaView
          style={{flex: 1, marginHorizontal: 10, position: 'relative'}}>
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

            {/**add tipes BTN */}
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
                setModalIsVisible(true);
              }}>
              <Entypo
                name="add-to-list"
                style={{fontSize: 40, color: '#fdcf55'}}
              />
            </TouchableOpacity>
          </View>

          <View>
            <View style={{alignItems: 'center'}}>
              {/**Title */}
              <Text
                style={{fontSize: 30, fontWeight: 'bold', color: '#fdcf55'}}>
                TIPES OF GAMES:{' '}
              </Text>

              {/**Tipe of games Btn block */}
              <ScrollView>
                <View>
                  {newTipes.map(tipe => {
                    return (
                      <TouchableOpacity
                        key={uid()}
                        onPress={() => {
                          navigation.navigate('NewTipeOfGame', {
                            titel: tipe.titel,
                          });
                        }}
                        style={{
                          position: 'relative',
                          alignItems: 'center',
                          marginBottom: 15,
                          borderWidth: 3,
                          borderColor: '#fdcf55',
                          //borderStyle: 'dashed',
                          borderTopRightRadius: 30,
                          borderTopLeftRadius: 30,
                          shadowColor: '#fdcf55',
                          shadowOffset: {width: 0, height: 3},
                          shadowOpacity: 0.9,
                          shadowRadius: 10,
                        }}>
                        <Image
                          source={{uri: tipe.photo}}
                          style={{
                            width: 350,
                            height: 250,
                            borderTopRightRadius: 30,
                            borderTopLeftRadius: 30,
                          }}
                        />
                        <View style={{alignItems: 'center'}}>
                          <Text
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              width: 'auto',
                              fontSize: 25,
                              backgroundColor: 'rgba(128, 128, 128, 0.6)',
                              width: '100%',
                              paddingLeft: 30,
                              color: '#fdcf55',
                            }}>
                            {tipe.titel}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}

                  {/**BTN 1 */}
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ByNatureGameScreen');
                    }}
                    style={{
                      position: 'relative',
                      alignItems: 'center',
                      marginBottom: 15,
                      borderWidth: 3,
                      borderColor: '#fdcf55',
                      //borderStyle: 'dashed',
                      borderTopRightRadius: 30,
                      borderTopLeftRadius: 30,
                      shadowColor: '#fdcf55',
                      shadowOffset: {width: 0, height: 3},
                      shadowOpacity: 0.9,
                      shadowRadius: 10,
                    }}>
                    <Image
                      source={require('../assets/natureOfGame.jpeg')}
                      style={{
                        width: 350,
                        height: 250,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                      }}
                    />
                    <View style={{alignItems: 'center'}}>
                      <Text
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          width: 'auto',
                          fontSize: 25,
                          backgroundColor: 'rgba(128, 128, 128, 0.6)',
                          width: '100%',
                          paddingLeft: 30,
                          color: '#fdcf55',
                        }}>
                        By the nature of the game
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {/**BTN 2 */}
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ByNumberPlayersScreen');
                    }}
                    style={{
                      position: 'relative',
                      alignItems: 'center',
                      marginBottom: 15,
                      borderTopRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderWidth: 3,
                      borderColor: '#fdcf55',
                      shadowColor: '#fdcf55',
                      shadowOffset: {width: 0, height: 3},
                      shadowOpacity: 0.9,
                      shadowRadius: 10,
                    }}>
                    <Image
                      source={require('../assets/nastolnye-igry-dlya-kompanii.jpeg')}
                      style={{
                        width: 350,
                        height: 250,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                      }}
                    />
                    <View style={{alignItems: 'center'}}>
                      <Text
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          width: 'auto',
                          fontSize: 25,
                          backgroundColor: 'rgba(128, 128, 128, 0.6)',
                          width: '100%',
                          paddingLeft: 30,
                          color: '#fdcf55',
                        }}>
                        By the number of players
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {/**BTN 3 */}
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ByMehanicsGameScreen');
                    }}
                    style={{
                      position: 'relative',
                      alignItems: 'center',
                      marginBottom: 15,
                      borderTopRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderWidth: 3,
                      borderColor: '#fdcf55',
                      shadowColor: '#fdcf55',
                      shadowOffset: {width: 0, height: 3},
                      shadowOpacity: 0.9,
                      shadowRadius: 10,
                    }}>
                    <Image
                      source={require('../assets/bgr.jpeg')}
                      style={{
                        width: 350,
                        height: 250,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                      }}
                    />
                    <View style={{alignItems: 'center'}}>
                      <Text
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          width: 'auto',
                          fontSize: 25,
                          backgroundColor: 'rgba(128, 128, 128, 0.6)',
                          width: '100%',
                          paddingLeft: 30,
                          color: '#fdcf55',
                        }}>
                        By the mechanics of the game
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {/**BTN 4 */}
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ByCooperationsScreen');
                    }}
                    style={{
                      position: 'relative',
                      alignItems: 'center',
                      marginBottom: 15,
                      borderWidth: 3,
                      borderColor: '#fdcf55',
                      //borderStyle: 'dashed',
                      borderTopRightRadius: 30,
                      borderTopLeftRadius: 30,
                      shadowColor: '#fdcf55',
                      shadowOffset: {width: 0, height: 3},
                      shadowOpacity: 0.9,
                      shadowRadius: 10,
                    }}>
                    <Image
                      source={require('../assets/degreeOfCoop.jpeg')}
                      style={{
                        width: 350,
                        height: 250,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                      }}
                    />
                    <View style={{alignItems: 'center'}}>
                      <Text
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          width: 'auto',
                          fontSize: 25,
                          backgroundColor: 'rgba(128, 128, 128, 0.6)',
                          width: '100%',
                          paddingLeft: 30,
                          color: '#fdcf55',
                        }}>
                        By the degree of cooperation players
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <View style={{height: 150}}></View>
                </View>
              </ScrollView>
            </View>
          </View>

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
                    style={{
                      marginBottom: 10,
                      borderBottomWidth: 1,
                      borderColor: '#fdcf55',
                      width: 140,
                    }}
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

          {/**Modal add tipes */}
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
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalIsVisible(!modalIsVisible);
                  setInputText('');
                }}
                style={{
                  alignItems: 'flex-end',
                  marginRight: 20,
                  marginTop: 10,
                }}>
                <Text
                  style={{color: '#fdcf55', fontSize: 35, fontWeight: 'bold'}}>
                  X
                </Text>
              </TouchableOpacity>

              <View style={{alignItems: 'center'}}>
                <Text
                  style={{color: '#fdcf55', fontSize: 25, fontWeight: 'bold'}}>
                  Add game types:
                </Text>
              </View>

              <View style={{alignItems: 'center'}}>
                <TextInput
                  multiline={true}
                  style={{
                    color: '#fdcf55',
                    width: '80%',
                    height: 120,
                    borderColor: '#fdcf55',
                    borderWidth: 3,
                    padding: 8,
                    borderRadius: 15,
                    marginTop: 20,
                    fontSize: 20,
                  }}
                  onChangeText={setInputText}
                  value={inputText}
                />

                {/**BTN add photo or Img*/}

                <TouchableOpacity
                  onPress={() => {
                    ImagePicer();
                  }}
                  style={{
                    color: '#fdcf55',
                    width: 150,
                    height: 60,
                    borderColor: '#fdcf55',
                    borderWidth: 3,
                    padding: 5,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      color: '#fdcf55',
                      fontWeight: 'bold',
                      fontSize: 25,
                    }}>
                    PHOTO
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    handleAddTipesOfTheGame();
                  }}
                  style={{
                    color: '#fdcf55',
                    width: 150,
                    height: 60,
                    borderColor: '#fdcf55',
                    borderWidth: 3,
                    padding: 5,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      color: '#fdcf55',
                      fontWeight: 'bold',
                      fontSize: 25,
                    }}>
                    ADD
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default GamesScreen;

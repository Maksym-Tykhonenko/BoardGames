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
import AsyncStorage from '@react-native-async-storage/async-storage';

const IntelectGameScreen = ({navigation, route}) => {
  console.log('params', route.params.title);
  const [exampleGames, setExampleGames] = useState(route.params.exampleGames);
  //console.log('exampleGames', exampleGames);
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [selectPhoto, setSelectPhoto] = useState(null);
  const [newTipes, setNewTipes] = useState([]);
  console.log('newTipes==>', newTipes);
  console.log('selectPhoto==>', selectPhoto);
  const title = route.params.titel;
  console.log('title', title);

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
      await AsyncStorage.setItem(
        `IntelectGameScreen${route.params.title}`,
        jsonData,
      );
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(
        `IntelectGameScreen${route.params.title}`,
      );
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
      name: inputText,
      logo: selectPhoto,
      discreption: inputDescription,
    };

    setNewTipes([...newTipes, newType]);

    setInputDescription('');
    setInputText('');
    setSelectPhoto(null);
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/bgrN2.jpeg')}>
        <SafeAreaView style={{marginHorizontal: 20}}>
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

          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#fdcf55', fontWeight: 'bold', fontSize: 25}}>
              {route.params.title}:
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {exampleGames.map(i => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('OneIntGame', {game: i});
                  }}
                  style={{
                    position: 'relative',
                    alignItems: 'center',
                    marginBottom: 15,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderWidth: 3,
                    borderColor: '#fdcf55',
                    //width: 340,
                    shadowColor: '#fdcf55',
                    shadowOffset: {width: 0, height: 3},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}
                  key={uid()}>
                  <Image
                    source={i.logo}
                    style={{
                      width: '100%',
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
                      {i.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}

            {newTipes.map(i => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('NewGame', {game: i});
                  }}
                  style={{
                    position: 'relative',
                    alignItems: 'center',
                    marginBottom: 15,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderWidth: 3,
                    borderColor: '#fdcf55',
                    //width: 340,
                    shadowColor: '#fdcf55',
                    shadowOffset: {width: 0, height: 3},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
                  }}
                  key={uid()}>
                  <Image
                    source={{uri: i.logo}}
                    style={{
                      width: '100%',
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
                      {i.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}

            <View style={{height: 150}}></View>
          </ScrollView>
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
                  setInputDescription('');
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

              <ScrollView>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#fdcf55',
                      fontSize: 25,
                      fontWeight: 'bold',
                    }}>
                    Add game types:
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <TextInput
                    placeholder="name of the game..."
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
                      marginTop: 20,
                      fontSize: 20,
                    }}
                    onChangeText={setInputText}
                    value={inputText}
                  />

                  <TextInput
                    multiline={true}
                    placeholder="description..."
                    placeholderTextColor={'#fdcf55'}
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
                    onChangeText={setInputDescription}
                    value={inputDescription}
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

                <View style={{height: 300}}></View>
              </ScrollView>
            </View>
          </Modal>
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

export default IntelectGameScreen;

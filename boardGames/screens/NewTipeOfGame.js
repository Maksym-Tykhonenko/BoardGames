import React, {useState} from 'react';
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

const NewTipeOfGame = ({navigation, route}) => {
  console.log('route', route.params.titel);
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [discriptionText, setDiscriptionText] = useState('');
  const [selectPhoto, setSelectPhoto] = useState(null);
  const [newTipes, setNewTipes] = useState([]);
  console.log('newTipes==>', newTipes);
  console.log('selectPhoto==>', selectPhoto);

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
      discription: discriptionText,
      photo: selectPhoto,
    };

    setNewTipes([...newTipes, newType]);

    setInputText('');
    setDiscriptionText('');
    setSelectPhoto(null);
    setModalIsVisible(!modalIsVisible);
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/bgr1.jpeg')}>
        <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
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
              }}
              onPress={() => {
                setSideBarIsVisible(true);
              }}>
              <AntDesign
                name="menu-fold"
                style={{fontSize: 40, color: 'gold'}}
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
              }}
              onPress={() => {
                setModalIsVisible(true);
              }}>
              <Entypo
                name="add-to-list"
                style={{fontSize: 40, color: 'gold'}}
              />
            </TouchableOpacity>
          </View>

          <Text style={{color: 'gold', fontSize: 30, fontWeight: 'bold'}}>
            {route.params.titel}
          </Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            {newTipes.map(tipe => {
              return (
                <View
                  key={uid()}
                  style={{
                    backgroundColor: 'rgba(128, 128, 128, 0.4)',
                    width: '100%',
                    marginBottom: 10,
                    borderRadius: 20,
                  }}>
                  <Image
                    source={{uri: tipe.photo}}
                    style={{width: '100%', height: 200, borderRadius: 20}}
                  />
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{color: 'gold', fontSize: 25, fontWeight: 'bold'}}>
                      {tipe.titel}
                    </Text>
                    <Text style={{color: 'gold', fontSize: 18}}>
                      Discription: {tipe.discription}
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>

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
                    style={{
                      marginBottom: 10,
                      borderBottomWidth: 1,
                      borderColor: 'gold',
                      width: 140,
                    }}
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
                    style={{
                      marginBottom: 10,
                    }}
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
                borderColor: 'gold',
                borderWidth: 3,
                borderRadius: 40,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalIsVisible(!modalIsVisible);
                  setInputText('');
                  setDiscriptionText('');
                }}
                style={{
                  alignItems: 'flex-end',
                  marginRight: 20,
                  marginTop: 10,
                }}>
                <Text style={{color: 'gold', fontSize: 35, fontWeight: 'bold'}}>
                  X
                </Text>
              </TouchableOpacity>

              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'gold', fontSize: 25, fontWeight: 'bold'}}>
                  Add game types:
                </Text>
              </View>

              <View style={{alignItems: 'center'}}>
                <TextInput
                  placeholder="Enter type name..."
                  placeholderTextColor="rgba(255, 215, 0, 100)"
                  //multiline={true}
                  style={{
                    color: 'gold',
                    width: '80%',
                    height: 60,
                    borderColor: 'gold',
                    borderWidth: 3,
                    padding: 10,
                    borderRadius: 15,
                    marginTop: 20,
                    fontSize: 20,
                  }}
                  onChangeText={setInputText}
                  value={inputText}
                />

                <TextInput
                  placeholder="Discription..."
                  placeholderTextColor="rgba(255, 215, 0, 100)"
                  multiline={true}
                  style={{
                    color: 'gold',
                    width: '80%',
                    height: 120,
                    borderColor: 'gold',
                    borderWidth: 3,
                    padding: 10,
                    borderRadius: 15,
                    marginTop: 20,
                    fontSize: 20,
                  }}
                  onChangeText={setDiscriptionText}
                  value={discriptionText}
                />

                {/**BTN add photo or Img*/}

                <TouchableOpacity
                  onPress={() => {
                    ImagePicer();
                  }}
                  style={{
                    color: 'gold',
                    width: '80%',
                    height: 60,
                    borderColor: 'gold',
                    borderWidth: 3,
                    padding: 5,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <Text
                    style={{color: 'gold', fontWeight: 'bold', fontSize: 25}}>
                    ADD PHOTO
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    handleAddTipesOfTheGame();
                  }}
                  style={{
                    color: 'gold',
                    width: 150,
                    height: 60,
                    borderColor: 'gold',
                    borderWidth: 3,
                    padding: 5,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <Text
                    style={{color: 'gold', fontWeight: 'bold', fontSize: 25}}>
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

export default NewTipeOfGame;

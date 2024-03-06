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
} from 'react-native';
import {uid} from 'uid';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const tipes = [
  {
    title: 'Everyone for himself',
    photo: require('../../assets/Everyone-for-himself.jpeg'),
    exampleGames: [
      {
        name: 'chess',
        logo: require('../../assets/chess.webp'),
        discreption: `
Chess is a two-player strategy board game that has been played for centuries, captivating minds with its intricate rules and endless possibilities. The game is played on an 8x8 square board, with each player starting with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns.

The objective of chess is to checkmate your opponent's king, which means placing their king in a position where it is under attack and cannot escape capture. Players achieve this by moving their pieces strategically across the board, using a combination of tactics, foresight, and planning.

Each type of piece moves in a unique way:

The king can move one square in any direction.
The queen can move any number of squares diagonally, horizontally, or vertically.
Rooks move any number of squares horizontally or vertically.
Bishops move any number of squares diagonally.
Knights move in an "L" shape: two squares in one direction and then one square perpendicular to that.
Pawns move forward one square, but capture diagonally. On their first move, pawns have the option to move forward two squares.
The game unfolds as players maneuver their pieces to control the center of the board, protect their own pieces, and attack their opponent's. Tactics such as forks, pins, skewers, and discovered attacks add layers of complexity to the game. A strong understanding of positional play, pawn structures, and endgame techniques is essential for success.

Chess is not only a game of skill but also a test of mental stamina, patience, and concentration. It has evolved into a competitive sport, with professional players competing in tournaments worldwide. Moreover, it serves as a tool for education, fostering critical thinking, problem-solving, and strategic planning skills.

Overall, chess is a timeless game that continues to captivate players of all ages and backgrounds, challenging them to unlock the secrets of the 64 squares and master the art of warfare on the chessboard.`,
      },
      {
        name: 'Go',
        logo: require('../../assets/Go_board.jpg'),
        discreption: `Go, also known as Weiqi in Chinese and Baduk in Korean, is a strategic board game that originated in ancient China over 2,500 years ago. It is renowned for its simplicity of rules combined with profound strategic depth, making it one of the most complex and intellectually stimulating games in the world.

The game is played on a grid board, typically 19x19 lines, although smaller board sizes like 9x9 or 13x13 are also common for beginners or shorter games. Players take turns placing black and white stones on the intersections of the lines, aiming to control territory and capture their opponent's stones.

The objective of Go is to surround and capture territory while simultaneously preventing your opponent from doing the same. Unlike chess, where the pieces are captured by directly attacking them, in Go, stones are captured by surrounding them with your own stones so that they have no liberties, or empty adjacent intersections, left.

Go is distinguished by its simple rules and emergent complexity. Despite having only a few rules, the game offers an incredibly vast number of possible board positions and strategic variations, creating endless opportunities for creative and deep gameplay. Players must balance offense and defense, as well as short-term tactics with long-term strategy, to outmaneuver their opponent and dominate the board.

Strategic concepts in Go include influence, territory, shape, thickness, and capturing races. Players strive to build strong positions, create efficient shapes, and anticipate their opponent's moves to gain a positional advantage. The endgame phase is crucial, where players solidify their territories, reduce their opponent's influence, and maximize their own score.

Go has a rich cultural heritage and is deeply ingrained in East Asian traditions. It has also gained popularity worldwide, with a thriving international community of players, tournaments, and professional organizations. The game is not only a test of strategic thinking but also promotes qualities such as patience, concentration, humility, and respect for one's opponent.

In summary, Go is a timeless and elegant game that challenges players to navigate the complexities of strategy, intuition, and psychological warfare on the 19x19 grid, making it a revered pursuit for enthusiasts and scholars alike.`,
      },
    ],
  },
  {
    title: 'Team games',
    photo: require('../../assets/Team.webp'),
    exampleGames: [
      {
        name: 'chess',
        logo: require('../../assets/chess.webp'),
        discreption: `
Chess is a two-player strategy board game that has been played for centuries, captivating minds with its intricate rules and endless possibilities. The game is played on an 8x8 square board, with each player starting with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns.

The objective of chess is to checkmate your opponent's king, which means placing their king in a position where it is under attack and cannot escape capture. Players achieve this by moving their pieces strategically across the board, using a combination of tactics, foresight, and planning.

Each type of piece moves in a unique way:

The king can move one square in any direction.
The queen can move any number of squares diagonally, horizontally, or vertically.
Rooks move any number of squares horizontally or vertically.
Bishops move any number of squares diagonally.
Knights move in an "L" shape: two squares in one direction and then one square perpendicular to that.
Pawns move forward one square, but capture diagonally. On their first move, pawns have the option to move forward two squares.
The game unfolds as players maneuver their pieces to control the center of the board, protect their own pieces, and attack their opponent's. Tactics such as forks, pins, skewers, and discovered attacks add layers of complexity to the game. A strong understanding of positional play, pawn structures, and endgame techniques is essential for success.

Chess is not only a game of skill but also a test of mental stamina, patience, and concentration. It has evolved into a competitive sport, with professional players competing in tournaments worldwide. Moreover, it serves as a tool for education, fostering critical thinking, problem-solving, and strategic planning skills.

Overall, chess is a timeless game that continues to captivate players of all ages and backgrounds, challenging them to unlock the secrets of the 64 squares and master the art of warfare on the chessboard.`,
      },
      {
        name: 'Go',
        logo: require('../../assets/Go_board.jpg'),
        discreption: `Go, also known as Weiqi in Chinese and Baduk in Korean, is a strategic board game that originated in ancient China over 2,500 years ago. It is renowned for its simplicity of rules combined with profound strategic depth, making it one of the most complex and intellectually stimulating games in the world.

The game is played on a grid board, typically 19x19 lines, although smaller board sizes like 9x9 or 13x13 are also common for beginners or shorter games. Players take turns placing black and white stones on the intersections of the lines, aiming to control territory and capture their opponent's stones.

The objective of Go is to surround and capture territory while simultaneously preventing your opponent from doing the same. Unlike chess, where the pieces are captured by directly attacking them, in Go, stones are captured by surrounding them with your own stones so that they have no liberties, or empty adjacent intersections, left.

Go is distinguished by its simple rules and emergent complexity. Despite having only a few rules, the game offers an incredibly vast number of possible board positions and strategic variations, creating endless opportunities for creative and deep gameplay. Players must balance offense and defense, as well as short-term tactics with long-term strategy, to outmaneuver their opponent and dominate the board.

Strategic concepts in Go include influence, territory, shape, thickness, and capturing races. Players strive to build strong positions, create efficient shapes, and anticipate their opponent's moves to gain a positional advantage. The endgame phase is crucial, where players solidify their territories, reduce their opponent's influence, and maximize their own score.

Go has a rich cultural heritage and is deeply ingrained in East Asian traditions. It has also gained popularity worldwide, with a thriving international community of players, tournaments, and professional organizations. The game is not only a test of strategic thinking but also promotes qualities such as patience, concentration, humility, and respect for one's opponent.

In summary, Go is a timeless and elegant game that challenges players to navigate the complexities of strategy, intuition, and psychological warfare on the 19x19 grid, making it a revered pursuit for enthusiasts and scholars alike.`,
      },
    ],
  },
  {
    title: 'Coalition games',
    photo: require('../../assets/the-coalition.jpg'),
    exampleGames: [
      {
        name: 'chess',
        logo: require('../../assets/chess.webp'),
        discreption: `
Chess is a two-player strategy board game that has been played for centuries, captivating minds with its intricate rules and endless possibilities. The game is played on an 8x8 square board, with each player starting with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns.

The objective of chess is to checkmate your opponent's king, which means placing their king in a position where it is under attack and cannot escape capture. Players achieve this by moving their pieces strategically across the board, using a combination of tactics, foresight, and planning.

Each type of piece moves in a unique way:

The king can move one square in any direction.
The queen can move any number of squares diagonally, horizontally, or vertically.
Rooks move any number of squares horizontally or vertically.
Bishops move any number of squares diagonally.
Knights move in an "L" shape: two squares in one direction and then one square perpendicular to that.
Pawns move forward one square, but capture diagonally. On their first move, pawns have the option to move forward two squares.
The game unfolds as players maneuver their pieces to control the center of the board, protect their own pieces, and attack their opponent's. Tactics such as forks, pins, skewers, and discovered attacks add layers of complexity to the game. A strong understanding of positional play, pawn structures, and endgame techniques is essential for success.

Chess is not only a game of skill but also a test of mental stamina, patience, and concentration. It has evolved into a competitive sport, with professional players competing in tournaments worldwide. Moreover, it serves as a tool for education, fostering critical thinking, problem-solving, and strategic planning skills.

Overall, chess is a timeless game that continues to captivate players of all ages and backgrounds, challenging them to unlock the secrets of the 64 squares and master the art of warfare on the chessboard.`,
      },
      {
        name: 'Go',
        logo: require('../../assets/Go_board.jpg'),
        discreption: `Go, also known as Weiqi in Chinese and Baduk in Korean, is a strategic board game that originated in ancient China over 2,500 years ago. It is renowned for its simplicity of rules combined with profound strategic depth, making it one of the most complex and intellectually stimulating games in the world.

The game is played on a grid board, typically 19x19 lines, although smaller board sizes like 9x9 or 13x13 are also common for beginners or shorter games. Players take turns placing black and white stones on the intersections of the lines, aiming to control territory and capture their opponent's stones.

The objective of Go is to surround and capture territory while simultaneously preventing your opponent from doing the same. Unlike chess, where the pieces are captured by directly attacking them, in Go, stones are captured by surrounding them with your own stones so that they have no liberties, or empty adjacent intersections, left.

Go is distinguished by its simple rules and emergent complexity. Despite having only a few rules, the game offers an incredibly vast number of possible board positions and strategic variations, creating endless opportunities for creative and deep gameplay. Players must balance offense and defense, as well as short-term tactics with long-term strategy, to outmaneuver their opponent and dominate the board.

Strategic concepts in Go include influence, territory, shape, thickness, and capturing races. Players strive to build strong positions, create efficient shapes, and anticipate their opponent's moves to gain a positional advantage. The endgame phase is crucial, where players solidify their territories, reduce their opponent's influence, and maximize their own score.

Go has a rich cultural heritage and is deeply ingrained in East Asian traditions. It has also gained popularity worldwide, with a thriving international community of players, tournaments, and professional organizations. The game is not only a test of strategic thinking but also promotes qualities such as patience, concentration, humility, and respect for one's opponent.

In summary, Go is a timeless and elegant game that challenges players to navigate the complexities of strategy, intuition, and psychological warfare on the 19x19 grid, making it a revered pursuit for enthusiasts and scholars alike.`,
      },
    ],
  },
  {
    title: 'Cooperative games',
    photo: require('../../assets/Cooperative.webp'),
    exampleGames: [
      {
        name: 'chess',
        logo: require('../../assets/chess.webp'),
        discreption: `
Chess is a two-player strategy board game that has been played for centuries, captivating minds with its intricate rules and endless possibilities. The game is played on an 8x8 square board, with each player starting with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns.

The objective of chess is to checkmate your opponent's king, which means placing their king in a position where it is under attack and cannot escape capture. Players achieve this by moving their pieces strategically across the board, using a combination of tactics, foresight, and planning.

Each type of piece moves in a unique way:

The king can move one square in any direction.
The queen can move any number of squares diagonally, horizontally, or vertically.
Rooks move any number of squares horizontally or vertically.
Bishops move any number of squares diagonally.
Knights move in an "L" shape: two squares in one direction and then one square perpendicular to that.
Pawns move forward one square, but capture diagonally. On their first move, pawns have the option to move forward two squares.
The game unfolds as players maneuver their pieces to control the center of the board, protect their own pieces, and attack their opponent's. Tactics such as forks, pins, skewers, and discovered attacks add layers of complexity to the game. A strong understanding of positional play, pawn structures, and endgame techniques is essential for success.

Chess is not only a game of skill but also a test of mental stamina, patience, and concentration. It has evolved into a competitive sport, with professional players competing in tournaments worldwide. Moreover, it serves as a tool for education, fostering critical thinking, problem-solving, and strategic planning skills.

Overall, chess is a timeless game that continues to captivate players of all ages and backgrounds, challenging them to unlock the secrets of the 64 squares and master the art of warfare on the chessboard.`,
      },
      {
        name: 'Go',
        logo: require('../../assets/Go_board.jpg'),
        discreption: `Go, also known as Weiqi in Chinese and Baduk in Korean, is a strategic board game that originated in ancient China over 2,500 years ago. It is renowned for its simplicity of rules combined with profound strategic depth, making it one of the most complex and intellectually stimulating games in the world.

The game is played on a grid board, typically 19x19 lines, although smaller board sizes like 9x9 or 13x13 are also common for beginners or shorter games. Players take turns placing black and white stones on the intersections of the lines, aiming to control territory and capture their opponent's stones.

The objective of Go is to surround and capture territory while simultaneously preventing your opponent from doing the same. Unlike chess, where the pieces are captured by directly attacking them, in Go, stones are captured by surrounding them with your own stones so that they have no liberties, or empty adjacent intersections, left.

Go is distinguished by its simple rules and emergent complexity. Despite having only a few rules, the game offers an incredibly vast number of possible board positions and strategic variations, creating endless opportunities for creative and deep gameplay. Players must balance offense and defense, as well as short-term tactics with long-term strategy, to outmaneuver their opponent and dominate the board.

Strategic concepts in Go include influence, territory, shape, thickness, and capturing races. Players strive to build strong positions, create efficient shapes, and anticipate their opponent's moves to gain a positional advantage. The endgame phase is crucial, where players solidify their territories, reduce their opponent's influence, and maximize their own score.

Go has a rich cultural heritage and is deeply ingrained in East Asian traditions. It has also gained popularity worldwide, with a thriving international community of players, tournaments, and professional organizations. The game is not only a test of strategic thinking but also promotes qualities such as patience, concentration, humility, and respect for one's opponent.

In summary, Go is a timeless and elegant game that challenges players to navigate the complexities of strategy, intuition, and psychological warfare on the 19x19 grid, making it a revered pursuit for enthusiasts and scholars alike.`,
      },
    ],
  },
];

const ByCooperationsScreen = ({navigation}) => {
  const [games, setGames] = useState(tipes);
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  console.log(games);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/bgr1.jpeg')}
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
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'gold', fontSize: 25}}>
              By the degree of cooperation players :
            </Text>
          </View>

          <ScrollView>
            {games.map(i => {
              return (
                <TouchableOpacity
                  key={uid()}
                  onPress={() => {
                    navigation.navigate('IntelectGameScreen', {
                      exampleGames: i.exampleGames,
                      title: i.title,
                    });
                  }}
                  style={{
                    position: 'relative',
                    alignItems: 'center',
                    marginBottom: 15,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderWidth: 3,
                    borderColor: 'gold',
                  }}>
                  <Image
                    source={i.photo}
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
                        color: 'gold',
                      }}>
                      {i.title}
                    </Text>
                  </View>
                </TouchableOpacity>
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
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ByCooperationsScreen;

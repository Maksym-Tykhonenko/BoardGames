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

const tipes = [
  {
    title: 'Intellectual games',
    photo: require('../../assets/Intellectual_games.jpeg'),
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
    title: 'Gambling games',
    photo: require('../../assets/Gambling.webp'),
    exampleGames: [
      {
        name: 'Poker',
        logo: require('../../assets/Poker.jpeg'),
        discreption: `Poker is a popular card game that combines elements of skill, strategy, probability, and psychology. It is played in various forms around the world, both casually among friends and family and competitively in casinos and online platforms.

The game typically involves a standard deck of 52 playing cards, although variations may use additional cards or modified decks. Players are dealt a hand of cards, and the objective is to win chips or money by either having the best hand at showdown or by convincing opponents to fold their hands.

One of the defining features of poker is its betting rounds, where players can wager chips based on the strength of their hand and their confidence in winning the pot. Betting actions include checking, betting, calling, raising, or folding, each of which carries its own strategic implications.

The most common variant of poker is Texas Hold'em, where players are dealt two private cards (hole cards) and must combine them with five community cards to make the best possible five-card hand. Other popular variants include Omaha, Seven-Card Stud, and Draw Poker, each with its own unique rules and strategies.

Poker hands are ranked according to their probability and strength, with combinations like straight flushes and full houses being stronger than high-card hands or pairs. Understanding hand rankings and probabilities is essential for making informed decisions during gameplay.

In addition to mastering the mathematical aspects of the game, successful poker players must also excel in psychological warfare. Bluffing, deception, and reading opponents' behavior are integral parts of the game, as players attempt to manipulate their opponents' perceptions and decisions.

Poker is not only a game of skill but also a test of emotional control and mental fortitude. Players must remain calm under pressure, manage their emotions, and adapt their strategies to changing circumstances throughout the game.

The game's popularity has skyrocketed in recent decades, fueled by televised tournaments, online platforms, and celebrity endorsements. Professional poker players compete for millions of dollars in prize money in prestigious events like the World Series of Poker (WSOP) and the World Poker Tour (WPT).

Overall, poker offers a dynamic and intellectually stimulating gaming experience that appeals to players of all ages and backgrounds. Whether played for fun with friends or pursued as a serious competitive endeavor, poker continues to captivate enthusiasts around the globe with its blend of skill, strategy, and excitement.`,
      },
      {
        name: 'Roulette',
        logo: require('../../assets/Roulette.webp'),
        discreption: `Roulette is a classic and iconic casino game that is enjoyed by players around the world. It is known for its simplicity, elegance, and the thrill of chance it offers to players.

The game features a spinning wheel with numbered pockets, typically ranging from 0 to 36 in European and French variations, and an additional 00 pocket in American roulette. The pockets are alternately colored red and black, while the 0 and 00 pockets are usually green. A small ball is spun around the rim of the wheel, eventually coming to rest in one of the numbered pockets.

Players place bets on where they think the ball will land, either on specific numbers, groups of numbers, or characteristics such as color (red or black), odd or even numbers, or high or low numbers. The betting options are diverse, offering varying odds and payouts based on the likelihood of the outcome.

Once all bets are placed, the dealer spins the wheel in one direction and the ball in the opposite direction. As the ball loses momentum, it falls into one of the numbered pockets, determining the winning outcome.

Roulette is a game of pure chance, with the outcome of each spin being independent of previous spins. However, players can employ different betting strategies to manage their bankroll and potentially increase their chances of winning. Popular strategies include the Martingale system, where players double their bets after each loss in an attempt to recoup losses, and the Fibonacci system, which is based on a mathematical sequence.

The game's simplicity and fast-paced nature make it a favorite among both novice and experienced gamblers. It offers an adrenaline rush as players wait to see where the ball will land, with the anticipation building as the wheel slows down.

Roulette has become synonymous with the glamour and excitement of casinos, featuring prominently in popular culture and movies. It is a staple of casino floors worldwide, attracting players with its iconic spinning wheel and the promise of big wins.

Overall, roulette is a timeless and thrilling game of chance that continues to captivate players with its elegance, simplicity, and the potential for excitement and big wins with each spin of the wheel.`,
      },
    ],
  },
  {
    title: 'Physical ability games',
    photo: require('../../assets/Physical_ability.jpeg'),
    exampleGames: [
      {
        name: 'Football',
        logo: require('../../assets/Football.jpeg'),
        discreption: `Football, known as soccer in some countries, is the world's most popular sport, played and watched by millions of people of all ages around the globe. It is a dynamic team sport that combines athleticism, skill, strategy, and passion.

The game is played between two teams, each consisting of 11 players, on a rectangular field with goals at each end. The objective of football is to score goals by kicking the ball into the opposing team's goal while preventing them from doing the same.

Football matches are divided into two halves, typically lasting 45 minutes each, with a brief halftime interval. The game is overseen by a referee, who enforces the rules and regulations of the sport, ensuring fair play and safety.

Players are allowed to use any part of their body except their hands and arms to play the ball, with the exception of the goalkeeper who can use their hands within their own penalty area. The game is characterized by its fast pace, constant movement, and fluid transitions between attack and defense.

Football requires a diverse range of skills, including dribbling, passing, shooting, tackling, and positional awareness. Players must work together as a cohesive unit to move the ball up the field, create scoring opportunities, and defend against their opponents' attacks.

The sport is celebrated for its moments of brilliance, with players showcasing their individual talent and creativity through skillful maneuvers, precision passes, and stunning goals. Iconic moments in football history, such as Diego Maradona's "Hand of God" goal or Lionel Messi's dribbling runs, have become legendary in the sport's folklore.

Football also fosters camaraderie, teamwork, and sportsmanship among players and fans alike. Matches often bring communities together, uniting people from diverse backgrounds and cultures in support of their favorite teams.

At the professional level, football is organized into leagues and competitions, ranging from local and national leagues to international tournaments such as the FIFA World Cup and the UEFA Champions League. These events showcase the highest level of talent and competition, drawing millions of viewers and spectators worldwide.

Overall, football is more than just a sport; it is a global phenomenon that transcends borders, languages, and cultures. It embodies the values of teamwork, passion, and perseverance, captivating hearts and minds around the world with its beauty and excitement.`,
      },
      {
        name: 'Basketball',
        logo: require('../../assets/Basketball.jpeg'),
        discreption: `Basketball is a fast-paced and exhilarating team sport that is played and enjoyed by millions of people worldwide. It combines athleticism, skill, strategy, and teamwork in an exciting and dynamic manner.

The game is played between two teams, each consisting of five players, on a rectangular court with a hoop at each end. The objective of basketball is to score points by shooting the ball through the opponent's hoop while preventing them from doing the same.

Players move the ball by dribbling (bouncing) it while walking or running and passing it to teammates. They can also score points by shooting the ball into the opponent's hoop from various distances on the court. Shots made from closer to the hoop are worth fewer points, while shots made from farther away are worth more.

Defensively, players aim to steal the ball, block shots, and prevent their opponents from scoring. The game is characterized by its fast pace, high energy, and constant movement, with players sprinting up and down the court, making quick decisions, and executing precise maneuvers.

Basketball requires a diverse range of skills, including dribbling, shooting, passing, rebounding, and defending. Players must also possess physical attributes such as speed, agility, strength, and endurance to excel in the sport.

The sport fosters teamwork, communication, and strategic thinking, as players work together to outmaneuver their opponents and create scoring opportunities. Successful teams often have a combination of individual talent and cohesive teamwork, with players supporting each other and playing to each other's strengths.

Basketball is played at various levels, from recreational leagues and school teams to professional leagues such as the NBA (National Basketball Association) in the United States and international competitions like the FIBA Basketball World Cup. These events showcase the highest level of talent and competition, drawing millions of fans and spectators worldwide.

Basketball has also become a global cultural phenomenon, influencing fashion, music, and popular culture. It transcends borders and languages, bringing people together from diverse backgrounds and cultures in support of their favorite teams and players.

Overall, basketball is more than just a sport; it is a source of inspiration, excitement, and camaraderie for millions of people around the world. It embodies the values of teamwork, perseverance, and determination, captivating fans with its electrifying action and thrilling moments.`,
      },
    ],
  },
];

const ByNatureGameScreen = ({navigation}) => {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);

  const [games, setGames] = useState(tipes);
  console.log('games', games);

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
              By the nature of game :
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
                    //width: 340,
                  }}>
                  <Image
                    source={i.photo}
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

export default ByNatureGameScreen;

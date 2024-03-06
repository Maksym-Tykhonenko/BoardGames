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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const tipes = [
  {
    title: 'For one',
    photo: require('../../assets/forOne.jpeg'),
    exampleGames: [
      {
        name: 'Solitaire',
        logo: require('../../assets/Solitaire.webp'),
        discreption: `Solitaire, also known as Patience, is a classic single-player card game that has been enjoyed by millions of people around the world for generations. It is played with a standard deck of 52 playing cards and involves arranging cards on a tabletop according to specific rules and objectives.

The objective of Solitaire varies depending on the specific variant being played, but the most common goal is to arrange all the cards in a specific order or pattern. The game typically begins with a shuffled deck of cards laid out in a predetermined layout, with some cards face-up and others face-down.

Players move cards around the tableau according to a set of rules, which usually involve stacking cards in alternating colors and descending numerical order. The ultimate goal is to build up the four foundation piles, each starting with an Ace and ascending to the King in a specific suit.

Solitaire requires strategic thinking, planning, and problem-solving skills, as players must carefully consider each move to avoid getting stuck and unable to progress. There is an element of luck involved, as the initial layout of the cards and the order in which they are drawn from the stockpile can impact the outcome of the game.

The game can be played in various forms, including Klondike, Spider, FreeCell, and Pyramid Solitaire, each with its own unique rules and challenges. Some variants are more complex and challenging than others, offering players a wide range of options and opportunities for gameplay.

Solitaire is a versatile game that can be played almost anywhere, requiring only a deck of cards and a flat surface. It is a popular pastime for people of all ages, offering a relaxing and enjoyable way to pass the time while also stimulating the mind and sharpening cognitive skills.

Overall, Solitaire is a timeless classic that continues to captivate players with its simplicity, versatility, and endless opportunities for fun and entertainment. Whether played as a solitary activity or as a social game with friends and family, Solitaire remains a beloved pastime for card game enthusiasts worldwide.`,
      },
      {
        name: 'Chess vs. Computer',
        logo: require('../../assets/ChessVsComputer.jpeg'),
        discreption: `Chess vs. computer is a fascinating encounter that showcases the blend of human intellect and artificial intelligence. In this scenario, a human player faces off against a computer program designed to play chess, often at an advanced level of proficiency. Here's a description of this interaction:

1. **Human vs. Machine**: The game begins with the human player making their move, typically by selecting a piece and moving it according to the rules of chess. The computer program then evaluates the position and responds with its move, calculated based on algorithms, heuristics, and extensive search techniques.

2. **Challenges and Complexity**: Playing chess against a computer presents unique challenges due to the complexity of the game. Chess is a game of immense depth, with virtually limitless possibilities and strategic nuances. The computer is capable of analyzing positions far beyond the capabilities of the human mind, considering thousands or even millions of potential moves and variations in a matter of seconds.

3. **Adaptability and Learning**: Computer chess programs often incorporate machine learning techniques, enabling them to adapt and improve over time. Some programs can learn from their mistakes, analyze past games to identify patterns and trends, and refine their strategies accordingly. This adaptability makes them formidable opponents, capable of challenging even the most skilled human players.

4. **Human Ingenuity vs. Computational Power**: Despite the computer's computational power and analytical abilities, human players possess unique strengths such as intuition, creativity, and emotional intelligence. Human players can sometimes outmaneuver computers through unconventional or unexpected moves, exploiting weaknesses in the computer's algorithms or finding innovative solutions to complex positions.

5. **Educational and Training Tool**: Playing chess against a computer can be a valuable educational and training tool for players of all skill levels. It provides an opportunity to test and improve one's chess skills, learn from the computer's strategies and tactics, and gain insights into the game's intricacies. Many chess programs offer features such as tutorials, analysis tools, and adjustable difficulty levels to accommodate players of varying abilities.

6. **Competitive and Recreational Pursuit**: Chess vs. computer games can be played competitively in tournaments or as casual recreational activities. Some players enjoy the challenge of competing against powerful computer opponents, while others use computer chess programs as a means of relaxation, entertainment, or intellectual stimulation.

Overall, chess vs. computer represents a compelling intersection of human ingenuity and technological innovation, highlighting the remarkable capabilities of both human and artificial intelligence. Whether as a test of skill, a learning tool, or a recreational pursuit, this interaction continues to fascinate and inspire players of all backgrounds and abilities.`,
      },
    ],
  },
  {
    title: 'For a fixed quantity',
    photo: require('../../assets/forFixed.jpeg'),
    exampleGames: [
      {
        name: 'Carcassonne',
        logo: require('../../assets/Carcassonne.webp'),
        discreption: `Carcassonne is a popular tile-placement board game that combines elements of strategy, planning, and territorial control. Designed for 2-5 players, the game is set in the medieval French countryside and is named after the fortified city of Carcassonne.

The game components include a set of square tiles depicting various landscape features such as cities, roads, fields, and monasteries, as well as wooden tokens representing followers or "meeples" in different colors.

The objective of Carcassonne is to score points by strategically placing tiles to create and expand cities, roads, and fields, and by deploying followers to claim these features for points.

Players take turns drawing tiles from a face-down stack and placing them on the table to expand the playing area. Each tile must be placed adjacent to existing tiles following specific rules: roads must connect to roads, cities to cities, and so on.

After placing a tile, a player may choose to deploy one of their followers onto the tile to claim a feature. For example, a follower placed on a road becomes a highwayman, while one placed in a city becomes a knight. Each feature scores points differently at the end of the game.

The game continues until all tiles have been placed, at which point players calculate their final scores. Points are awarded for completed cities, roads, and monasteries, as well as for controlling fields with farmers.

Carcassonne offers a mix of strategic depth and simplicity, making it accessible to players of all ages and skill levels. The game requires careful planning and decision-making as players compete to control valuable features and maximize their point-scoring opportunities.

Carcassonne also encourages interaction and competition among players as they vie for control of cities and roads, sometimes blocking each other's progress or stealing points at the last moment.

Expansion sets and additional modules are available for Carcassonne, introducing new tiles, rules, and gameplay mechanics to keep the game fresh and engaging over multiple plays.

Overall, Carcassonne is a beloved board game known for its elegant design, engaging gameplay, and replayability. It offers a rich and immersive gaming experience that continues to captivate players worldwide.`,
      },
      {
        name: 'Scramble',
        logo: require('../../assets/Scramble.jpeg'),
        discreption: `It seems you might be referring to a game called "Scrabble" rather than "Scramble." Here's a description of Scrabble:

Scrabble is a classic word game where players compete to create words on a game board using letter tiles. The game is designed for 2 to 4 players and is played on a square board divided into a grid of cells. Each cell is assigned a specific point value, which corresponds to the score received when a letter tile is placed on it.

At the beginning of the game, each player draws a set number of letter tiles from a pool of tiles. The number of tiles varies depending on the total number of players. Players then take turns forming words on the board by placing their letter tiles on the squares. Words can be formed horizontally or vertically and must connect to other words already on the board.

Players earn points for each word they create, with the score determined by the total value of the letters used and any premium squares occupied by the tiles. Premium squares include double and triple letter score squares, as well as double and triple word score squares, which multiply the points earned for that word or letter.

Scrabble requires players to use their vocabulary, spelling, and strategic thinking skills to maximize their score and outmaneuver their opponents. Players must also carefully manage their letter tiles, planning ahead to create high-scoring words while minimizing their opponents' opportunities.

Throughout the game, players may challenge each other's words if they believe they are misspelled or not valid according to the official Scrabble dictionary. Successful challenges result in the removal of the challenged word from the board, while unsuccessful challenges incur a penalty.

Scrabble is a highly competitive and engaging game that offers endless opportunities for creativity, skill, and friendly rivalry. It has been enjoyed by players of all ages for decades and remains one of the most beloved and iconic board games of all time.`,
      },
    ],
  },
  {
    title: 'For any quantity',
    photo: require('../../assets/forAny.jpeg'),
    exampleGames: [
      {
        name: 'UNO',
        logo: require('../../assets/UNO.webp'),
        discreption: `UNO is a popular card game that is enjoyed by players of all ages around the world. It is known for its simplicity, fast-paced gameplay, and elements of strategy and luck. Here's a description of UNO:

1. **Objective**: The objective of UNO is to be the first player to get rid of all the cards in your hand. Players achieve this by matching the current card in the discard pile with a card from their hand based on either color, number, or symbol.

2. **Game Components**: UNO is played with a specially designed deck of cards. The deck consists of cards in four colors (red, blue, green, and yellow), each numbered from 0 to 9, along with special action cards such as Skip, Reverse, and Draw Two. Additionally, there are Wild cards, which can be played on any color and allow the player to choose the next color.

3. **Gameplay**: The game begins with each player being dealt a hand of cards. The remaining cards are placed face-down to form a draw pile, with the top card flipped over to start the discard pile. The player to the dealer's left starts the game by matching the top card of the discard pile with a card from their hand. Play proceeds clockwise.

4. **Special Action Cards**: In addition to numbered cards, UNO includes special action cards that add twists to the gameplay. Skip cards allow the player to skip the next player's turn, Reverse cards change the direction of play, and Draw Two cards force the next player to draw two cards and forfeit their turn. Players can also play Wild cards to change the color in play.

5. **Strategy and Tactics**: UNO requires players to strategize and adapt to changing circumstances. Players must decide when to play action cards strategically to hinder their opponents and when to save them for optimal impact. Additionally, players must pay attention to the cards played by others and adjust their strategy accordingly.

6. **Winning the Game**: The game continues until one player successfully gets rid of all their cards. When a player has only one card left, they must shout "UNO" to alert the other players. Failure to do so may result in a penalty. The first player to empty their hand wins the round, and points are scored based on the remaining cards in other players' hands.

UNO is a versatile and entertaining game that can be played by people of all ages and skill levels. It promotes social interaction, strategic thinking, and quick decision-making, making it a beloved pastime for families, friends, and gamers alike.`,
      },
      {
        name: 'Add a word',
        logo: require('../../assets/AddWord.jpeg'),
        discreption: `"Add a word" is a word game that can be played by any number of players. The objective of the game is to create a chain of words by adding one word at a time, with each subsequent word starting with the last letter of the previous word. Here's a description of how the game is typically played:

1. **Setup**: To begin the game, players decide on a starting word. This word can be chosen randomly or by mutual agreement among the players. The starting word should be common and easily recognizable.

2. **Gameplay**: The first player starts the game by saying the chosen starting word out loud. The next player then adds a word to the chain, with the first letter of their word matching the last letter of the previous word. For example, if the starting word is "apple," the next word could be "elephant," "egg," or "eleven."

3. **Word Chain**: The game continues with each player adding a word to the chain based on the last letter of the previous word. The goal is to create a continuous chain of words without repeating any words or breaking the chain by using an invalid word.

4. **Challenges and Penalties**: If a player is unable to think of a valid word or uses a word that has already been used, they may be challenged by the other players. If the challenge is successful, the player incurs a penalty, such as skipping their turn or subtracting points from their score.

5. **Winning the Game**: The game can continue for as long as the players wish, with points awarded for each word added to the chain. Alternatively, the game can be played as a race to reach a predetermined point total or to complete a certain number of rounds.

"Add a word" is a fun and engaging word game that encourages creativity, vocabulary expansion, and quick thinking. It can be played casually as a social activity or competitively as a test of linguistic skill and knowledge. Additionally, the game can be adapted and modified to suit the preferences and skill levels of the players.`,
      },
    ],
  },
];

const ByNumberPlayersScreen = ({navigation}) => {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);

  const [games, setGames] = useState(tipes);
  console.log(games);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/bgrN2.jpeg')}
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
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#fdcf55', fontSize: 25}}>
              By the number of players :
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
                    borderColor: '#fdcf55',
                    shadowColor: '#fdcf55',
                    shadowOffset: {width: 0, height: 3},
                    shadowOpacity: 0.9,
                    shadowRadius: 10,
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
                        color: '#fdcf55',
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
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ByNumberPlayersScreen;

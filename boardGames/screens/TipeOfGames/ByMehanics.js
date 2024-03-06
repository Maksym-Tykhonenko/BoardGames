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
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const tipes = [
  {
    title: 'Сard games',
    photo: require('../../assets/Сard.webp'),
    exampleGames: [
      {
        name: 'Rummy',
        logo: require('../../assets/Rummy.png'),
        discreption: `Rummy is a popular card game played with a standard deck of 52 cards. The objective of the game is to form sets and runs of cards in your hand and lay them down on the table to create melds. The game is typically played by 2-6 players. Each player is dealt a hand of cards, and the remaining cards are placed face-down to form the draw pile, with one card flipped over to start the discard pile.

Players take turns drawing cards from the draw pile or the discard pile and then discarding a card from their hand. The goal is to form melds, which can be either sets (three or four cards of the same rank) or runs (three or more consecutive cards of the same suit). Once a player has formed a valid meld, they can lay it down on the table and end their turn by discarding a card.

The game continues until one player has emptied their hand by forming melds, at which point they win the round and score points based on the value of the cards remaining in their opponents' hands. The game typically consists of multiple rounds, and the player with the highest total score at the end of the game is declared the winner.`,
      },
      {
        name: 'Crazy Eights',
        logo: require('../../assets/crazyeights-logo.png'),
        discreption: `Crazy Eights is a fun and fast-paced card game played with a standard deck of 52 cards. The game is suitable for 2-7 players. The objective of Crazy Eights is to be the first player to get rid of all your cards.

To start the game, each player is dealt a hand of cards, and the remaining cards are placed face-down to form the draw pile, with one card flipped over to start the discard pile. The player to the dealer's left starts the game by placing a card from their hand onto the discard pile.

Players take turns playing cards onto the discard pile, matching the rank or suit of the top card, or playing an Eight, which serves as a wildcard and allows the player to choose the suit for the next card. If a player is unable to play a card, they must draw cards from the draw pile until they can play.

The game continues until one player runs out of cards, at which point they win the round and score points based on the value of the cards remaining in their opponents' hands. The game typically consists of multiple rounds, and the player with the lowest total score at the end of the game is declared the winner.




`,
      },
    ],
  },
  {
    title: 'Dice games',
    photo: require('../../assets/Dice.jpeg'),
    exampleGames: [
      {
        name: 'Yahtzee',
        logo: require('../../assets/Yahtzee.webp'),
        discreption: `Yahtzee is a classic dice game played with five six-sided dice and a scorecard. The objective of the game is to score points by rolling certain combinations of dice. Yahtzee is typically played with two or more players.

To start the game, each player takes turns rolling the dice up to three times, trying to achieve specific combinations such as ones, twos, threes, etc., three of a kind, four of a kind, a full house, a straight, or a Yahtzee (five of a kind). After each roll, the player can choose to keep some or all of the dice and re-roll the rest.

Once a player has rolled three times or is satisfied with their roll, they must choose a category on the scorecard to assign their score. Once a category has been chosen, it cannot be used again in subsequent turns. The game continues until all categories on the scorecard have been filled.

The player with the highest total score at the end of the game is declared the winner.`,
      },
      {
        name: 'Farkle',
        logo: require('../../assets/farkle-logo.png'),
        discreption: `Farkle is a dice game that requires both luck and strategy. It is played with six six-sided dice and a scorecard. The objective of the game is to score points by rolling certain combinations of dice.

To start the game, each player takes turns rolling all six dice. After each roll, the player must set aside at least one scoring die and choose whether to continue rolling the remaining dice or stop and score the points accumulated so far. If a player rolls no scoring dice, they "farkle" and lose all the points they have accumulated in that turn.

Players can score points for various combinations, including ones, fives, three of a kind, four of a kind, five of a kind, and special combinations such as a straight (1-2-3-4-5-6) or three pairs.

The game continues with each player taking turns rolling the dice and scoring points until one player reaches a predetermined point total, typically 10,000 points. At that point, the player with the highest total score is declared the winner.`,
      },
    ],
  },
  {
    title: 'Paper and pencil games',
    photo: require('../../assets/Paper_and_pencil.jpeg'),
    exampleGames: [
      {
        name: 'Tic Tac Toe ',
        logo: require('../../assets/TicTacToe.png'),
        discreption: `Tic Tac Toe is a classic pencil and paper game for two players. The game is played on a 3x3 grid, and the objective is to be the first player to form a line of three symbols (either Xs or Os) horizontally, vertically, or diagonally. Players take turns marking one empty cell at a time with their symbol (X or O) until one player achieves the winning pattern or the grid is filled, resulting in a draw.`,
      },
      {
        name: 'Hangman',
        logo: require('../../assets/Hangman.webp'),
        discreption: `Hangman is a word-guessing game played between two players, typically one player (the "guesser") and one player who selects the word (the "setter"). The setter thinks of a word and draws a row of dashes on the paper, representing each letter in the word. The guesser then tries to guess the word by suggesting letters one at a time. If a guessed letter is part of the word, the setter fills in all instances of that letter in the appropriate positions. If the guessed letter is not part of the word, the setter draws one part of a stick figure "hangman." The guesser has a limited number of incorrect guesses before the hangman is completed, resulting in a loss. The game continues until the guesser correctly guesses the word or the hangman is completed.`,
      },
    ],
  },
  {
    title: 'Board games',
    photo: require('../../assets/Board.jpeg'),
    exampleGames: [
      {
        name: 'Settlers of Catan',
        logo: require('../../assets/SettlersofCatan.webp'),
        discreption: `Settlers of Catan, also known as Catan or Settlers, is a strategy board game designed for 3-4 players (with expansions available for up to 6 players). The game is set on the fictional island of Catan, where players assume the roles of settlers seeking to establish settlements and expand their territory.
Players take turns rolling dice to gather resources such as wood, brick, wheat, ore, and sheep, which are used to build roads, settlements, and cities. By strategically placing settlements and roads on the game board, players can establish trade routes, monopolize resources, and earn victory points.

Victory points are awarded for building settlements, upgrading settlements to cities, achieving certain development cards, and completing special objectives. The first player to accumulate a certain number of victory points (typically 10) wins the game.`,
      },
      {
        name: 'Ticket to Ride',
        logo: require('../../assets/TickettoRide.jpg'),
        discreption: `Ticket to Ride is a railway-themed board game designed for 2-5 players. The game is set in the early 20th century, and players assume the roles of railroad tycoons seeking to build railway routes across North America (though other versions of the game exist for different regions).
Players collect train cards of various colors to claim railway routes on the game board, connecting cities and fulfilling destination tickets. Destination tickets are secret objectives that specify two cities that players must connect with a continuous railway route to earn additional points.

Players can also earn points by completing longer routes, connecting specific cities, or having the longest continuous route on the board. However, players must balance their objectives with the risk of their opponents blocking their routes or claiming critical connections.

The game ends when one player has only a few trains left in their supply, signaling the final round. Players then tally their points based on completed destination tickets and claimed routes. The player with the highest score at the end of the game wins.`,
      },
    ],
  },
  {
    title: 'Miniature games',
    photo: require('../../assets/Miniature.webp'),
    exampleGames: [
      {
        name: 'Warhammer 40,000',
        logo: require('../../assets/Warhammer.webp'),
        discreption: `Warhammer 40,000 is a tabletop miniature wargame set in a dystopian science fiction universe. Players take on the role of commanders leading armies of miniature models representing futuristic soldiers, vehicles, and monstrous creatures.
The game is played on a tabletop battlefield with terrain features such as buildings, hills, and forests. Players maneuver their miniatures across the battlefield, engaging in combat, capturing objectives, and completing missions.

Warhammer 40K features a rich and immersive lore, with factions such as the Space Marines, Chaos Space Marines, Orks, Eldar, and Tyranids, each with its own unique units, abilities, and playstyle.

The game incorporates elements of strategy, tactics, and luck, as players must plan their army composition, deployment, and maneuvers to outmaneuver and defeat their opponents.`,
      },
      {
        name: 'Star Wars: X-Wing Miniatures Game',
        logo: require('../../assets/StarWars.jpg'),
        discreption: `Star Wars: X-Wing Miniatures Game is a tactical ship-to-ship combat game set in the Star Wars universe. Players take control of miniature starfighters, such as X-wings, TIE fighters, and Millennium Falcons, and engage in dogfights across the galaxy.
The game is played on a tabletop battlefield with three-dimensional terrain features such as asteroids and space stations. Players maneuver their miniatures using maneuver dials and templates, attempting to outmaneuver their opponents and line up shots.

Star Wars: X-Wing Miniatures Game features a wide variety of ships from the Star Wars saga, each with its own unique abilities, weapons, and upgrades. Players can customize their squadrons with different ships and upgrades to create unique combinations and strategies.

The game combines elements of strategy, tactics, and risk management, as players must anticipate their opponents' moves, react to changing battlefield conditions, and make split-second decisions in the heat of battle.

Both Warhammer 40,000 and Star Wars: X-Wing Miniatures Game are beloved by hobbyists and gamers for their immersive gameplay, detailed miniatures, and richly detailed universes. They offer endless opportunities for strategic thinking, creativity, and competitive play.




`,
      },
    ],
  },
  {
    title: 'Tile-based games',
    photo: require('../../assets/Tile_based.jpeg'),
    exampleGames: [
      {
        name: 'Mahjong',
        logo: require('../../assets/Miniature.webp'),
        discreption: `Mahjong is a traditional tile-based game that originated in China. It is usually played by four players, though variations for three players also exist. The game is played with a set of 144 tiles based on Chinese characters and symbols, divided into different suits and categories.
The objective of Mahjong is to build sets of tiles, which can be either sequences of three consecutive tiles in the same suit or three identical tiles. Players take turns drawing and discarding tiles in order to complete sets and form a winning hand. The game requires strategy, memory, and careful observation, as players must keep track of the tiles in their own hand and the tiles discarded by other players.

Mahjong is typically played over multiple rounds, with players accumulating points based on the value of the sets they create. The player with the highest total score at the end of the game is declared the winner.

`,
      },
      {
        name: 'Carcassonne',
        logo: require('../../assets/Carcassonne.webp'),
        discreption: `Carcassonne is a modern tile-based board game that combines elements of strategy, tile placement, and area control. The game is named after the medieval fortified city of Carcassonne in France.
In Carcassonne, players take turns drawing and placing square tiles depicting different landscape features such as cities, roads, fields, and monasteries. Each tile must be placed adjacent to existing tiles, forming a gradually expanding game board.

Players can also deploy their followers, known as "meeples," onto the tiles to claim features such as cities, roads, or fields. These followers score points for the player at the end of the game, depending on the size and completeness of the feature they occupy.

Carcassonne is a strategic game that requires players to balance short-term objectives such as completing features and scoring points with long-term goals such as controlling territory and blocking opponents. The game is highly customizable, with various expansions and variants available to add complexity and replayability.`,
      },
    ],
  },
  {
    title: 'Tabletop role-playing games',
    photo: require('../../assets/Tabletop_role_playing.jpeg'),
    exampleGames: [
      {
        name: 'Dungeons & Dragons (D&D)',
        logo: require('../../assets/DungeonsDragons.webp'),
        discreption: `Dungeons & Dragons is one of the most iconic and widely played tabletop RPGs in the world. It was first published in 1974 and has since gone through several editions and adaptations. In D&D, players create characters of various fantasy races and classes, such as elves, dwarves, wizards, and fighters, and embark on adventures in fantastical settings filled with magic, monsters, and treasure.
The game is typically led by a Dungeon Master (DM) who acts as the storyteller and referee, guiding the players through the adventure, describing the world around them, and controlling non-player characters (NPCs) and monsters. Players interact with the game world by making decisions, solving puzzles, engaging in combat, and overcoming challenges, all of which are resolved using a set of rules and dice rolls.

D&D offers a vast and immersive gaming experience, with endless opportunities for creativity, exploration, and collaboration. It encourages players to develop their characters' backstories, personalities, and goals, and to work together as a team to achieve their objectives and overcome obstacles.`,
      },
      {
        name: 'Pathfinder',
        logo: require('../../assets/Pathfinder.webp'),
        discreption: `Pathfinder is a tabletop RPG that evolved from the third edition of Dungeons & Dragons. It was first published in 2009 by Paizo Publishing and has since become one of the most popular RPGs on the market. Pathfinder retains many of the core mechanics of D&D, while also introducing new rules, classes, and settings.
In Pathfinder, players create characters using a system of races, classes, skills, and feats, similar to D&D. They then embark on adventures in a rich and detailed fantasy world filled with monsters, magic, and intrigue. The game is typically led by a Game Master (GM) who serves as the storyteller and referee, guiding the players through the adventure and controlling the world and its inhabitants.

Pathfinder offers a deep and customizable gaming experience, with a wide range of options for character creation, customization, and advancement. The game encourages players to explore their characters' abilities, personalities, and motivations, and to engage in collaborative storytelling and problem-solving.

Both Dungeons & Dragons and Pathfinder are beloved by gamers for their immersive worlds, engaging gameplay, and endless opportunities for creativity and adventure. They continue to inspire players of all ages and backgrounds to embark on epic quests and forge unforgettable memories together.`,
      },
    ],
  },
  {
    title: 'Moving games',
    photo: require('../../assets/Moving.jpg'),
    exampleGames: [
      {
        name: 'Twister',
        logo: require('../../assets/Tvister.jpeg'),
        discreption: `Twister is a classic party game that involves players moving their bodies to place their hands and feet on colored circles on a large, plastic mat. The game is typically played with two or more players and is suitable for all ages.
To play Twister, players take turns spinning a dial or using a spinner to determine which body part (left hand, right hand, left foot, or right foot) and which colored circle they must touch. As the game progresses, players become entangled with each other as they try to maintain their balance and avoid falling over.

The game continues until one or more players fall or are unable to move their designated body parts without touching the ground. The last player remaining standing is declared the winner.`,
      },
      {
        name: 'Charades',
        logo: require('../../assets/Charades.webp'),
        discreption: `Charades is a classic party game that involves players acting out words or phrases without speaking, while other players try to guess what they are portraying. The game is typically played with two or more players and is suitable for all ages.
To play Charades, players divide into teams and take turns acting out words or phrases drawn from a hat or selected from a list. The actor uses gestures, facial expressions, and body movements to convey the word or phrase to their team members, who try to guess the answer before time runs out.

Charades is a lively and entertaining game that encourages creativity, communication, and teamwork. It can be played in various settings, from family gatherings to social events, and is sure to provide hours of laughter and fun for players of all ages.`,
      },
    ],
  },
  {
    title: 'Strategy games',
    photo: require('../../assets/Strategy.webp'),
    exampleGames: [
      {
        name: `Sid Meier's Civilization`,
        logo: require('../../assets/SidMeierCivilization.webp'),
        discreption: `Sid Meier's Civilization is a series of turn-based strategy video games that simulate the development of human civilization from ancient times to the modern era. Players take on the role of leaders of historical civilizations such as the Egyptians, Romans, or Americans and compete to become the dominant civilization in the world.
In Civilization, players must manage resources, research technologies, build cities, develop infrastructure, wage war, and engage in diplomacy with other civilizations. The game unfolds over multiple turns, with each turn representing a certain number of years or centuries of history.

Civilization is a complex and immersive strategy game that challenges players to balance economic, military, cultural, and diplomatic considerations as they guide their civilization through the ages. The game offers endless possibilities for exploration, expansion, and conquest, and it has a dedicated fanbase of players who enjoy its depth, replayability, and strategic depth.`,
      },
      {
        name: 'Risk',
        logo: require('../../assets/Risk.jpg'),
        discreption: `Risk is a classic strategy board game that simulates global warfare and conquest. It is played on a world map divided into territories, with players controlling armies and vying for control of continents and regions.
The objective of Risk is to eliminate the other players and conquer the world. Players take turns deploying their armies, attacking neighboring territories, and fortifying their defenses. Combat is resolved through dice rolls, with players risking their armies in battle to expand their territories and gain strategic advantages.

Risk requires players to balance offensive and defensive strategies, negotiate alliances, and adapt to changing battlefield conditions. The game offers a dynamic and immersive gaming experience, with countless strategic possibilities and potential outcomes.

Risk has been a favorite among strategy game enthusiasts since its introduction in the 1950s and has inspired numerous variations and adaptations over the years. It remains a beloved classic that continues to captivate players with its strategic depth, replayability, and competitive gameplay.`,
      },
    ],
  },
];

const ByMehanicsGameScreen = ({navigation}) => {
  const [games, setGames] = useState(tipes);
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
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
              By the mechanics of the game :
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

export default ByMehanicsGameScreen;

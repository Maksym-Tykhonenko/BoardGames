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
        name: 'Free-for-All Card Games',
        logo: require('../../assets/FreeForAllCardGames.jpg'),
        discreption: `In a free-for-all card game, each player competes individually against all other players, with no teams or alliances. Examples of such games include:

Uno: In Uno, players race to be the first to empty their hand of cards by matching them to the top card of the discard pile by either color, number, or action. Players can also strategically use action cards to force opponents to draw cards or skip their turn.
Exploding Kittens: Exploding Kittens is a card game where players draw cards from a deck, hoping to avoid drawing an "exploding kitten" card that would knock them out of the game. Players can use various cards to manipulate the deck, attack opponents, or protect themselves from exploding kittens.`,
      },
      {
        name: 'Battle Royale Video Games',
        logo: require('../../assets/BattleRoyaleVideoGames.jpeg'),
        discreption: `Battle Royale video games are a popular genre where players compete against each other in a large-scale, last-man-standing competition. Examples include:

Fortnite: Fortnite is a multiplayer online game where 100 players are dropped onto an island and must scavenge for weapons, resources, and equipment while eliminating opponents. The last player or team standing wins the game.
PlayerUnknown's Battlegrounds (PUBG): PUBG follows a similar premise to Fortnite, with players parachuting onto an island and battling it out until only one player or team remains. Players must strategize to survive, navigate the shrinking play zone, and outmaneuver their opponents to secure victory.
In both types of games, players must rely on their individual skills, strategy, and decision-making to outsmart and outmaneuver their opponents, with the ultimate goal of being the last person standing or achieving victory.`,
      },
    ],
  },
  {
    title: 'Team games',
    photo: require('../../assets/Team.webp'),
    exampleGames: [
      {
        name: 'Capture the Flag',
        logo: require('../../assets/CaptureTheFlag.png'),
        discreption: `Capture the Flag is a classic outdoor game that pits two teams against each other in a race to capture the opposing team's flag and return it to their own territory. The game is typically played in a large outdoor area with clearly defined boundaries.
Players are divided into two teams, each with their own territory and flag. The objective is for each team to infiltrate the opponent's territory, capture their flag, and return it safely to their own territory without being tagged by opponents.

To prevent their flag from being captured, players must defend their territory and tag opponents who enter it. Players who are tagged must return to their own territory before resuming play.

Capture the Flag requires teamwork, strategy, and communication, as players must work together to coordinate their movements, protect their flag, and outmaneuver their opponents to achieve victory.`,
      },
      {
        name: 'Soccer (Football)',
        logo: require('../../assets/Soccer.jpeg'),
        discreption: `Soccer, known as football in many parts of the world, is a team sport played between two teams of eleven players each. The objective of the game is to score goals by kicking a ball into the opposing team's goal.
Players are divided into two teams, with each team trying to control the ball and score goals while preventing the opposing team from doing the same. The game is played on a rectangular field with goals at each end.

Soccer requires teamwork, coordination, and strategy, as players must work together to pass the ball, create scoring opportunities, and defend their own goal. Players must also adhere to rules governing fouls, offsides, and other aspects of gameplay.

Soccer is one of the most popular and widely played sports in the world, enjoyed by millions of people of all ages and skill levels. It promotes physical fitness, teamwork, and sportsmanship, and provides a thrilling and competitive experience for players and spectators alike.`,
      },
    ],
  },
  {
    title: 'Coalition games',
    photo: require('../../assets/the-coalition.jpg'),
    exampleGames: [
      {
        name: 'Diplomacy',
        logo: require('../../assets/Diplomacy.jpeg'),
        discreption: `Diplomacy is a classic board game of negotiation and strategy set in Europe just before the outbreak of World War I. In Diplomacy, players represent the major European powers of the time, such as England, France, Germany, and Russia.
The game is played on a map of Europe divided into provinces, and players maneuver their armies and fleets to conquer territories and gain control of supply centers. However, Diplomacy is primarily a game of negotiation and diplomacy, as players must form alliances, negotiate treaties, and betray their opponents to achieve victory.

Players can form coalitions to jointly attack a common enemy or to defend against a stronger opponent. However, alliances are fragile, and players must carefully balance their own interests with the needs of their allies to maintain their coalition and secure victory.`,
      },
      {
        name: 'Axis & Allies',
        logo: require('../../assets/AxisAllies.jpg'),
        discreption: `Axis & Allies is a strategy board game set during World War II, where players command the major powers of the Axis (Germany, Japan, Italy) and the Allies (United States, United Kingdom, Soviet Union). The game is played on a map of the world divided into territories, and players use military units such as infantry, tanks, and aircraft to conquer territories and achieve their objectives.
In Axis & Allies, players can form coalitions with other players to coordinate their military efforts and achieve strategic goals. For example, the Allies may work together to liberate Europe from Axis control, while the Axis powers may collaborate to conquer key territories and defeat their opponents.

Coalitions in Axis & Allies are essential for success, as players must combine their forces and resources to overcome their opponents' defenses and achieve victory. However, alliances can be fragile, and players must be wary of betrayals and backstabbing as they navigate the complex politics of World War II.




`,
      },
    ],
  },
  {
    title: 'Cooperative games',
    photo: require('../../assets/Cooperative.webp'),
    exampleGames: [
      {
        name: 'Pandemic',
        logo: require('../../assets/Pandemic_board_game.jpg'),
        discreption: `Pandemic is a cooperative board game where players work together as members of a disease control team to stop the outbreak of deadly diseases threatening the world. Each player takes on a specific role with unique abilities, such as scientist, medic, or dispatcher.
The objective of Pandemic is to work together to find cures for four different diseases, represented by colored cubes on the game board, before they spread out of control and cause a global pandemic. Players must travel between cities, treat infected populations, and research cures while managing outbreaks and preventing the diseases from spreading further.

Pandemic requires players to communicate, strategize, and coordinate their actions effectively to overcome the challenges posed by the game. Players must prioritize their actions, allocate resources wisely, and work together to achieve victory before time runs out.`,
      },
      {
        name: 'Forbidden Island',
        logo: require('../../assets/Forbidden-Island-Setup.jpg'),
        discreption: `Forbidden Island is a cooperative board game where players work together as adventurers seeking to retrieve four sacred treasures from a sinking island before it disappears beneath the waves. Each player takes on a specific role with unique abilities, such as explorer, pilot, or diver.
The objective of Forbidden Island is to work together to collect the four treasures and escape from the island on a helicopter pad before it sinks completely. Players must navigate the island, collect treasure cards, and shore up sinking tiles while managing their limited resources and dealing with various hazards such as flooding and treasure loss.

Forbidden Island encourages players to communicate, plan, and collaborate as they work together to achieve their common goal. Players must use their individual abilities strategically, make decisions as a team, and adapt to changing circumstances to succeed against the odds.

Both Pandemic and Forbidden Island offer engaging and immersive cooperative gaming experiences, challenging players to work together to overcome obstacles, solve problems, and achieve victory as a team.`,
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
              By the degree of cooperation players :
            </Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
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

export default ByCooperationsScreen;

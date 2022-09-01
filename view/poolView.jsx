import { View, StyleSheet, Text, Image, ScrollView, Linking } from 'react-native';
import { FISH_VIEW } from '../const/views';
import { fishesData } from '../data';
import idToImageMap from '../util/idToImageMap';
import TouchableGradient from '../components/TouchableGradient';
import { titleStyles, subtitleStyles, tilesContainer, tileContainer, tileContentContainer, tileText, customTileGradient, customLinkGradient } from '../styles/styles'
import getGamerEscapeURL from '../util/getGamerEscapeURL';


export default function PoolView({ navigation, route }) {
  const { poolData } = route.params;
  const { level, name, fish, image } = poolData;

  return <ScrollView>
    <Image style={styles.poolImage} source={{uri: `https://ffxiv.gamerescape.com/${image}`}} />
    <Text style={titleStyles}>{name}</Text>
    <View style={styles.poolLevelLinkContainer}>
      <Text style={subtitleStyles}>Pool Level: {level}</Text>
      <TouchableGradient customGradientStyles={customLinkGradient} customHighlightStyles={customLinkGradient} onPress={() => Linking.openURL(getGamerEscapeURL(name))}>
        <Image source={require('../assets/misc/gamerEscape.jpg')} style={styles.linkImage} />
      </TouchableGradient>
    </View>
    <View style={tilesContainer}>
      {[0, 1, 2, 3, 4].map(idx => <View style={tileContainer} key={idx}>
        {fish[idx] ?
          <TouchableGradient customGradientStyles={customTileGradient} onPress={() => navigation.navigate(FISH_VIEW, { fish: fishesData[fish[idx]] })}>
            <View style={tileContentContainer}>
              <Image source={idToImageMap[fish[idx]]} />
              <Text style={tileText}>{fishesData[fish[idx]].name}</Text>
            </View>
          </TouchableGradient>
          : null}
      </View>)}
    </View>
    {fish[5] ? <View style={tilesContainer}>
      {[5, 6, 7, 8, 9].map(idx => <View style={tileContainer} key={idx}>
        {fish[idx] ?
          <TouchableGradient customGradientStyles={customTileGradient} onPress={() => navigation.navigate(FISH_VIEW, { fish: fishesData[fish[idx]] })}>
            <View style={tileContentContainer}>
              <Image source={idToImageMap[fish[idx]]} />
              <Text style={tileText}>{fishesData[fish[idx]].name}</Text>
            </View>
          </TouchableGradient>
          : null}
      </View>)}
    </View> : null}
  </ScrollView>
}

const styles = StyleSheet.create({
  poolImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  poolLevelLinkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  linkImage: {
    height: 20,
    width: 20,
    borderRadius: 4
  }
});

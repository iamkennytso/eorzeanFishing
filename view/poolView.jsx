import { View, StyleSheet, Text, Image, ScrollView  } from 'react-native';
import { FISH_VIEW } from '../const/views';
import fishes from '../data/fishes';
import { poolsData } from '../data';
import getIdImage from '../util/getIdImage';
import getPoolImage from '../util/getPoolImage';
import TouchableGradient from '../components/TouchableGradient';
import { titleStyles, subtitleStyles, tilesContainer, tileContainer, tileContentContainer, tileText, customTileGradient } from '../styles/styles'

export default function PoolView({ navigation, route }) {
  const { poolData, poolID } = route.params;
  const { level, name, fish } = poolData;

  const poolImageSource = getPoolImage(poolID)

  return <ScrollView style={styles.scrollView}>
    <View>
      <Image style={styles.poolImage} source={poolImageSource} />
    </View>
    <Text style={titleStyles}>{name}</Text>
    <Text style={subtitleStyles}>Pool Level: {level}</Text>
    <View style={styles.tilesContainer}>
      {[0, 1, 2, 3, 4].map(idx => <View style={styles.tile} key={idx}>
        {fish[idx] ?
            <TouchableGradient customGradientStyles={customTileGradient} onPress={() => navigation.navigate(FISH_VIEW, { fish: fishes[fish[idx]] })}>
              <View style={styles.tilesContentContainer}>
                <Image source={getIdImage(fish[idx])} />
                <Text style={styles.fishText}>{fishes[fish[idx]].name}</Text>
              </View>
            </TouchableGradient>
          : null}
      </View>)}
    </View>
    {fish[5] ? <View style={styles.tilesContainer}>
      {[5, 6, 7, 8, 9].map(idx => <View style={tileContainer} key={idx}>
        {fish[idx] ?
            <TouchableGradient customGradientStyles={customTileGradient} onPress={() => navigation.navigate(FISH_VIEW, { fish: fishes[fish[idx]] })}>
              <View style={tileContentContainer}>
                <Image source={getIdImage(fish[idx])} />
                <Text style={tileText}>{fishes[fish[idx]].name}</Text>
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
  tilesContainer: {
    ...tilesContainer,
    flexWrap: 'nowrap'
  },
});

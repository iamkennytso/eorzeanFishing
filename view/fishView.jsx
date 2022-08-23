import { View, StyleSheet, Text, Image, ScrollView  } from 'react-native';
import { regions } from '../data/locations';
import { AREA_SELECT, FISH_VIEW, POOL_VIEW } from '../const/views';
import { baitsData, fishesData, poolsData } from '../data';
import { titleStyles, subtitleStyles, fontColorStyle, tilesContainer, customTileGradient, tileContainer, tileContentContainer, tileText } from '../styles/styles'
import TouchableGradient from '../components/TouchableGradient';
import getIdImage from '../util/getIdImage';

export default function FishView({ route, navigation }) {
  const { fish } = route.params;
  const { name, level, description, pools, baits, mooches } = fish;
  const canMooch = !!mooches
  console.log(fish)
  return <ScrollView>
    <View style={styles.imageContainer}>
      <Image style={styles.fishImage} source={{uri: `https://xivapi.com${fish.iconURL}`}} />
    </View>
    <Text style={titleStyles}>{name}</Text>
    <Text style={styles.fishSubtitle}>Item Level: {level}</Text>
    <Text style={subtitleStyles}>Description:</Text>
    <Text style={fontColorStyle}>{description}</Text>
    <Text style={styles.fishSubtitle}>Pools:</Text>
    {pools.map(poolID => poolsData[poolID].name !== 'unknown'
      ? <View style={styles.poolContainer} key={poolID}>
        <TouchableGradient
          customGradientStyles={styles.poolContentContainer} 
          onPress={ () => navigation.navigate(POOL_VIEW, { poolData: poolsData[poolID], poolID }) }
        >
          <Text style={styles.poolText}>{poolsData[poolID].name}</Text>
        </TouchableGradient>
      </View>
      : null
    )}
    <Text style={styles.fishSubtitle}>Bait / Mooch:</Text>
    <View style={tilesContainer}>
      {baits.map(baitID => {
        const isBait = !!baitsData[baitID]
        const isFish = !!fishesData[baitID]
        if (!isBait && !isFish) {
          console.log(baitID)
        }
        return <View style={tileContainer} key={baitID}>
          <TouchableGradient
            customGradientStyles={customTileGradient}
            onPress={ () => isBait 
              // ? navigation.navigate(POOL_VIEW, { poolData: poolsData[poolID], poolID })
              ? null
              : navigation.navigate(FISH_VIEW, { fish: fishesData[baitID] } )
            }
          >
            <View style={tileContentContainer}> 
              <Image source={getIdImage(baitID)} />
              <Text style={tileText}>{isBait ? baitsData[baitID].name : fishesData[baitID].name}</Text>
            </View>
          </TouchableGradient>
        </View>
      })}
    </View>
    {canMooch ? <>
      <Text style={styles.fishSubtitle}>Mooches:</Text>
      <View style={tilesContainer}>
        {mooches.map(baitID => {
          return <View style={tileContainer} key={baitID}>
            <TouchableGradient
              customGradientStyles={customTileGradient}
              onPress={() => navigation.navigate(FISH_VIEW, { fish: fishesData[baitID] })}
            >
              <View style={tileContentContainer}> 
                <Image source={getIdImage(baitID)} />
                <Text style={tileText}>{fishesData[baitID].name}</Text>
              </View>
            </TouchableGradient>
          </View>
        })}
      </View>
    </> : null}
  </ScrollView>
}

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  fishImage: {
    height: 80,
    width: 80
  },
  poolTitle: {
    ...subtitleStyles,
    marginTop: 15
  },
  fishSubtitle: {
    ...subtitleStyles,
    marginTop: 15,
    marginBottom: 15
  },

  poolContainer: {
    marginTop: 4,
    marginBottom: 4,
  },
  poolContentContainer: {
    paddingLeft: 6,
    paddingBottom: 6,
    paddingTop: 6
  },
  poolText: {
    ...fontColorStyle
  }
});

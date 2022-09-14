import { View, StyleSheet, Text, Image, ScrollView  } from 'react-native';
import { BAIT_VIEW, FISH_VIEW, POOL_VIEW } from '../const/views';
import { baitsData, fishesData, poolsData } from '../data';
import { titleStyles, subtitleStyles, fontColorStyle, tilesContainer, customTileGradient, tileContainer, tileContentContainer, tileText } from '../styles/styles'
import TouchableGradient from '../components/TouchableGradient';
import idToImageMap from '../util/idToImageMap';
import { useContext } from 'react';
import { UserContext } from '../util/context';
import { GREEN_GRADIENT_COLORS } from '../styles/variables';

export default function FishView({ route, navigation }) {
  const { fish } = route.params;
  const { name, level, description, pools, baits, mooches } = fish;
  const canMooch = !!mooches
  const { caughtFish, handleLongPressFish } = useContext(UserContext)

return <ScrollView>
    <View style={styles.imageContainer}>
      <Image style={styles.fishImage} source={{uri: `https://xivapi.com${fish.iconURL}`}} />
    </View>
    <Text style={titleStyles}>{name}</Text>
    <Text style={styles.fishSubtitle}>Item Level: {level}</Text>
    <Text style={subtitleStyles}>Description:</Text>
    <Text style={fontColorStyle}>{description}</Text>
    <Text style={styles.fishSubtitle}>Pools:</Text>
    {pools.map(poolID => poolID !== 1
      ? <View style={styles.poolContainer} key={poolID}>
        <TouchableGradient
          customGradientStyles={styles.poolContentContainer} 
          onPress={() => navigation.navigate(POOL_VIEW, { poolData: poolsData[poolID] })}
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
        return <View style={tileContainer} key={baitID}>
          <TouchableGradient
            gradientColors={!isBait && caughtFish[baitID] ? GREEN_GRADIENT_COLORS : undefined}
            customGradientStyles={customTileGradient}
            onLongPress={() => !isBait ? handleLongPressFish(baitID) : null}
            onPress={() => isBait 
              ? navigation.navigate(BAIT_VIEW, { bait: baitsData[baitID] })
              : navigation.navigate(FISH_VIEW, { fish: fishesData[baitID] } )
            }
          >
            <View style={tileContentContainer}> 
              <Image source={idToImageMap[baitID]} />
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
              gradientColors={caughtFish[baitID] ? GREEN_GRADIENT_COLORS : undefined}
              customGradientStyles={customTileGradient}
              onLongPress={() => handleLongPressFish(baitID)}
              onPress={() => navigation.navigate(FISH_VIEW, { fish: fishesData[baitID] })}
            >
              <View style={tileContentContainer}> 
                <Image source={idToImageMap[baitID]} />
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

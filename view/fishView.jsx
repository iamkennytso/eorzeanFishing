import { View, StyleSheet, Image, ScrollView  } from 'react-native';
import { BAIT_VIEW, FISH_VIEW, POOL_VIEW } from '../const/views';
import { baitsData, fishesData, poolsData } from '../data';
import { titleStyles, subtitleStyles, fontColorStyle, tilesContainer, customTileGradient, tileContainer, tileContentContainer, tileText } from '../styles/styles'
import TouchableGradient from '../components/TouchableGradient';
import idToImageMap from '../util/idToImageMap';
import { useContext } from 'react';
import { UserContext } from '../util/context';
import { PRIMARY, SECONDARY } from '../styles/variables';
import ThemedText from '../components/ThemedText';

export default function FishView({ route, navigation }) {
  const { fish } = route.params;
  const { name, level, description, pools, baits, mooches } = fish;
  const canMooch = !!mooches
  const { caughtFish, handleLongPressFish } = useContext(UserContext)

return <ScrollView>
    <View style={styles.imageContainer}>
      <Image style={styles.fishImage} source={{uri: `https://xivapi.com${fish.iconURL}`}} />
    </View>
    <ThemedText style={titleStyles}>{name}</ThemedText>
    <ThemedText style={styles.fishSubtitle}>Item Level: {level}</ThemedText>
    <ThemedText style={subtitleStyles}>Description:</ThemedText>
    <ThemedText style={fontColorStyle}>{description}</ThemedText>
    <ThemedText style={styles.fishSubtitle}>Pools:</ThemedText>
    {pools.map(poolID => poolID !== 1
      ? <View style={styles.poolContainer} key={poolID}>
        <TouchableGradient
          customGradientStyles={styles.poolContentContainer} 
          onPress={() => navigation.navigate(POOL_VIEW, { poolData: poolsData[poolID] })}
        >
          <ThemedText style={styles.poolText}>{poolsData[poolID].name}</ThemedText>
        </TouchableGradient>
      </View>
      : null
    )}
    <ThemedText style={styles.fishSubtitle}>Bait / Mooch:</ThemedText>
    <View style={tilesContainer}>
      {baits.map(baitID => {
        const isBait = !!baitsData[baitID]
        return <View style={tileContainer} key={baitID}>
          <TouchableGradient
            gradientVariant={!isBait && caughtFish[baitID] ? SECONDARY : PRIMARY}
            customGradientStyles={customTileGradient}
            onLongPress={() => !isBait ? handleLongPressFish(baitID) : null}
            onPress={() => isBait 
              ? navigation.navigate(BAIT_VIEW, { bait: baitsData[baitID] })
              : navigation.navigate(FISH_VIEW, { fish: fishesData[baitID] } )
            }
          >
            <View style={tileContentContainer}> 
              <Image source={idToImageMap[baitID]} />
              <ThemedText style={tileText}>{isBait ? baitsData[baitID].name : fishesData[baitID].name}</ThemedText>
            </View>
          </TouchableGradient>
        </View>
      })}
    </View>
    {canMooch ? <>
      <ThemedText style={styles.fishSubtitle}>Mooches:</ThemedText>
      <View style={tilesContainer}>
        {mooches.map(baitID => {
          return <View style={tileContainer} key={baitID}>
            <TouchableGradient
              gradientVariant={caughtFish[baitID] ? SECONDARY : PRIMARY}
              customGradientStyles={customTileGradient}
              onLongPress={() => handleLongPressFish(baitID)}
              onPress={() => navigation.navigate(FISH_VIEW, { fish: fishesData[baitID] })}
            >
              <View style={tileContentContainer}> 
                <Image source={idToImageMap[baitID]} />
                <ThemedText style={tileText}>{fishesData[baitID].name}</ThemedText>
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
  }
});

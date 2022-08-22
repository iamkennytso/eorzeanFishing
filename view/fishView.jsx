import { View, StyleSheet, Text, Image, ScrollView  } from 'react-native';
import { regions } from '../data/locations';
import { AREA_SELECT, POOL_VIEW } from '../const/views';
import { poolsData } from '../data';
import { titleStyles, subtitleStyles, fontColorStyle } from '../styles/styles'
import TouchableGradient from '../components/TouchableGradient';


export default function FishView({ route, navigation }) {
  const { fish } = route.params
  // console.log(fish)
  const { name, level, description, pools } = fish
  return <ScrollView>
    <View style={styles.imageContainer}>
      <Image style={styles.fishImage} source={{uri: `https://xivapi.com${fish.iconURL}`}} />
    </View>
    <Text style={titleStyles}>{name}</Text>
    <Text style={subtitleStyles}>Item Level: {level}</Text>
    <Text style={subtitleStyles}>Description:</Text>
    <Text style={fontColorStyle}>{description}</Text>
    <Text style={styles.poolTitle}>Pools:</Text>
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
  },
});

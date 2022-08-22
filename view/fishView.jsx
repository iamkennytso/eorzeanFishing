import { View, StyleSheet, Text, Image, ScrollView, TouchableHighlight  } from 'react-native';
import { regions } from '../data/locations';
import { AREA_SELECT } from '../const/views';
import { poolsData } from '../data';


export default function FishView({ route, navigation }) {
  const { fish } = route.params
  console.log(fish)
  const { name, level, description, pools } = fish
  return <ScrollView>
    <View style={styles.imageContainer}>
      <Image style={styles.fishImage} source={{uri: `https://xivapi.com${fish.iconURL}`}} />
    </View>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.level}>Item Level: {level}</Text>
    <Text style={styles.description}>{description}</Text>
    <View style={styles.poolContainer}>
      {pools.map(pool => <Text key={pool}>{poolsData[pool].name}</Text>)}
    </View>
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
  name: {
    color: 'white',
    fontSize: 25,
  },
  level: {
    color: 'white'
  },
});

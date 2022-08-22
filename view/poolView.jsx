import { View, StyleSheet, Text, Image, ScrollView, TouchableHighlight  } from 'react-native';
import { FISH_VIEW } from '../const/views';
import fishes from '../data/fishes';
import { poolsData } from '../data';
import getIdImage from '../util/getIdImage';
import getPoolImage from '../util/getPoolImage';

export default function PoolView ({ navigation, route }) {
  console.log('hello', poolsData)
  const { pool } = route.params;
  const { l: poolLevel, n: poolName } = pool;
  const { fish } = poolsData[pool.id]

  const poolImageSource = getPoolImage(pool.id)

  return <ScrollView style={styles.scrollView}>
    <View>
      <Image style={styles.poolImage} source={poolImageSource} />
    </View>
    <Text style={styles.poolNameText}>{poolName}</Text>
    <Text style={styles.poolLevelText}>Pool Level: {poolLevel}</Text>
    <View style={styles.tilesContainer}>
      {[0,1,2,3,4].map(idx =><View style={styles.tile} key={idx}>
          {fish[idx] ? <TouchableHighlight onPress={() => navigation.navigate(FISH_VIEW, { fish: fishes[fish[idx]] })}>
            <View style={styles.tilesContentContainer}>
              <Image source={getIdImage(fish[idx])} />
              <Text style={styles.fishText}>{fishes[fish[idx]].name}</Text>
            </View>
          </TouchableHighlight> : null }
        </View>
      )}
    </View>
    {fish[5] ? <View style={styles.tilesContainer}>
      {[5,6,7,8,9].map(idx => <View style={styles.tile} key={idx} >
        {fish[idx] ? <TouchableHighlight onPress={() => navigation.navigate(FISH_VIEW, { fish: fishes[fish[idx]] })}>
          <View style={styles.tilesContentContainer}>
            <Image source={getIdImage(fish[idx])} />
            <Text style={styles.fishText}>{fishes[fish[idx]].name}</Text>
          </View>
        </TouchableHighlight> : null }
      </View>)}
    </View> : null}
  </ScrollView>
}

const styles = StyleSheet.create({
  poolNameText: {
    color: 'white',
    fontSize: 25
  },
  poolLevelText: {
    color: 'white'
  },
  poolImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tilesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tile: {
    width: '15%',
    display: 'flex',
    alignItems: 'center',
    marginTop: '8%',
    marginBottom: '8%'
  },
  tilesContentContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  fishText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center'
  }
});

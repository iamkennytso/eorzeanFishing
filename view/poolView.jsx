import { View, StyleSheet, Text, Image, ScrollView  } from 'react-native';
import { pools } from '../data/pools';
import getIdImage from '../util/getIdImage';
import getPoolImage from '../util/getPoolImage';

export default function PoolView ({ navigation, route }) {
  const { pool } = route.params;
  console.log(pool)
  const { l: poolLevel, n: poolName } = pool;
  const { fish } = pools[pool.id]

  const poolImageSource = getPoolImage(pool.id)
  const fishIdSource = getIdImage(2590)

  return <ScrollView style={styles.scrollView}>
    <View>
      <Image style={styles.poolImage} source={poolImageSource} />
    </View>
    <Text>{poolLevel}</Text>
    <Text>{poolName}</Text>
    <View style={styles.tilesContainer}>
      {[0,1,2,3,4].map(idx =><View style={styles.tile} key={idx}>
          {fish[idx] ? <>
            <Image source={getIdImage(fish[idx])} />
            <Text>{fish[idx]}</Text>
          </> : null }
        </View>
      )}
    </View>
    {fish[5] ? <View style={styles.tilesContainer}>
      {[5,6,7,8,9].map(idx => <View style={styles.tile} key={idx} >
        {fish[idx] ? <>
          <Image source={getIdImage(fish[idx])} />
          <Text>{fish[idx]}</Text>
        </> : null }
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tile: {
    width: '15%',
    display: 'flex',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%'
  }
});

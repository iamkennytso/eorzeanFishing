import { View, StyleSheet, Text, Image, ScrollView  } from 'react-native';
import getPoolImage from '../util/getPoolImage';

export default function PoolView ({ navigation, route }) {
  const { pool } = route.params;
  const imageSource = getPoolImage(pool.id)

  return <>
    <View>
      <Image style={styles.poolImage} source={imageSource} />
    </View>
    <ScrollView>
      <Text>name: {pool.n}</Text>
      <Text>level: {pool.l}</Text>
      <Text>id: {pool.id}</Text>
    </ScrollView>
  </>
}

const styles = StyleSheet.create({
  poolImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});

// import { useContext} from 'react'
import { View, StyleSheet, Text, Image, ScrollView, TouchableHighlight  } from 'react-native';
import { regions } from '../data/locations';
import { AREA_SELECT } from '../const/views';

const getUrlName = pool => {
  switch (pool.id) {
    default: 
      return pool.n.replace(' ', '_')
  }
}

export default function PoolView ({ navigation, route }) {
  const { pool } = route.params;
  
  return <>
    <View>
      <Image style={styles.poolImage} source={{uri: `https://ffxiv.gamerescape.com/w/images/e/ec/${getUrlName(pool)}-Fishing.jpg`}} />
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
    height: 500
  }
});

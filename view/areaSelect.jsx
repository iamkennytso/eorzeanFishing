// import { useContext} from 'react'
import { StyleSheet, Text, ScrollView, TouchableHighlight, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { areas } from '../data/locations';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

// n: "Limsa Lominsa Upper Decks", l: 1, t: 1,

const getTypeImage = type => {
  let link;
  switch (type) {
    case 0:
      link = require('../assets/fish/0102.png');
      break;
    case 1:
      link = require('../assets/fish/0108.png')
      break;
    case 2:
      link = require('../assets/misc/dunefishing.png')
      break;
    case 3:
      link = require('../assets/misc/cloudfishing.png')
      break;
    default:
      return null
  }
  return <Image style={styles.poolImage} source={link} />
}

const areaExpandContent = (pools) => {
  return <View>
    {pools.map(pool => <TouchableHighlight key={pool.n}>
      <View style={styles.poolContainer}>
        <Text style={styles.poolText}>{pool.l}</Text>
        <Text style={styles.poolText}>{pool.n}</Text>
        {getTypeImage(pool.t)}
      </View>
    </TouchableHighlight>)}
  </View>
}

export default function AreaSelect({ route }) {
  const { region } = route.params;
  const regionAreas = areas[region]
  // const [expandedIndexes, setExpandedIndexes] = useState(new Array(Object.keys(regionAreas).length))
  return <SafeAreaView style={styles.container}>
    <ScrollView>
      {Object.keys(regionAreas).map(area => (
        <LinearGradient key={area} style={styles.areaContainer} colors={['#312CD6', '#2920BD']}>
          <SimpleAccordion 
            title={area}
            viewInside={areaExpandContent(regionAreas[area])}
            titleStyle={areaTitleStyles}
            bannerStyle={areaBannerStyles}
            viewContainerStyle={areaExpandedContainerStyles}
            showContentInsideOfCard={false}
            arrowColor='white'
          />
        </LinearGradient>
      ))}
    </ScrollView>
  </SafeAreaView>
}

const areaTitleStyles = {
  color: 'white'
}

const areaBannerStyles = {
  backgroundColor: 'transparent'
}

const areaExpandedContainerStyles = {
  backgroundColor: 'transparent'
}

const styles = StyleSheet.create({
  areaContainer: {
    paddingLeft: 10,
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    margin: 5
  },
  areaText: {
    color: '#B1D8E0',
    fontSize: 20
  },
  poolContainer: {
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  poolText: {
    color: 'white'
  },
  poolImage: {
    height: 32,
    width: 32
  }
});

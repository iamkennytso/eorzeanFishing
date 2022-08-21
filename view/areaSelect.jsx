// import { useContext} from 'react'
import { StyleSheet, Text, ScrollView, TouchableHighlight, View, Image } from 'react-native';
import { areas } from '../data/locations';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { LinearGradient } from 'expo-linear-gradient';
import { POOL_VIEW } from '../const/views';

const getTypeImage = type => {
  let link;
  switch (type) {
    case 0:
      link = require('../assets/misc/freshwater.png');
      break;
    case 1:
      link = require('../assets/misc/saltwater.png')
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

const areaExpandContent = (pools, navigation) => {
  return <View>
    {pools.map(pool => <TouchableHighlight 
      key={pool.n} 
      onPress={() => navigation.navigate(POOL_VIEW, { pool })}
    >
      <View style={styles.poolContainer}>
        <Text style={styles.poolLevel}>{pool.l}</Text>
        <Text style={styles.poolName}>{pool.n}</Text>
        {getTypeImage(pool.t)}
      </View>
    </TouchableHighlight>)}
  </View>
}

export default function AreaSelect({ navigation, route }) {
  const { region } = route.params;
  const regionAreas = areas[region];

  return <ScrollView>
    {Object.keys(regionAreas).map(area => (
      <LinearGradient key={area} style={styles.areaContainer} colors={['#312CD6', '#2920BD']}>
        <SimpleAccordion 
          title={area}
          viewInside={areaExpandContent(regionAreas[area], navigation)}
          titleStyle={areaTitleStyles}
          bannerStyle={areaBannerStyles}
          viewContainerStyle={areaExpandedContainerStyles}
          showContentInsideOfCard={false}
          arrowColor='white'
        />
      </LinearGradient>
    ))}
  </ScrollView>
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
  poolLevel: {
    color: 'white',
    display: 'flex',
    alignItems: 'flex-start'
  },
  poolName: {
    color: 'white'
  },
  poolImage: {
    height: 32,
    width: 32
  }
});

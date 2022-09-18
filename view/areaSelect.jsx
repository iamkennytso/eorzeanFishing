// import { useContext} from 'react'
import { StyleSheet, ScrollView, TouchableHighlight, View, Image } from 'react-native';
import { areasData, poolsData } from '../data';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { POOL_VIEW } from '../const/views';
import TouchableGradient from '../components/TouchableGradient';
import { subtitleStyles, fontColorStyle } from '../styles/styles'
import { useContext } from 'react';
import { UserContext } from '../util/context';
import { THEME } from '../styles/themes';
import ThemedText from '../components/ThemedText';

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

const areaExpandContent = (poolIDs, navigation) => <View>
  {poolIDs.map(poolID => {
    const poolData = poolsData[poolID]
    const { name, level, type } = poolData

    return <TouchableHighlight
      key={poolID}
      onPress={() => navigation.navigate(POOL_VIEW, { poolData })}
      underlayColor='#5150C6'
    >
      <View style={styles.poolContentContainer}>
        <ThemedText style={fontColorStyle}>{level}</ThemedText>
        <ThemedText style={fontColorStyle}>{name}</ThemedText>
        {getTypeImage(type)}
      </View>
    </TouchableHighlight>
  })}
</View>

export default function AreaSelect({ navigation, route }) {
  const { region } = route.params;
  const { theme } = useContext(UserContext)
  const regionAreas = areasData[region];

  return <ScrollView>
    {Object.keys(regionAreas).map(area => (
      <View style={styles.poolContainer} key={area}>
        <TouchableGradient >
          <SimpleAccordion
            title={area}
            viewInside={areaExpandContent(regionAreas[area], navigation)}
            titleStyle={{...subtitleStyles, color: THEME[theme].FONT}}
            bannerStyle={transparentBackground}
            viewContainerStyle={transparentBackground}
            showContentInsideOfCard={false}
            arrowColor={THEME[theme].FONT}
          />
        </TouchableGradient>
      </View>
    ))}
  </ScrollView>
}

const transparentBackground = {
  backgroundColor: 'transparent'
}

const styles = StyleSheet.create({
  poolContainer: {
    marginTop: 8,
    marginBottom: 8
  },
  poolContentContainer: {
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  poolImage: {
    height: 32,
    width: 32
  }
});

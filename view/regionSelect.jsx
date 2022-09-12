import { View, StyleSheet, Text, Image, ScrollView, TouchableHighlight  } from 'react-native';
import { regionsData } from '../data';
import { ABOUT_VIEW, AREA_SELECT, FISH_GUIDE } from '../const/views';
import TouchableGradient from '../components/TouchableGradient';
import { titleStyles, subtitleStyles } from '../styles/styles'
import { BLUE_FONT } from '../styles/variables';

export default function RegionSelect({ navigation }) {
  return <>
    <View style={styles.header}>
      <Image source={require('../assets/misc/fishingSymbol.png')} />
      <Text style={{ ...titleStyles, ...styles.headerText}}>Eorzean Fishing</Text>
      <TouchableGradient 
        customGradientStyles={{width: 22}}
        onPress={() => navigation.navigate(ABOUT_VIEW)}
      >
        <Text style={styles.infoText}>ⓘ</Text>
      </TouchableGradient>
    </View>
    <ScrollView styles={styles.regionsContainer}>
      {regionsData.map(region => <View key={region} style={styles.regionContainer}>
        <TouchableGradient 
          onPress={() => navigation.navigate(AREA_SELECT, { region })}
          customGradientStyles={styles.regionGradient}
        >
          <Text style={subtitleStyles}>{region}</Text>
        </TouchableGradient>
      </View>)}
      <TouchableGradient
        onPress={() => navigation.navigate(FISH_GUIDE)}
        customGradientStyles={styles.regionGradient}
      >
        <View style={styles.fishGuideContainer}>
          <Image style={{height: 36, width: 36}} source={require('../assets/misc/fishGuide.png')} />
          <Text style={subtitleStyles}>  Fish Guide</Text>
        </View>
      </TouchableGradient>
    </ScrollView>
  </>
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'ffFont',
    fontSize: 40
  },
  infoText: {
    fontSize: 20,
    color: BLUE_FONT
  },
  regionContainer: {
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 15
  },
  regionGradient: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  fishGuideContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

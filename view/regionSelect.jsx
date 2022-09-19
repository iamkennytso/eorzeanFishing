import { View, StyleSheet, Text, Image, ScrollView  } from 'react-native';
import { regionsData } from '../data';
import { ABOUT_VIEW, AREA_SELECT, FISH_GUIDE, PROFILE_VIEW } from '../const/views';
import TouchableGradient from '../components/TouchableGradient';
import { titleStyles, subtitleStyles } from '../styles/styles'
import ThemedText from '../components/ThemedText';

export default function RegionSelect({ navigation }) {
  return <>
    <View style={styles.header}>
      <Image source={require('../assets/misc/fishingSymbol.png')} />
      <Text style={{ ...titleStyles, ...styles.headerText}}>Eorzean Fishing</Text>
      <View style={styles.iconsContainer}>
        <TouchableGradient 
          customGradientStyles={{ width: 22, marginRight: 8 }}
          onPress={() => navigation.navigate(PROFILE_VIEW)}
        >
          <Image style={styles.profileIcon} source={require('../assets/misc/profileIcon.png')} />
        </TouchableGradient>
        <TouchableGradient 
          customGradientStyles={{ width: 22 }}
          onPress={() => navigation.navigate(ABOUT_VIEW)}
        >
          <ThemedText style={styles.infoText}>ⓘ</ThemedText>
        </TouchableGradient>
      </View>
    </View>
    <ScrollView>
      {regionsData.map(region => <View key={region} style={styles.regionContainer}>
        <TouchableGradient 
          onPress={() => navigation.navigate(AREA_SELECT, { region })}
          customGradientStyles={styles.regionGradient}
        >
          <ThemedText style={subtitleStyles}>{region}</ThemedText>
        </TouchableGradient>
      </View>)}
      <TouchableGradient
        onPress={() => navigation.navigate(FISH_GUIDE)}
        customGradientStyles={styles.regionGradient}
      >
        <View style={styles.fishGuideContainer}>
          <Image style={styles.fishGuideIcon} source={require('../assets/misc/fishGuide.png')} />
          <ThemedText style={subtitleStyles}>  Fish Guide</ThemedText>
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
  profileIcon: {
    height: 22, 
    width: 22
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoText: {
    fontSize: 20
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
  fishGuideIcon: {
    height: 36, 
    width: 36
  },
  fishGuideContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

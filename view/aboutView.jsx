import { StyleSheet, Text, Image, ScrollView, Linking  } from 'react-native';
import { titleStyles } from '../styles/styles'
import { BLUE_FONT } from '../styles/variables';

export default function AboutView() {
  return <ScrollView>
    <Text style={{ ...titleStyles, ...styles.headerText}}>FFXIV Fishing Buddy</Text>
    <Text style={styles.description}>App only contains data in ARR for now and will be updated with expansions at a later time.</Text>
    <Text style={styles.description}>Any questions or suggestions please email hardnecksolutions@gmail.com</Text>
    <Text style={styles.description}>Splash Screen Model: <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://www.twitch.tv/yamikisaragi')}>YamiKisaragi</Text></Text>
    <Text style={styles.description}>Fishing Data: <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://xivapi.com/')}>xivapi.com</Text></Text>
    <Text style={styles.description}>Pool Images: <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://ffxiv.gamerescape.com/wiki/Main_Page')}>GamerEscape</Text></Text>
  </ScrollView>
}

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'ffFont',
    fontSize: 40
  },
  description: {
    color: BLUE_FONT,
    marginTop: 10
  },
  hyperlink: {
    color: 'white',
    textDecorationLine: 'underline'
  }
});

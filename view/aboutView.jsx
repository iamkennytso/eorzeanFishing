import { StyleSheet, Text, Image, ScrollView, Linking  } from 'react-native';
import ThemedText from '../components/ThemedText';
import { titleStyles } from '../styles/styles'

export default function AboutView() {
  return <ScrollView>
    <ThemedText style={{ ...titleStyles, ...styles.headerText}}>Eorzean Fishing</ThemedText>
    <ThemedText style={styles.description}>App only contains data in ARR for now and will be updated with expansions at a later time.</ThemedText>
    <ThemedText style={styles.description}>This app is open source! If you wish to contribute, please visit <ThemedText style={styles.hyperlink} onPress={() => Linking.openURL('https://github.com/iamkennytso/eorzeanFishing')}>the repository.</ThemedText></ThemedText>
    <ThemedText style={styles.description}>Splash Screen Model: <ThemedText style={styles.hyperlink} onPress={() => Linking.openURL('https://www.twitch.tv/yamikisaragi')}>YamiKisaragi</ThemedText></ThemedText>
    <ThemedText style={styles.description}>Fishing Data: <ThemedText style={styles.hyperlink} onPress={() => Linking.openURL('https://xivapi.com/')}>xivapi.com</ThemedText></ThemedText>
    <ThemedText style={styles.description}>Pool Images: <ThemedText style={styles.hyperlink} onPress={() => Linking.openURL('https://ffxiv.gamerescape.com/wiki/Main_Page')}>GamerEscape</ThemedText></ThemedText>
    <ThemedText style={styles.description}>
      FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
      All in-game graphics are property of SQUARE ENIX CO., LTD. All Rights Reserved.
      "Eorzean Fishing" is a non-official application without any link with Square Enix Holdings Co., Ltd.
    </ThemedText>
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
    marginTop: 10
  },
  hyperlink: {
    color: 'white',
    textDecorationLine: 'underline'
  }
});

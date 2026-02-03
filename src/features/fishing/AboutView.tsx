import React from 'react';
import { StyleSheet, ScrollView, Linking } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types/navigation';
import { ThemedText } from '@components/index';

type AboutViewScreenProps = NativeStackScreenProps<RootStackParamList, 'AboutView'>;

export default function AboutView({}: AboutViewScreenProps) {
  return (
    <ScrollView accessible={true} accessibilityLabel="About this app">
      <ThemedText style={styles.headerText}>Eorzean Fishing</ThemedText>
      <ThemedText style={styles.description}>
        App only contains data in ARR for now and will be updated with expansions at a later
        time.
      </ThemedText>
      <ThemedText style={styles.description}>
        This app is open source! If you wish to contribute, please visit{' '}
        <ThemedText
          style={styles.hyperlink}
          onPress={() => Linking.openURL('https://github.com/iamkennytso/eorzeanFishing')}
          accessible={true}
          accessibilityLabel="GitHub repository link"
          accessibilityRole="link"
        >
          the repository.
        </ThemedText>
      </ThemedText>
      <ThemedText style={styles.description}>
        Splash Screen Model:{' '}
        <ThemedText
          style={styles.hyperlink}
          onPress={() => Linking.openURL('https://www.twitch.tv/yamikisaragi')}
          accessible={true}
          accessibilityLabel="YamiKisaragi Twitch link"
          accessibilityRole="link"
        >
          YamiKisaragi
        </ThemedText>
      </ThemedText>
      <ThemedText style={styles.description}>
        Fishing Data:{' '}
        <ThemedText
          style={styles.hyperlink}
          onPress={() => Linking.openURL('https://xivapi.com/')}
          accessible={true}
          accessibilityLabel="XIVAPI link"
          accessibilityRole="link"
        >
          xivapi.com
        </ThemedText>
      </ThemedText>
      <ThemedText style={styles.description}>
        Pool Images:{' '}
        <ThemedText
          style={styles.hyperlink}
          onPress={() => Linking.openURL('https://ffxiv.gamerescape.com/wiki/Main_Page')}
          accessible={true}
          accessibilityLabel="GamerEscape link"
          accessibilityRole="link"
        >
          GamerEscape
        </ThemedText>
      </ThemedText>
      <ThemedText style={styles.description}>
        FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. All in-game
        graphics are property of SQUARE ENIX CO., LTD. All Rights Reserved. "Eorzean Fishing" is
        a non-official application without any link with Square Enix Holdings Co., Ltd.
      </ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'ffFont',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
  },
  hyperlink: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});

import { StyleSheet, Text, StatusBar as RNStatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { defaultFinalFantasyWindow } from '../styles';

export default function RegionSelect() {
  return <SafeAreaView style={styles.container}>
    <Text>helloWorld</Text>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === ANDROID ? RNStatusBar.currentHeight : 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...defaultFinalFantasyWindow
  },
});

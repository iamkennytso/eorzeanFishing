// import { useContext} from 'react'
import { View, StyleSheet, Text, StatusBar as RNStatusBar, Image, ScrollView, TouchableHighlight  } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { defaultFinalFantasyWindow } from '../styles';
import { ANDROID } from '../const/misc'
import { regions } from '../data/locations';
// import { StateContext } from '../App';

export default function AreaSelect({ route, navigation }) {
  const { region } = route.params;
  return <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>helloWorld{region}</Text>
    </View>
    {/* <ScrollView>
      {regions.map(region => <TouchableHighlight 
        key={region} 
        style={styles.areaContainer} 
        underlayColor='#5150C6' 
        onPress={() => navigation.navigate('Area')}
      >
        <Text style={styles.areaText}>{region}</Text>
      </TouchableHighlight>)}
    </ScrollView> */}
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === ANDROID ? RNStatusBar.currentHeight : 0,
    flex: 1,
    paddingLeft: 5,
    ...defaultFinalFantasyWindow
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'sans-serif-condensed'
  },
  areaContainer: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  areaText: {
    color: '#B1D8E0',
    fontSize: 20
  }
});

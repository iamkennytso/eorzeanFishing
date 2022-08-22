import { View, StyleSheet, Text, Image, ScrollView, TouchableHighlight  } from 'react-native';
import { regionsData } from '../data';
import { AREA_SELECT } from '../const/views';

export default function RegionSelect({ navigation }) {

  return <>
    <View style={styles.header}>
      <Image source={require('../assets/misc/fishingSymbol.png')} />
      <Text style={styles.headerText}>FFXIV Fishing Buddy</Text>
    </View>
    <ScrollView>
      {regionsData.map(region => <TouchableHighlight 
        key={region}
        style={styles.regionContainer} 
        underlayColor='#5150C6' 
        onPress={() => navigation.navigate(AREA_SELECT, { region })}
      >
        <Text style={styles.regionText}>{region}</Text>
      </TouchableHighlight>)}
    </ScrollView>
  </>
}

const styles = StyleSheet.create({
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
  regionContainer: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  regionText: {
    color: '#B1D8E0',
    fontSize: 20
  }
});

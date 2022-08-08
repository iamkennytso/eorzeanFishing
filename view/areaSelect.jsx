// import { useContext} from 'react'
import { StyleSheet, Text, ScrollView, TouchableHighlight, View  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { areas } from '../data/locations';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const meh = <View>
  <Text>helloWorld</Text>
</View>

const areaTitleStyles = {
  color: 'white'
}

const areaBannerStyles = {
  backgroundColor: 'transparent'
}

const areaExpandedContainerStyles = {
  backgroundColor: 'transparent'
}

export default function AreaSelect({ route }) {
  const { region } = route.params;
  const regionAreas = areas[region]
  // const [expandedIndexes, setExpandedIndexes] = useState(new Array(Object.keys(regionAreas).length))
  return <SafeAreaView style={styles.container}>
    <ScrollView>
      {Object.keys(regionAreas).map(area => (
        <LinearGradient key={area} style={styles.areaContainer} colors={['#312CD6', '#2920BD']}>
          <SimpleAccordion 
            title={area}
            viewInside={meh}
            titleStyle={areaTitleStyles}
            bannerStyle={areaBannerStyles}
            viewContainerStyle={areaExpandedContainerStyles}
            showContentInsideOfCard={false}
            arrowColor='white'
          />
        </LinearGradient>
      ))}
    </ScrollView>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  areaContainer: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    margin: 5
  },
  areaText: {
    color: '#B1D8E0',
    fontSize: 20
  }
});

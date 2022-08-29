import { View, StyleSheet, Text, Image, ScrollView  } from 'react-native';
import { FISH_VIEW } from '../const/views';
import { fishesData, baitProcure } from '../data';
import { titleStyles, subtitleStyles, fontColorStyle, tilesContainer, customTileGradient, tileContainer, tileContentContainer, tileText } from '../styles/styles'
import TouchableGradient from '../components/TouchableGradient';
import getIdImage from '../util/getIdImage';

export default function BaitView({ route, navigation }) {
  const { bait } = route.params;
  const { name, level, description, fishes, aquisition } = bait;

  return <ScrollView>
    <View style={styles.imageContainer}>
      <Image style={styles.fishImage} source={{uri: `https://xivapi.com${bait.iconURL}`}} />
    </View>
    <Text style={titleStyles}>{name}</Text>
    <Text style={styles.fishSubtitle}>Item Level: {level}</Text>
    <Text style={subtitleStyles}>Description:</Text>
    <Text style={fontColorStyle}>{description}</Text>
    <Text style={styles.fishSubtitle}>Fish:</Text>
    <View style={tilesContainer}>
      {fishes.map(fishID => <View style={tileContainer} key={fishID}>
        <TouchableGradient
          customGradientStyles={customTileGradient}
          onPress={() => navigation.navigate(FISH_VIEW, { fish: fishesData[fishID] } )}
        >
          <View style={tileContentContainer}> 
            <Image source={getIdImage[fishID]} />
            <Text style={tileText}>{fishesData[fishID].name}</Text>
          </View>
        </TouchableGradient>
      </View>)}
    </View>
    <Text style={styles.fishSubtitle}>Aquisition:</Text>
    <View style={tilesContainer}>
      {aquisition.map(aquisitionID => <View 
        style={styles.baitProcureContainer} 
        key={aquisitionID}
      >
        <Text style={tileText}>{baitProcure[aquisitionID]}</Text>
      </View>)}
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  fishImage: {
    height: 80,
    width: 80
  },
  fishSubtitle: {
    ...subtitleStyles,
    marginTop: 15,
    marginBottom: 15
  },
  baitProcureContainer: {
    ...tileContainer,
    borderWidth: 1,
    borderRadius: 15,
    height: undefined,
    aspectRatio: 1
  }
});

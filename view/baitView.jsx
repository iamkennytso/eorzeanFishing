import { View, StyleSheet, Image, ScrollView  } from 'react-native';
import { FISH_VIEW } from '../const/views';
import { fishesData, baitProcure } from '../data';
import { titleStyles, subtitleStyles, fontColorStyle, tilesContainer, customTileGradient, tileContainer, tileContentContainer, tileText } from '../styles/styles'
import TouchableGradient from '../components/TouchableGradient';
import idToImageMap from '../util/idToImageMap';
import { useContext } from 'react';
import { UserContext } from '../util/context';
import { PRIMARY, SECONDARY } from '../styles/variables';
import ThemedText from '../components/ThemedText';

export default function BaitView({ route, navigation }) {
  const { bait } = route.params;
  const { name, level, description, fishes, acquisition } = bait;
  const { caughtFish, handleLongPressFish } = useContext(UserContext)

  return <ScrollView>
    <View style={styles.imageContainer}>
      <Image style={styles.fishImage} source={{uri: `https://xivapi.com${bait.iconURL}`}} />
    </View>
    <ThemedText style={titleStyles}>{name}</ThemedText>
    <ThemedText style={styles.fishSubtitle}>Item Level: {level}</ThemedText>
    <ThemedText style={subtitleStyles}>Description:</ThemedText>
    <ThemedText style={fontColorStyle}>{description}</ThemedText>
    <ThemedText style={styles.fishSubtitle}>Fish:</ThemedText>
    <View style={tilesContainer}>
      {fishes.map(fishID => <View style={tileContainer} key={fishID}>
        <TouchableGradient
          gradientVariant={caughtFish[fishID] ? SECONDARY : PRIMARY}
          customGradientStyles={customTileGradient}
          onLongPress={() => handleLongPressFish(fishID)}
          onPress={() => navigation.navigate(FISH_VIEW, { fish: fishesData[fishID] } )}
        >
          <View style={tileContentContainer}> 
            <Image source={idToImageMap[fishID]} />
            <ThemedText style={tileText}>{fishesData[fishID].name}</ThemedText>
          </View>
        </TouchableGradient>
      </View>)}
    </View>
    <ThemedText style={styles.fishSubtitle}>Aquisition:</ThemedText>
    <View style={tilesContainer}>
      {acquisition.map(acquisitionID => <View 
        style={styles.baitProcureContainer} 
        key={acquisitionID}
      >
        <ThemedText style={tileText}>{baitProcure[acquisitionID]}</ThemedText>
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

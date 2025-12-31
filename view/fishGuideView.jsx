import { useContext, useState } from 'react';
import { View, StyleSheet, Image  } from 'react-native';
import { fishIdxToId } from '../data/fishes';
import { PRIMARY, SECONDARY } from '../styles/variables';
import idToImageMap from '../util/idToImageMap';
import { fishesData } from '../data';
import { FISH_VIEW } from '../const/views';
import { UserContext } from '../util/context';
import ThemedText from '../components/ThemedText';
import TouchableGradient from '../components/TouchableGradient';

const lastPage = Math.ceil(fishIdxToId.length / 25) - 1

const generatePageArray = selectedPage => {
  switch (true) {
    case selectedPage < 2:
      return [0,1,2,3,4]
    case selectedPage > lastPage - 2:
      return [lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage]
    default:
      return [selectedPage - 2, selectedPage - 1, selectedPage, selectedPage + 1, selectedPage + 2]
  }
}

const pageTile = {
  height: 48,
  width: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const customFishGradientStyles = {
  height: undefined,
  aspectRatio: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default function FishGuide({ navigation }) {
  const [selectedPage, setSelectedPage] = useState(0);
  const start = 25 * selectedPage
  const end = start + 25
  const data = fishIdxToId.slice(start, end)
  const { caughtFish, handleLongPressFish } = useContext(UserContext)

  return <>
    <View style={styles.pageSelectContainer}>
      {generatePageArray(selectedPage).map(pageNumber => {
        return <TouchableGradient customGradientStyles={pageTile} key={pageNumber} onPress={() => setSelectedPage(pageNumber)}>
          <ThemedText style={pageNumber == selectedPage ? styles.selectedPageText : styles.pageText}>
            {pageNumber + 1}
          </ThemedText>
        </TouchableGradient>
      })}
    </View>
    <View style={styles.fishGuideContainer}>
      {[1,2,3,4,5].map(row => <View style={styles.fishGuideRow} key={row}>
        {[0,5,10,15,20].map(col => {
          const fishId = data[col + row - 1]
          return <View style={styles.fishTile} key={`${row}${col}`}>
            <TouchableGradient 
              customGradientStyles={customFishGradientStyles} 
              onPress={() => navigation.navigate(FISH_VIEW, { fish: fishesData[fishId] })}
              onLongPress={() => handleLongPressFish(fishId)}
              gradientVariant={caughtFish[fishId] ? SECONDARY : PRIMARY}
            >
              <Image source={idToImageMap[fishId]} />
            </TouchableGradient>
          </View>
        })}
      </View>)}
    </View>
    <ThemedText style={styles.descriptionText}>Press to view more information</ThemedText>
    <ThemedText style={styles.descriptionText}>Long press to 'save' a fish</ThemedText>
  </>
}

const styles = StyleSheet.create({
  pageSelectContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    paddingRight: 10

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
  invalidText: {
    color: 'grey',
    fontSize: 18
  },
  selectedPageText: {
    color: '#FFD700',
    fontSize: 18,
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  pageText: {
    fontSize: 18
  },
  fishGuideContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: undefined,
    aspectRatio: 1,
    justifyContent: 'space-around'
  },
  fishGuideRow: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  fishTile: {
    width: 52
  },
    poolImage: {
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    poolLevelLinkContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    linkImage: {
      height: 20,
      width: 20,
      borderRadius: 4
    },
    descriptionText: {
      fontSize: 20
    }
});

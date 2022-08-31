import { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text  } from 'react-native';
import { fishIdxToId } from '../data/fishes';
import { BLUE_FONT } from '../styles/variables';
import getIdImage from '../util/getIdImage';
import { fishesData } from '../data';
import { FISH_VIEW } from '../const/views';
import AsyncStorage from '@react-native-async-storage/async-storage';

const lastPage = Math.ceil(fishIdxToId.length / 25) - 1
// const LeftArrowSVG = ({fillColor = BLUE_FONT}) => <Svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
//   <Path fill={fillColor} d="m22.65 35.95-12-12 12-12 2.1 2.1-9.9 9.9 9.9 9.9Zm12.65 0-12-12 12-12 2.1 2.1-9.9 9.9 9.9 9.9Z"/>
// </Svg>

// const RightArrowSVG = ({fillColor = BLUE_FONT}) => <Svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" >
//   <Path fill={fillColor} d="m12.75 35.95-2.1-2.1 9.9-9.9-9.9-9.9 2.1-2.1 12 12Zm12.65 0-2.1-2.1 9.9-9.9-9.9-9.9 2.1-2.1 12 12Z"/>
// </Svg>

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

const greenGradient = ['#31c272', '#29b659']

export default function FishGuide({ navigation }) {
  const [selectedPage, setSelectedPage] = useState(0);
  const [caughtFish, setCaughtFish] = useState({})
  const start = 25 * selectedPage
  const end = start + 25
  const data = fishIdxToId.slice(start, end)
  
  useEffect(() => {
    getUserData()
  },[])

  const getUserData = async () => {
    try {
      const fishData = await AsyncStorage.getItem('caughtFish')
      if (fishData) {
        setCaughtFish(JSON.parse(fishData))
      }
      return fishData != null ? JSON.parse(fishData) : null;
    } catch(e) {
      console.error(e)
    }
  }

  const handleSaveCaughtFish = async fishId => {
    const updatedCaughtFish = {...caughtFish, [fishId]: caughtFish[fishId] ? false : true}
    await AsyncStorage.mergeItem('caughtFish', JSON.stringify(updatedCaughtFish))
    setCaughtFish(updatedCaughtFish)
  }

  console.log(caughtFish)

  return <>
    <View style={styles.pageSelectContainer}>
      {/* <LeftArrowSVG /> */}
      {generatePageArray(selectedPage).map(pageNumber => {
        return <TouchableGradient customGradientStyles={pageTile} key={pageNumber} onPress={() => setSelectedPage(pageNumber)}>
          <Text style={pageNumber == selectedPage ? styles.selectedPageText : styles.pageText}>
            {pageNumber + 1}
          </Text>
        </TouchableGradient>
      })}
      {/* <RightArrowSVG /> */}
    </View>
    <View style={styles.fishGuideContainer}>
      {[1,2,3,4,5].map(row => <View style={styles.fishGuideRow} key={row}>
        {[0,5,10,15,20].map(col => {
          const fishId = data[col + row - 1]
          return <View style={styles.fishTile} key={`${row}${col}`}>
            <TouchableGradient 
              customGradientStyles={customFishGradientStyles} 
              onPress={() => navigation.navigate(FISH_VIEW, { fish: fishesData[fishId] })}
              onLongPress={() => handleSaveCaughtFish(fishId)}
              gradientColors={caughtFish[fishId] ? greenGradient : undefined}
            >
              <Image source={getIdImage[fishId]} />
            </TouchableGradient>
          </View>
        })}
      </View>)}
    </View>
    <Text style={styles.descriptionText}>Press to view more information</Text>
    <Text style={styles.descriptionText}>Long press to 'save' a fish</Text>
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
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5
  },
  pageText: {
    color: BLUE_FONT,
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
      color: BLUE_FONT,
      fontSize: 20
    }
  
});

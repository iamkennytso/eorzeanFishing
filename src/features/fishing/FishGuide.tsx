import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, SCREENS } from '@types/navigation';
import { getFishById } from '@utils/data';
import { getImageById } from '@utils/imageMap';
import { ThemedText, TouchableGradient } from '@components/index';
import { useCaughtFish, useToggleFish } from '@store/appStore';
import { GradientVariant } from '@features/theme/themes';

// Import fishIdxToId from old data
import { fishIdxToId } from '../../data/fishes';

type FishGuideScreenProps = NativeStackScreenProps<RootStackParamList, 'FishGuide'>;

const lastPage = Math.ceil(fishIdxToId.length / 25) - 1;

const generatePageArray = (selectedPage: number): number[] => {
  switch (true) {
    case selectedPage < 2:
      return [0, 1, 2, 3, 4];
    case selectedPage > lastPage - 2:
      return [lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage];
    default:
      return [
        selectedPage - 2,
        selectedPage - 1,
        selectedPage,
        selectedPage + 1,
        selectedPage + 2,
      ];
  }
};

export default function FishGuide({ navigation }: FishGuideScreenProps) {
  const [selectedPage, setSelectedPage] = useState(0);
  const start = 25 * selectedPage;
  const end = start + 25;
  const data = fishIdxToId.slice(start, end);
  const caughtFish = useCaughtFish();
  const toggleFish = useToggleFish();

  return (
    <>
      <View style={styles.pageSelectContainer}>
        {generatePageArray(selectedPage).map((pageNumber) => (
          <TouchableGradient
            customGradientStyles={styles.pageTile}
            key={pageNumber}
            onPress={() => setSelectedPage(pageNumber)}
            accessibilityLabel={`Page ${pageNumber + 1}`}
            accessibilityHint={`View page ${pageNumber + 1} of fish`}
            accessibilityState={{ selected: pageNumber === selectedPage }}
          >
            <ThemedText
              style={pageNumber === selectedPage ? styles.selectedPageText : styles.pageText}
            >
              {pageNumber + 1}
            </ThemedText>
          </TouchableGradient>
        ))}
      </View>
      <View style={styles.fishGuideContainer}>
        {[1, 2, 3, 4, 5].map((row) => (
          <View style={styles.fishGuideRow} key={row}>
            {[0, 5, 10, 15, 20].map((col) => {
              const fishId = data[col + row - 1];
              if (!fishId) return <View style={styles.fishTile} key={`${row}${col}`} />;

              const fishData = getFishById(fishId);
              if (!fishData) return <View style={styles.fishTile} key={`${row}${col}`} />;

              const isCaught = !!caughtFish[fishId];

              return (
                <View style={styles.fishTile} key={`${row}${col}`}>
                  <TouchableGradient
                    customGradientStyles={styles.customFishGradientStyles}
                    onPress={() => navigation.navigate(SCREENS.FISH_VIEW, { fish: fishData })}
                    onLongPress={() => toggleFish(fishId)}
                    gradientVariant={
                      isCaught ? GradientVariant.SECONDARY : GradientVariant.PRIMARY
                    }
                    accessibilityLabel={`${fishData.name}${isCaught ? ', caught' : ''}`}
                    accessibilityHint="Press to view details, long press to mark as caught"
                    accessibilityState={{ selected: isCaught }}
                  >
                    <Image
                      source={getImageById(fishId)}
                      style={styles.fishIcon}
                      accessible={false}
                    />
                  </TouchableGradient>
                </View>
              );
            })}
          </View>
        ))}
      </View>
      <ThemedText style={styles.descriptionText}>Press to view more information</ThemedText>
      <ThemedText style={styles.descriptionText}>Long press to mark a fish as caught</ThemedText>
    </>
  );
}

const styles = StyleSheet.create({
  pageSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  pageTile: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedPageText: {
    color: '#FFD700',
    fontSize: 18,
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  pageText: {
    fontSize: 18,
  },
  fishGuideContainer: {
    flexDirection: 'row',
    height: undefined,
    aspectRatio: 1,
    justifyContent: 'space-around',
  },
  fishGuideRow: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  fishTile: {
    width: 52,
  },
  customFishGradientStyles: {
    height: undefined,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  fishIcon: {
    width: 40,
    height: 40,
  },
});

import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { BaitViewScreenProps, SCREENS } from '@types/navigation';
import { getFishById } from '@utils/data';
import { getImageById } from '@utils/imageMap';
import { ThemedText, TouchableGradient } from '@components/index';
import { useCaughtFish, useToggleFish } from '@store/appStore';
import { GradientVariant } from '@features/theme/themes';
import { useTheme } from '@store/appStore';
import { themes } from '@features/theme/themes';
import {
  titleStyles,
  subtitleStyles,
  fontColorStyle,
  tilesContainer,
  tileContainer,
  tileContentContainer,
  tileText,
  customTileGradient,
} from '@utils/sharedStyles';

// Import baitProcure from old data
import { baitProcure } from '../../data/baits';

export default function BaitView({ route, navigation }: BaitViewScreenProps) {
  const { bait } = route.params;
  const { name, level, description, fishes, acquisition } = bait as any;
  const caughtFish = useCaughtFish();
  const toggleFish = useToggleFish();
  const theme = useTheme();
  const currentTheme = themes[theme];

  return (
    <ScrollView accessible={true} accessibilityLabel={`${name} bait details`}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.baitImage}
          source={{ uri: `https://xivapi.com${(bait as any).iconURL}` }}
          accessible={true}
          accessibilityLabel={`${name} icon`}
        />
      </View>
      <ThemedText style={titleStyles}>{name}</ThemedText>
      <ThemedText style={styles.baitSubtitle}>Item Level: {level}</ThemedText>
      <ThemedText style={subtitleStyles}>Description:</ThemedText>
      <ThemedText style={fontColorStyle}>{description}</ThemedText>

      <ThemedText style={styles.baitSubtitle}>Fish:</ThemedText>
      <View style={tilesContainer}>
        {fishes.map((fishID: number) => {
          const fishData = getFishById(fishID);
          if (!fishData) return null;

          const isCaught = !!caughtFish[fishID];

          return (
            <View style={tileContainer} key={fishID}>
              <TouchableGradient
                gradientVariant={
                  isCaught ? GradientVariant.SECONDARY : GradientVariant.PRIMARY
                }
                customGradientStyles={customTileGradient}
                onLongPress={() => toggleFish(fishID)}
                onPress={() => navigation.navigate(SCREENS.FISH_VIEW, { fish: fishData })}
                accessibilityLabel={`${fishData.name}${isCaught ? ', caught' : ''}`}
                accessibilityHint="View fish details, long press to mark as caught"
                accessibilityState={{ selected: isCaught }}
              >
                <View style={tileContentContainer}>
                  <Image
                    source={getImageById(fishID)}
                    style={styles.fishIcon}
                    accessible={false}
                  />
                  <ThemedText style={tileText}>{fishData.name}</ThemedText>
                </View>
              </TouchableGradient>
            </View>
          );
        })}
      </View>

      <ThemedText style={styles.baitSubtitle}>Acquisition:</ThemedText>
      <View style={tilesContainer}>
        {acquisition.map((acquisitionID: string) => (
          <View
            style={[
              styles.baitProcureContainer,
              { borderColor: currentTheme.BORDER },
            ]}
            key={acquisitionID}
          >
            <ThemedText style={tileText}>
              {(baitProcure as any)[acquisitionID] || acquisitionID}
            </ThemedText>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  baitImage: {
    height: 80,
    width: 80,
  },
  baitSubtitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 15,
  },
  baitProcureContainer: {
    width: '48%',
    borderWidth: 1,
    borderRadius: 15,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  fishIcon: {
    width: 40,
    height: 40,
  },
});

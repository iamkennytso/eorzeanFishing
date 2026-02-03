import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { FishViewScreenProps, SCREENS } from '@types/navigation';
import { getFishById, getBaitById, getPoolById, isBait as checkIsBait } from '@utils/data';
import { getImageById } from '@utils/imageMap';
import { ThemedText, TouchableGradient } from '@components/index';
import { useCaughtFish, useToggleFish } from '@store/appStore';
import { GradientVariant } from '@features/theme/themes';
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

export default function FishView({ route, navigation }: FishViewScreenProps) {
  const { fish } = route.params;
  const { name, level, description, pools, baits, mooches } = fish;
  const canMooch = !!mooches;
  const caughtFish = useCaughtFish();
  const toggleFish = useToggleFish();

  return (
    <ScrollView accessible={true} accessibilityLabel={`${name} fish details`}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.fishImage}
          source={{ uri: `https://xivapi.com${fish.iconURL}` }}
          accessible={true}
          accessibilityLabel={`${name} icon`}
        />
      </View>
      <ThemedText style={titleStyles}>{name}</ThemedText>
      <ThemedText style={styles.fishSubtitle}>Item Level: {level}</ThemedText>
      <ThemedText style={subtitleStyles}>Description:</ThemedText>
      <ThemedText style={fontColorStyle}>{description}</ThemedText>

      <ThemedText style={styles.fishSubtitle}>Pools:</ThemedText>
      {pools.map((poolID) => {
        if (poolID === 1) return null; // Skip unknown pool
        const poolData = getPoolById(poolID);
        if (!poolData) return null;

        return (
          <View style={styles.poolContainer} key={poolID}>
            <TouchableGradient
              customGradientStyles={styles.poolContentContainer}
              onPress={() => navigation.navigate(SCREENS.POOL_VIEW, { poolData })}
              accessibilityLabel={poolData.name}
              accessibilityHint="Navigate to this fishing pool"
            >
              <ThemedText style={styles.poolText}>{poolData.name}</ThemedText>
            </TouchableGradient>
          </View>
        );
      })}

      <ThemedText style={styles.fishSubtitle}>Bait / Mooch:</ThemedText>
      <View style={tilesContainer}>
        {baits.map((baitID) => {
          const isBaitItem = checkIsBait(baitID);
          const isCaught = !isBaitItem && !!caughtFish[baitID];
          const itemData = isBaitItem ? getBaitById(baitID) : getFishById(baitID);
          if (!itemData) return null;

          return (
            <View style={tileContainer} key={baitID}>
              <TouchableGradient
                gradientVariant={
                  isCaught ? GradientVariant.SECONDARY : GradientVariant.PRIMARY
                }
                customGradientStyles={customTileGradient}
                onLongPress={() => (!isBaitItem ? toggleFish(baitID) : undefined)}
                onPress={() =>
                  isBaitItem
                    ? navigation.navigate(SCREENS.BAIT_VIEW, { bait: itemData })
                    : navigation.navigate(SCREENS.FISH_VIEW, { fish: itemData })
                }
                accessibilityLabel={`${itemData.name}${isCaught ? ', caught' : ''}`}
                accessibilityHint={
                  isBaitItem
                    ? 'View bait details'
                    : 'View fish details, long press to mark as caught'
                }
                accessibilityState={{ selected: isCaught }}
              >
                <View style={tileContentContainer}>
                  <Image
                    source={getImageById(baitID)}
                    style={styles.itemIcon}
                    accessible={false}
                  />
                  <ThemedText style={tileText}>{itemData.name}</ThemedText>
                </View>
              </TouchableGradient>
            </View>
          );
        })}
      </View>

      {canMooch && mooches && (
        <>
          <ThemedText style={styles.fishSubtitle}>Mooches:</ThemedText>
          <View style={tilesContainer}>
            {mooches.map((moochID) => {
              const moochFish = getFishById(moochID);
              if (!moochFish) return null;

              const isCaught = !!caughtFish[moochID];

              return (
                <View style={tileContainer} key={moochID}>
                  <TouchableGradient
                    gradientVariant={
                      isCaught ? GradientVariant.SECONDARY : GradientVariant.PRIMARY
                    }
                    customGradientStyles={customTileGradient}
                    onLongPress={() => toggleFish(moochID)}
                    onPress={() =>
                      navigation.navigate(SCREENS.FISH_VIEW, { fish: moochFish })
                    }
                    accessibilityLabel={`${moochFish.name}${isCaught ? ', caught' : ''}`}
                    accessibilityHint="View fish details, long press to mark as caught"
                    accessibilityState={{ selected: isCaught }}
                  >
                    <View style={tileContentContainer}>
                      <Image
                        source={getImageById(moochID)}
                        style={styles.itemIcon}
                        accessible={false}
                      />
                      <ThemedText style={tileText}>{moochFish.name}</ThemedText>
                    </View>
                  </TouchableGradient>
                </View>
              );
            })}
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  fishImage: {
    height: 80,
    width: 80,
  },
  fishSubtitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 15,
  },
  poolContainer: {
    marginTop: 4,
    marginBottom: 4,
  },
  poolContentContainer: {
    paddingLeft: 6,
    paddingBottom: 6,
    paddingTop: 6,
  },
  poolText: {
    fontSize: 16,
  },
  itemIcon: {
    width: 40,
    height: 40,
  },
});

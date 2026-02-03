import React from 'react';
import { View, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import { PoolViewScreenProps, SCREENS } from '@types/navigation';
import { getFishById } from '@utils/data';
import { getImageById } from '@utils/imageMap';
import { getGamerEscapeURL } from '@utils/gamerEscape';
import { ThemedText, TouchableGradient } from '@components/index';
import { useCaughtFish, useToggleFish, useIsFishCaught } from '@store/appStore';
import { GradientVariant } from '@features/theme/themes';
import {
  titleStyles,
  subtitleStyles,
  tilesContainer,
  tileContainer,
  tileContentContainer,
  tileText,
  customTileGradient,
  customLinkGradient,
} from '@utils/sharedStyles';

export default function PoolView({ navigation, route }: PoolViewScreenProps) {
  const { poolData } = route.params;
  const { level, name, fish, image } = poolData;
  const toggleFish = useToggleFish();
  const caughtFish = useCaughtFish();

  const renderFishTile = (fishId: number) => {
    const fishData = getFishById(fishId);
    if (!fishData) return null;

    const isCaught = !!caughtFish[fishId];

    return (
      <TouchableGradient
        gradientVariant={isCaught ? GradientVariant.SECONDARY : GradientVariant.PRIMARY}
        customGradientStyles={customTileGradient}
        onLongPress={() => toggleFish(fishId)}
        onPress={() => navigation.navigate(SCREENS.FISH_VIEW, { fish: fishData })}
        accessibilityLabel={`${fishData.name}${isCaught ? ', caught' : ', not caught'}`}
        accessibilityHint="Press to view fish details, long press to mark as caught or uncaught"
        accessibilityState={{ selected: isCaught }}
      >
        <View style={tileContentContainer}>
          <Image
            source={getImageById(fishId)}
            style={styles.fishIcon}
            accessible={false}
          />
          <ThemedText style={tileText}>{fishData.name}</ThemedText>
        </View>
      </TouchableGradient>
    );
  };

  return (
    <ScrollView accessible={true} accessibilityLabel={`${name} fishing pool`}>
      <Image
        style={styles.poolImage}
        source={{ uri: `https://ffxiv.gamerescape.com/${image}` }}
        accessible={true}
        accessibilityLabel={`${name} location image`}
      />
      <ThemedText style={titleStyles}>{name}</ThemedText>
      <View style={styles.poolLevelLinkContainer}>
        <ThemedText style={subtitleStyles}>Pool Level: {level}</ThemedText>
        <TouchableGradient
          customGradientStyles={customLinkGradient}
          customHighlightStyles={customLinkGradient}
          onPress={() => Linking.openURL(getGamerEscapeURL(name))}
          accessibilityLabel="View on GamerEscape wiki"
          accessibilityHint="Opens external link to wiki page"
        >
          <Image
            source={require('../../../assets/misc/gamerEscape.jpg')}
            style={styles.linkImage}
            accessible={false}
          />
        </TouchableGradient>
      </View>

      <View style={tilesContainer}>
        {[0, 1, 2, 3, 4].map((idx) => (
          <View style={tileContainer} key={idx}>
            {fish[idx] && renderFishTile(fish[idx])}
          </View>
        ))}
      </View>

      {fish[5] && (
        <View style={tilesContainer}>
          {[5, 6, 7, 8, 9].map((idx) => (
            <View style={tileContainer} key={idx}>
              {fish[idx] && renderFishTile(fish[idx])}
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  poolImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  poolLevelLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkImage: {
    height: 20,
    width: 20,
    borderRadius: 4,
  },
  fishIcon: {
    width: 40,
    height: 40,
  },
});

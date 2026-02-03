import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { RegionSelectScreenProps, SCREENS } from '@types/navigation';
import { locationsData } from '@utils/data';
import { ThemedText, TouchableGradient } from '@components/index';
import { useTheme } from '@store/appStore';
import { themes } from '@features/theme/themes';

export default function RegionSelect({ navigation }: RegionSelectScreenProps) {
  const theme = useTheme();
  const currentTheme = themes[theme];
  const regionsData = Object.keys(locationsData);

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/misc/fishingSymbol.png')}
          accessible={true}
          accessibilityLabel="Fishing symbol logo"
        />
        <ThemedText style={styles.headerText}>Eorzean Fishing</ThemedText>
        <View style={styles.iconsContainer}>
          <TouchableGradient
            customGradientStyles={{ width: 22, marginRight: 8 }}
            onPress={() => navigation.navigate(SCREENS.PROFILE_VIEW)}
            accessibilityLabel="Profile"
            accessibilityHint="Navigate to your angler profile"
          >
            <Image
              style={styles.profileIcon}
              source={require('../../../assets/misc/profileIcon.png')}
              accessible={false}
            />
          </TouchableGradient>
          <TouchableGradient
            customGradientStyles={{ width: 22 }}
            onPress={() => navigation.navigate(SCREENS.ABOUT_VIEW)}
            accessibilityLabel="About"
            accessibilityHint="View information about this app"
          >
            <ThemedText style={styles.infoText}>ⓘ</ThemedText>
          </TouchableGradient>
        </View>
      </View>
      <ScrollView accessible={true} accessibilityLabel="Region list">
        {regionsData.map((region) => (
          <View key={region} style={styles.regionContainer}>
            <TouchableGradient
              onPress={() => navigation.navigate(SCREENS.AREA_SELECT, { region })}
              customGradientStyles={styles.regionGradient}
              accessibilityLabel={`${region} region`}
              accessibilityHint="View fishing areas in this region"
            >
              <ThemedText style={styles.subtitleText}>{region}</ThemedText>
            </TouchableGradient>
          </View>
        ))}
        <TouchableGradient
          onPress={() => navigation.navigate(SCREENS.FISH_GUIDE)}
          customGradientStyles={styles.regionGradient}
          accessibilityLabel="Fish Guide"
          accessibilityHint="View the general fishing guide"
        >
          <View style={styles.fishGuideContainer}>
            <Image
              style={styles.fishGuideIcon}
              source={require('../../../assets/misc/fishGuide.png')}
              accessible={false}
            />
            <ThemedText style={styles.subtitleText}>  Fish Guide</ThemedText>
          </View>
        </TouchableGradient>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'ffFont',
    fontSize: 40,
  },
  profileIcon: {
    height: 22,
    width: 22,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 20,
  },
  regionContainer: {
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 15,
  },
  regionGradient: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  subtitleText: {
    fontSize: 24,
    fontWeight: '600',
  },
  fishGuideIcon: {
    height: 36,
    width: 36,
  },
  fishGuideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

import React from 'react';
import { StyleSheet, ScrollView, TouchableHighlight, View, Image } from 'react-native';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { AreaSelectScreenProps, SCREENS } from '@types/navigation';
import { locationsData, getPoolById } from '@utils/data';
import { PoolType } from '@types/index';
import { ThemedText, TouchableGradient } from '@components/index';
import { useTheme } from '@store/appStore';
import { themes } from '@features/theme/themes';

const getTypeImage = (type: PoolType) => {
  let link;
  switch (type) {
    case PoolType.Freshwater:
      link = require('../../../assets/misc/freshwater.png');
      break;
    case PoolType.Saltwater:
      link = require('../../../assets/misc/saltwater.png');
      break;
    case PoolType.Dunefishing:
      link = require('../../../assets/misc/dunefishing.png');
      break;
    case PoolType.Cloudfishing:
      link = require('../../../assets/misc/cloudfishing.png');
      break;
    default:
      return null;
  }
  return <Image style={styles.poolImage} source={link} accessible={false} />;
};

interface AreaExpandContentProps {
  poolIDs: number[];
  navigation: any;
  underlayColor: string;
}

const AreaExpandContent: React.FC<AreaExpandContentProps> = ({
  poolIDs,
  navigation,
  underlayColor,
}) => (
  <View>
    {poolIDs.map((poolID) => {
      const poolData = getPoolById(poolID);
      if (!poolData) return null;

      const { name, level, type } = poolData;

      return (
        <TouchableHighlight
          key={poolID}
          onPress={() => navigation.navigate(SCREENS.POOL_VIEW, { poolData })}
          underlayColor={underlayColor}
          accessible={true}
          accessibilityLabel={`${name}, level ${level}`}
          accessibilityHint="View this fishing pool"
          accessibilityRole="button"
        >
          <View style={styles.poolContentContainer}>
            <ThemedText style={styles.poolLevel}>{level}</ThemedText>
            <ThemedText style={styles.poolName}>{name}</ThemedText>
            {getTypeImage(type)}
          </View>
        </TouchableHighlight>
      );
    })}
  </View>
);

export default function AreaSelect({ navigation, route }: AreaSelectScreenProps) {
  const { region } = route.params;
  const theme = useTheme();
  const currentTheme = themes[theme];
  const regionAreas = locationsData[region];

  if (!regionAreas) {
    return (
      <View style={styles.errorContainer}>
        <ThemedText>Region not found</ThemedText>
      </View>
    );
  }

  return (
    <ScrollView accessible={true} accessibilityLabel={`Areas in ${region}`}>
      {Object.keys(regionAreas).map((area) => (
        <View style={styles.poolContainer} key={area}>
          <TouchableGradient>
            <SimpleAccordion
              title={area}
              viewInside={
                <AreaExpandContent
                  poolIDs={regionAreas[area]}
                  navigation={navigation}
                  underlayColor={currentTheme.TOUCHABLE_UNDERLAY}
                />
              }
              titleStyle={{ fontSize: 24, fontWeight: '600', color: currentTheme.FONT }}
              bannerStyle={transparentBackground}
              viewContainerStyle={transparentBackground}
              showContentInsideOfCard={false}
              arrowColor={currentTheme.FONT}
            />
          </TouchableGradient>
        </View>
      ))}
    </ScrollView>
  );
}

const transparentBackground = {
  backgroundColor: 'transparent',
};

const styles = StyleSheet.create({
  poolContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  poolContentContainer: {
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  poolImage: {
    height: 32,
    width: 32,
  },
  poolLevel: {
    fontSize: 16,
  },
  poolName: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

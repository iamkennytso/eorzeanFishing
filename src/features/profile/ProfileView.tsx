import React, { useMemo } from 'react';
import { StyleSheet, Image, ScrollView, View } from 'react-native';
import { ProfileViewScreenProps, SCREENS } from '@types/navigation';
import { useUser, useCaughtFish, useTheme } from '@store/appStore';
import { useRefreshCharacter } from '@api/hooks/useCharacter';
import { poolLevelToIdToFish, getPoolById } from '@utils/data';
import { themes, themeDisplayNames } from '@features/theme/themes';
import { ThemeName } from '@types/index';
import { ThemedText, TouchableGradient, ThemedDropdown, LoadingSpinner, ErrorMessage } from '@components/index';
import { useSetTheme } from '@store/appStore';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileView({ navigation }: ProfileViewScreenProps) {
  const user = useUser();
  const caughtFish = useCaughtFish();
  const theme = useTheme();
  const setTheme = useSetTheme();
  const currentTheme = themes[theme];

  const { mutate: refreshUser, isPending, error } = useRefreshCharacter();

  const handleRefreshUserData = () => {
    if (user?.id) {
      refreshUser(user.id);
    }
  };

  // Memoized suggested pool calculation
  const suggestedPoolId = useMemo(() => {
    if (!user?.level) return null;

    let userLevel = user.level < 5 ? 5 : user.level;

    while (userLevel !== 0) {
      const poolsAtLevel = poolLevelToIdToFish[userLevel];

      if (poolsAtLevel) {
        const possiblePools = Object.keys(poolsAtLevel);
        let poolWithMostUncaughtFish = '';
        let maxUncaughtFish = 0;

        for (const poolId of possiblePools) {
          const uncaughtFishInPool = poolsAtLevel[poolId].filter(
            (fishId) => !caughtFish[fishId]
          );

          if (uncaughtFishInPool.length > maxUncaughtFish) {
            maxUncaughtFish = uncaughtFishInPool.length;
            poolWithMostUncaughtFish = poolId;
          }
        }

        if (maxUncaughtFish > 0) {
          return poolWithMostUncaughtFish;
        }
      }

      userLevel--;
    }

    return null;
  }, [user?.level, caughtFish]);

  const suggestedPool = suggestedPoolId ? getPoolById(Number(suggestedPoolId)) : null;

  return (
    <ScrollView
      accessible={true}
      accessibilityLabel="Angler profile screen"
    >
      <ThemedText style={styles.title}>Angler Profile</ThemedText>

      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatarImage}
          source={
            user?.avatarUrl
              ? { uri: user.avatarUrl }
              : require('../../../assets/misc/defaultAvatar.jpg')
          }
          accessible={true}
          accessibilityLabel={user ? `${user.name}'s avatar` : 'Default avatar'}
        />
        <View style={styles.iconContainer}>
          <TouchableGradient
            onPress={() => navigation.navigate(SCREENS.PROFILE_SEARCH)}
            accessibilityLabel="Edit profile"
            accessibilityHint="Navigate to profile search to change character"
          >
            <Icon name="edit" size={36} color={currentTheme.FONT} />
          </TouchableGradient>

          {user && (
            <TouchableGradient
              onPress={handleRefreshUserData}
              disabled={isPending}
              accessibilityLabel="Refresh user data"
              accessibilityHint="Fetches latest character data from the server"
            >
              <Icon name="autorenew" size={36} color={currentTheme.FONT} />
            </TouchableGradient>
          )}
        </View>
      </View>

      {isPending && <LoadingSpinner message="Refreshing character data..." />}

      {error && (
        <ErrorMessage
          message={error.message || 'Failed to refresh character data'}
          onRetry={handleRefreshUserData}
        />
      )}

      <View style={styles.propertyContainer}>
        <ThemedText style={styles.propertyText}>Name:</ThemedText>
        <ThemedText style={styles.propertyText}>{user?.name || '--'}</ThemedText>
      </View>

      <View style={styles.propertyContainer}>
        <ThemedText style={styles.propertyText}>Server:</ThemedText>
        <ThemedText style={styles.propertyText}>{user?.server || '--'}</ThemedText>
      </View>

      <View style={styles.propertyContainer}>
        <ThemedText style={styles.propertyText}>Level:</ThemedText>
        <ThemedText style={styles.propertyText}>{user?.level || '--'}</ThemedText>
      </View>

      {suggestedPool && (
        <View style={styles.suggestedPoolContainer}>
          <TouchableGradient
            onPress={() => navigation.navigate(SCREENS.POOL_VIEW, { poolData: suggestedPool })}
            customGradientStyles={{ padding: 10 }}
            accessibilityLabel="Suggested fishing pool"
            accessibilityHint={`Navigate to ${suggestedPool.name}`}
          >
            <ThemedText style={styles.suggestedPoolText}>
              Suggested Fishing Pool: {suggestedPool.name}
            </ThemedText>
          </TouchableGradient>
        </View>
      )}

      <View>
        <ThemedText style={styles.subtitle}>Theme Select</ThemedText>
        <ThemedDropdown
          dataArray={[ThemeName.DARK, ThemeName.LIGHT, ThemeName.CLASSIC]}
          onSelect={(selectedTheme) => setTheme(selectedTheme)}
          selected={theme}
          defaultText={themeDisplayNames[theme]}
          buttonTextFunction={(t) => themeDisplayNames[t]}
          rowTextFunction={(t) => themeDisplayNames[t]}
          accessibilityLabel="Theme selector"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'ffFont',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  avatarImage: {
    width: 96,
    height: 96,
  },
  propertyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    marginLeft: 30,
    justifyContent: 'space-between',
  },
  propertyText: {
    fontSize: 20,
    marginTop: 10,
  },
  suggestedPoolContainer: {
    padding: 10,
    marginTop: 10,
  },
  suggestedPoolText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

import { useState, useContext } from 'react';
import { StyleSheet, Image, ScrollView, View, ActivityIndicator } from 'react-native';
import { subtitleStyles, titleStyles } from '../styles/styles'
import { UserContext } from '../util/context';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { POOL_VIEW, PROFILE_SEARCH } from '../const/views';
import { poolLevelToIdToFish } from '../data/pools';
import { poolsData } from '../data';
import ThemedText from '../components/ThemedText';
import { CLASSIC, DARK, LIGHT, THEME } from '../styles/themes';
import ThemedDropdown from '../components/ThemedDropdown';
import TouchableGradient from '../components/TouchableGradient';

export default function ProfileView({ navigation }) {
  const [loading, setLoading] = useState(false);
  const { user, getUserInfo, caughtFish, theme, handleThemeSelection } = useContext(UserContext)
  const { avatarUrl, name, server, level, id } = user || {};

  const handleRefreshUserData = async () => {
    if (loading) return
    setLoading(true)
    await getUserInfo(id)
    setLoading(false)
  }

  const getSuggestedPool = () => {
    if (!level) return
    let userLevel = level < 5 ? 5 : level
    while (userLevel !== 0) {
      if (poolLevelToIdToFish[userLevel]) {
        const possiblePools = Object.keys(poolLevelToIdToFish[userLevel])
        let poolWithMostUncaughtFish = ''
        let uncaughtFish = 0
        for (let pool of possiblePools) {
          const uncaughtFishInPool = poolLevelToIdToFish[userLevel][pool].filter(fishId => !(caughtFish[fishId]))
          if (uncaughtFishInPool.length > uncaughtFish) {
            uncaughtFish = uncaughtFishInPool.length
            poolWithMostUncaughtFish = pool
          }
        }
        if (uncaughtFish) {
          return poolWithMostUncaughtFish
        }
      }
      userLevel--
    }
    return null
  }

  const suggestedPool = getSuggestedPool()

  const themeTextMapping = {
    [DARK]: 'Dark',
    [LIGHT]: 'Light',
    [CLASSIC]: 'Classic'
  }

  return <ScrollView>
    <ThemedText style={titleStyles}>Angler Profile</ThemedText>
    <View style={styles.avatarContainer}>
      <Image style={styles.avatarImage} source={avatarUrl ? { uri: avatarUrl } : require('../assets/misc/defaultAvatar.jpg')}></Image>
      <View style={styles.iconContainer}>
        <TouchableGradient onPress={() => navigation.navigate(PROFILE_SEARCH)}>
          <Icon
            name='edit'
            size={36}
            color={THEME[theme].FONT}
          />
        </TouchableGradient>
        {user && <TouchableGradient onPress={() => handleRefreshUserData()}>
          <Icon
            name='autorenew'
            size={36}
            color={THEME[theme].FONT}
          />
        </TouchableGradient>}
      </View>
    </View>
    {loading && <ActivityIndicator size='large' color={THEME[theme].FONT} />}
    <View style={styles.propertyContainer}>
      <ThemedText style={styles.propertyText}>Name:</ThemedText>
      <ThemedText style={styles.propertyText}>{name || '--'}</ThemedText>
    </View>
    <View style={styles.propertyContainer}>
      <ThemedText style={styles.propertyText}>Server:</ThemedText>
      <ThemedText style={styles.propertyText}>{server || '--'}</ThemedText>
    </View>
    <View style={styles.propertyContainer}>
      <ThemedText style={styles.propertyText}>Level:</ThemedText>
      <ThemedText style={styles.propertyText}>{level || '--'}</ThemedText>
    </View>
    {suggestedPool && <View style={styles.suggestedPoolContainer}>
      <TouchableGradient
        onPress={() => navigation.navigate(POOL_VIEW, { poolData: poolsData[suggestedPool] })}
        customGradientStyles={{ padding: 10 }}
      >
        <ThemedText style={styles.suggestedPoolText}>Suggested Fishing Pool</ThemedText>
      </TouchableGradient>
    </View>}
    <View>
      <ThemedText style={subtitleStyles}>Theme Select</ThemedText>
      <ThemedDropdown
        dataArray={[DARK, LIGHT, CLASSIC]}
        onSelect={handleThemeSelection}
        selected={theme}
        defaultText={themeTextMapping[theme]}
        buttonTextFunction={theme => themeTextMapping[theme]}
        rowTextFunction={theme => themeTextMapping[theme]}
      />
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  avatarImage: {
    width: 96,
    height: 96
  },
  propertyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  iconContainer: {
    marginLeft: 30,
    display: 'flex',
    justifyContent: 'space-between'
  },
  propertyText: {
    ...subtitleStyles,
    marginTop: 10
  },
  suggestedPoolContainer: {
    padding: 10,
    marginTop: 10
  },
  suggestedPoolText: {
    fontSize: 20,
    textAlign: 'center'
  }
});

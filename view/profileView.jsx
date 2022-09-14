import { useState, useContext } from 'react';
import { StyleSheet, Text, Image, ScrollView, View, ActivityIndicator } from 'react-native';
import { subtitleStyles, titleStyles } from '../styles/styles'
import { UserContext } from '../util/context';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { BLUE_FONT } from '../styles/variables';
import { POOL_VIEW, PROFILE_SEARCH } from '../const/views';
import { poolLevelToIdToFish } from '../data/pools';
import { poolsData } from '../data';

const fisherClassJobIdx = 30
export default function ProfileView({ navigation }) {
  const [loading, setLoading] = useState(false);
  const { user, getUserInfo, caughtFish } = useContext(UserContext)
  const { avatarUrl, name, server, level, id } = user || {};

  const handleRefreshUserData = async () => {
    if (loading) return
    setLoading(true)
    await getUserInfo(id)
    setLoading(false)
  }

  const getSuggestedPool = () => {
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
  }

  const suggestedPool = getSuggestedPool()

  return <ScrollView>
    <Text style={titleStyles}>Angler Profile</Text>
    <View style={styles.avatarContainer}>
      <Image style={styles.avatarImage} source={avatarUrl ? { uri: avatarUrl } : require('../assets/misc/defaultAvatar.jpg')}></Image>
      <View style={styles.iconContainer}>
        <TouchableGradient onPress={() => navigation.navigate(PROFILE_SEARCH)}>
          <Icon
            name='edit'
            size={36}
            color={BLUE_FONT}
          />
        </TouchableGradient>
        <TouchableGradient  onPress={() => handleRefreshUserData()}>
          <Icon
            name='autorenew'
            size={36}
            color={BLUE_FONT}
          />
        </TouchableGradient>
      </View>
    </View>
    {loading && <ActivityIndicator size='large' color={BLUE_FONT} />}
    <View style={styles.propertyContainer}>
      <Text style={styles.propertyText}>Name:</Text> 
      <Text style={styles.propertyText}>{name || '--'}</Text>
    </View>
    <View style={styles.propertyContainer}>
      <Text style={styles.propertyText}>Server:</Text> 
      <Text style={styles.propertyText}>{server || '--'}</Text>
    </View>
    <View style={styles.propertyContainer}>
      <Text style={styles.propertyText}>Level:</Text> 
      <Text style={styles.propertyText}>{level || '--'}</Text>
    </View>
    <View style={styles.suggestedPoolContainer}>
      <TouchableGradient 
        onPress={() => navigation.navigate(POOL_VIEW, {poolData: poolsData[suggestedPool]})}
        customGradientStyles={{ padding: 10}}
      >
        <Text style={styles.suggestedPoolText}>Suggested Fishing Pool</Text>
      </TouchableGradient>
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
    color: BLUE_FONT,
    fontSize: 20,
    textAlign: 'center'
  }
});

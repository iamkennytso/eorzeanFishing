import { useState, useContext } from 'react';
import { StyleSheet, Text, Image, ScrollView, View  } from 'react-native';
import { subtitleStyles, titleStyles } from '../styles/styles'
import { UserContext } from '../util/context';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { BLUE_FONT } from '../styles/variables';

const fisherClassJobIdx = 30
export default function ProfileView() {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext)
  const { avatarUrl, name, server, level} = user || {};
  return <ScrollView>
    <Text style={titleStyles}>Angler Profile</Text>
    <View style={styles.avatarContainer}>
      <Image source={avatarUrl ? { uri: avatarUrl } : require('../assets/misc/defaultAvatar.jpg')}></Image>
      <View style={styles.iconContainer}>
        <Icon 
          name='edit'
          size={36}
          color={BLUE_FONT}
        />
        <Icon 
          name='autorenew'
          size={36}
          color={BLUE_FONT}
        />
      </View>
    </View>
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
  hyperlink: {
    color: 'white',
    textDecorationLine: 'underline'
  }
});

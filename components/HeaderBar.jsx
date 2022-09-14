import { View, StyleSheet, Text, Image } from 'react-native';
import { ABOUT_VIEW, PROFILE_VIEW } from '../const/views';
import TouchableGradient from '../components/TouchableGradient';
import { BLUE_FONT } from '../styles/variables';

export default function HeaderBar({ navigation }) {
  return <View style={styles.headerBar}>
    <TouchableGradient 
      customGradientStyles={{ width: 22, marginRight: 8 }}
      onPress={() => navigation.navigate(PROFILE_VIEW)}
    >
      <Image style={styles.profileIcon} source={require('../assets/misc/profileIcon.png')} />
    </TouchableGradient>
    <TouchableGradient 
      customGradientStyles={{ width: 22 }}
      onPress={() => navigation.navigate(ABOUT_VIEW)}
    >
      <Text style={styles.infoText}>ⓘ</Text>
    </TouchableGradient>
  </View>
}

const styles = StyleSheet.create({
  headerBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '90%'
  },
  profileIcon: {
    height: 22,
    width: 22
  },
  infoText: {
    fontSize: 20,
    color: BLUE_FONT
  },
});

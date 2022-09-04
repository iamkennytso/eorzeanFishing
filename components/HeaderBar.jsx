import { View, StyleSheet, Text  } from 'react-native';
import { ABOUT_VIEW } from '../const/views';
import TouchableGradient from '../components/TouchableGradient';
import { BLUE_FONT } from '../styles/variables';

export default function HeaderBar({ navigation }) {
  return <View style={styles.headerBar}>
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
    alignItems: 'flex-end',
    width: '90%'
  },
  infoText: {
    fontSize: 20,
    color: BLUE_FONT
  },
});

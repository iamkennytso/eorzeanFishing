import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableHighlight } from 'react-native';

export default TouchableGradient = ({ children, onPress, customHighlightStyles = {}, customGradientStyles = {} }) => (
  <TouchableHighlight styles={{ ...styles.highlight, ...customHighlightStyles }} onPress={onPress} underlayColor='#5150C6' >
    <LinearGradient style={{...styles.gradient, ...customGradientStyles}} colors={['#312CD6', '#2920BD']}>
      {children}
    </LinearGradient>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  highlight: {
    borderRadius: 15,
    borderWidth: 1,
    overflow: 'hidden'
  },
  gradient: {
    width: '100%',
    borderRadius: 15,
    borderWidth: 1
  }
})

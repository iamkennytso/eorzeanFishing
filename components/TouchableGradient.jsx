import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableHighlight } from 'react-native';

export default TouchableGradient = ({ children, onPress, onLongPress = () => null, customHighlightStyles = {}, customGradientStyles = {}, gradientColors = ['#312CD6', '#2920BD'] }) => (
  <TouchableHighlight style={{ ...styles.highlight, ...customHighlightStyles }} onPress={onPress} onLongPress={onLongPress} underlayColor='#5150C6' >
    <LinearGradient style={{...styles.gradient, ...customGradientStyles}} colors={gradientColors}>
      {children}
    </LinearGradient>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  highlight: {
    borderRadius: 15,
  },
  gradient: {
    width: '100%',
    borderRadius: 15,
    borderWidth: 1
  }
})

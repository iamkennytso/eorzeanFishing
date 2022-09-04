import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { BLUE_GRADIENT_COLORS, TOUCHABLE_UNDERLAY_COLOR } from '../styles/variables';

export default TouchableGradient = ({ children, onPress, onLongPress = () => null, customHighlightStyles = {}, customGradientStyles = {}, gradientColors = BLUE_GRADIENT_COLORS }) => (
  <TouchableHighlight style={{ ...styles.highlight, ...customHighlightStyles }} onPress={onPress} onLongPress={onLongPress} underlayColor={TOUCHABLE_UNDERLAY_COLOR} >
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

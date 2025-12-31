import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { THEME } from '../styles/themes';
import { PRIMARY } from '../styles/variables';
import { UserContext } from '../util/context';

const TouchableGradient = ({ children, onPress, onLongPress = () => null, customHighlightStyles = {}, customGradientStyles = {}, gradientVariant = PRIMARY }) => {
  const { theme } = useContext(UserContext);
  const gradientColors = THEME[theme][`${gradientVariant}_GRADIENT`];

  return <TouchableHighlight style={{ ...styles.highlight, ...customHighlightStyles }} onPress={onPress} onLongPress={onLongPress} underlayColor={THEME[theme].TOUCHABLE_UNDERLAY}>
    <LinearGradient style={{...styles.gradient, ...customGradientStyles}} colors={gradientColors}>
      {children}
    </LinearGradient>
  </TouchableHighlight>
}

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

export default TouchableGradient;

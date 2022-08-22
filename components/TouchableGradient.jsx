import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export default TouchableGradient = ({ children, customStyles = {} }) => (
  <LinearGradient style={{...styles.areaContainer, ...customStyles}} colors={['#312CD6', '#2920BD']}>
    {children}
  </LinearGradient>
)

const styles = StyleSheet.create({
  areaContainer: {
    width: '100%',
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5
  }
})
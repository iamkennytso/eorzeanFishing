import { useContext } from 'react';
import { Text } from 'react-native';
import { THEME } from '../styles/themes';
import { UserContext } from '../util/context';

export default ThemedText = ({ children, style = {} }) => {
  const { theme } = useContext(UserContext)
  return <Text style={{ color: THEME[theme].FONT, ...style }}>
    {children}
  </Text>
}
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { THEME } from '../styles/themes';
import { UserContext } from '../util/context';

export default ThemedDropdown = ({ dataArray, onSelect, selected, defaultText, buttonTextFunction, rowTextFunction }) => {
  const { theme } = useContext(UserContext)
  return <View style={styles.dropdownContainer}>
    <SelectDropdown
      buttonStyle={{...styles.serverDropdown, borderColor: THEME[theme].FONT }}
      buttonTextStyle={{...styles.serverText, color: THEME[theme].FONT}}
      data={dataArray}
      defaultButtonText={selected || defaultText}
      onSelect={onSelect}
      buttonTextAfterSelection={buttonTextFunction ? buttonTextFunction : () => selected}
      rowTextForSelection={rowTextFunction ? rowTextFunction : item => item}
    />
  </View>
}

const styles = StyleSheet.create({
  dropdownContainer: {
    width: '100%',
    padding: 10
  },
  serverDropdown: {
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  serverText: {
    textAlign: 'left',
    fontSize: 20
  }
});

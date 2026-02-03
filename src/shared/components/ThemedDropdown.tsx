import React from 'react';
import { StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useTheme } from '@store/appStore';
import { themes } from '@features/theme/themes';

interface ThemedDropdownProps<T> {
  dataArray: T[];
  onSelect: (selectedItem: T, index: number) => void;
  selected: T;
  defaultText: string;
  buttonTextFunction: (item: T) => string;
  rowTextFunction: (item: T) => string;
  accessibilityLabel?: string;
}

function ThemedDropdown<T>({
  dataArray,
  onSelect,
  selected,
  defaultText,
  buttonTextFunction,
  rowTextFunction,
  accessibilityLabel,
}: ThemedDropdownProps<T>) {
  const theme = useTheme();
  const currentTheme = themes[theme];

  return (
    <SelectDropdown
      data={dataArray}
      onSelect={onSelect}
      defaultValue={selected}
      defaultButtonText={defaultText}
      buttonTextAfterSelection={buttonTextFunction}
      rowTextForSelection={rowTextFunction}
      buttonStyle={{
        ...styles.dropdownButton,
        backgroundColor: currentTheme.BACKGROUND,
        borderColor: currentTheme.BORDER,
      }}
      buttonTextStyle={{
        color: currentTheme.FONT,
        fontSize: 16,
      }}
      rowStyle={{
        backgroundColor: currentTheme.BACKGROUND,
      }}
      rowTextStyle={{
        color: currentTheme.FONT,
      }}
      dropdownStyle={{
        backgroundColor: currentTheme.BACKGROUND,
        borderColor: currentTheme.BORDER,
      }}
      accessible={true}
      accessibilityLabel={accessibilityLabel || 'Dropdown selector'}
      accessibilityRole="button"
    />
  );
}

const styles = StyleSheet.create({
  dropdownButton: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
  },
});

export default ThemedDropdown;

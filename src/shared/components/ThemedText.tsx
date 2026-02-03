import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@store/appStore';
import { themes } from '@features/theme/themes';

interface ThemedTextProps extends TextProps {
  children: React.ReactNode;
}

const ThemedText: React.FC<ThemedTextProps> = ({ style, children, ...props }) => {
  const theme = useTheme();
  const currentTheme = themes[theme];

  return (
    <Text
      style={[styles.text, { color: currentTheme.FONT }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ThemedText;

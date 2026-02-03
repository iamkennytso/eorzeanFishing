import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useTheme } from '@store/appStore';
import { themes } from '@features/theme/themes';
import ThemedText from './ThemedText';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'large';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message,
  size = 'large',
}) => {
  const theme = useTheme();
  const currentTheme = themes[theme];

  return (
    <View style={styles.container} accessible={true} accessibilityLabel={message || 'Loading'}>
      <ActivityIndicator size={size} color={currentTheme.FONT} />
      {message && <ThemedText style={styles.message}>{message}</ThemedText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoadingSpinner;

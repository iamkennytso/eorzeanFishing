import React from 'react';
import { View, StyleSheet } from 'react-native';
import ThemedText from './ThemedText';
import TouchableGradient from './TouchableGradient';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
  retryLabel = 'Try Again',
}) => {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.errorIcon}>⚠️</ThemedText>
      <ThemedText style={styles.message}>{message}</ThemedText>
      {onRetry && (
        <TouchableGradient
          onPress={onRetry}
          customGradientStyles={styles.button}
          accessibilityLabel={retryLabel}
          accessibilityHint="Retries the failed operation"
        >
          <ThemedText style={styles.buttonText}>{retryLabel}</ThemedText>
        </TouchableGradient>
      )}
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
  errorIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    minWidth: 150,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ErrorMessage;

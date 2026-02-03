import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import ThemedText from './ThemedText';
import TouchableGradient from './TouchableGradient';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <View style={styles.container}>
          <ThemedText style={styles.title}>Something went wrong</ThemedText>
          <ThemedText style={styles.message}>
            {this.state.error?.message || 'An unexpected error occurred'}
          </ThemedText>
          <TouchableGradient
            onPress={this.handleReset}
            customGradientStyles={styles.button}
            accessibilityLabel="Try again"
            accessibilityHint="Resets the error and tries to reload the screen"
          >
            <ThemedText style={styles.buttonText}>Try Again</ThemedText>
          </TouchableGradient>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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

export default ErrorBoundary;

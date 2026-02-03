import { StyleSheet } from 'react-native';

// Common text styles
export const titleStyles = {
  fontSize: 32,
  fontWeight: 'bold' as const,
  textAlign: 'center' as const,
  marginTop: 20,
  fontFamily: 'ffFont',
};

export const subtitleStyles = {
  fontSize: 24,
  fontWeight: '600' as const,
  marginTop: 20,
  marginBottom: 10,
};

export const fontColorStyle = {
  fontSize: 16,
};

// Common container styles
export const tilesContainer = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  justifyContent: 'space-between' as const,
  marginTop: 10,
};

export const tileContainer = {
  width: '48%',
  marginBottom: 15,
};

export const tileContentContainer = {
  flexDirection: 'column' as const,
  alignItems: 'center' as const,
  padding: 10,
};

export const tileText = {
  fontSize: 14,
  textAlign: 'center' as const,
  marginTop: 8,
};

export const customTileGradient = {
  padding: 10,
  minHeight: 100,
  justifyContent: 'center' as const,
};

export const customLinkGradient = {
  padding: 5,
  borderRadius: 8,
};

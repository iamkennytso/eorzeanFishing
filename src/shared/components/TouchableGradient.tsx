import React from 'react';
import { TouchableHighlight, StyleSheet, ViewStyle, AccessibilityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@store/appStore';
import { themes } from '@features/theme/themes';
import { GradientVariant } from '@features/theme/themes';

interface TouchableGradientProps extends AccessibilityProps {
  children: React.ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  customHighlightStyles?: ViewStyle;
  customGradientStyles?: ViewStyle;
  gradientVariant?: GradientVariant;
  disabled?: boolean;
}

const TouchableGradient: React.FC<TouchableGradientProps> = ({
  children,
  onPress,
  onLongPress,
  customHighlightStyles = {},
  customGradientStyles = {},
  gradientVariant = GradientVariant.PRIMARY,
  disabled = false,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = 'button',
  ...accessibilityProps
}) => {
  const theme = useTheme();
  const currentTheme = themes[theme];
  const gradientColors = currentTheme[`${gradientVariant}_GRADIENT`];

  return (
    <TouchableHighlight
      style={[styles.highlight, customHighlightStyles]}
      onPress={onPress}
      onLongPress={onLongPress}
      underlayColor={currentTheme.TOUCHABLE_UNDERLAY}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole}
      {...accessibilityProps}
    >
      <LinearGradient
        style={[styles.gradient, customGradientStyles]}
        colors={gradientColors}
      >
        {children}
      </LinearGradient>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  highlight: {
    borderRadius: 15,
  },
  gradient: {
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
  },
});

export default TouchableGradient;

import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, SCREENS } from '@types/navigation';
import TouchableGradient from './TouchableGradient';
import ThemedText from './ThemedText';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HeaderBar: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.headerBar}>
      <TouchableGradient
        customGradientStyles={{ width: 22, marginRight: 8 }}
        onPress={() => navigation.navigate(SCREENS.PROFILE_VIEW)}
        accessibilityLabel="Profile"
        accessibilityHint="Navigate to your angler profile"
      >
        <Image
          style={styles.profileIcon}
          source={require('../../../assets/misc/profileIcon.png')}
          accessible={false}
        />
      </TouchableGradient>
      <TouchableGradient
        customGradientStyles={{ width: 22 }}
        onPress={() => navigation.navigate(SCREENS.ABOUT_VIEW)}
        accessibilityLabel="About"
        accessibilityHint="View information about this app"
      >
        <ThemedText style={styles.infoText}>ⓘ</ThemedText>
      </TouchableGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '90%',
  },
  profileIcon: {
    height: 22,
    width: 22,
  },
  infoText: {
    fontSize: 20,
  },
});

export default HeaderBar;

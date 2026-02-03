import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Fish, Pool, Bait } from './index';

// Screen names
export const SCREENS = {
  REGION_SELECT: 'RegionSelect',
  AREA_SELECT: 'AreaSelect',
  POOL_VIEW: 'PoolView',
  FISH_VIEW: 'FishView',
  BAIT_VIEW: 'BaitView',
  FISH_GUIDE: 'FishGuide',
  ABOUT_VIEW: 'AboutView',
  PROFILE_VIEW: 'ProfileView',
  PROFILE_SEARCH: 'ProfileSearch',
} as const;

// Navigation param list with proper types
export type RootStackParamList = {
  [SCREENS.REGION_SELECT]: undefined;
  [SCREENS.AREA_SELECT]: { region: string };
  [SCREENS.POOL_VIEW]: { poolData: Pool };
  [SCREENS.FISH_VIEW]: { fish: Fish };
  [SCREENS.BAIT_VIEW]: { bait: Bait };
  [SCREENS.FISH_GUIDE]: undefined;
  [SCREENS.ABOUT_VIEW]: undefined;
  [SCREENS.PROFILE_VIEW]: undefined;
  [SCREENS.PROFILE_SEARCH]: undefined;
};

// Screen props helper types
export type RegionSelectScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREENS.REGION_SELECT
>;

export type AreaSelectScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREENS.AREA_SELECT
>;

export type PoolViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREENS.POOL_VIEW
>;

export type FishViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREENS.FISH_VIEW
>;

export type BaitViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREENS.BAIT_VIEW
>;

export type ProfileViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREENS.PROFILE_VIEW
>;

export type ProfileSearchScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREENS.PROFILE_SEARCH
>;

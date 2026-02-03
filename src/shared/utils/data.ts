import { Fish, Pool, Bait } from '@types/index';
import rawFishesData from '../../data/fishes';
import rawPoolsData from '../../data/pools';
import rawBaitsData from '../../data/baits';
import { regions, areas, poolTypes } from '../../data/locations';
import { poolLevelToIdToFish as rawPoolLevelToIdToFish } from '../../data/pools';

// Type-safe wrappers for existing data
export const fishesData: Record<number, Fish> = rawFishesData as Record<number, Fish>;
export const poolsData: Record<number, Pool> = rawPoolsData as Record<number, Pool>;
export const baitsData: Record<number, Bait> = rawBaitsData as Record<number, Bait>;
export const locationsData = { regions, areas, poolTypes };
export const poolLevelToIdToFish = rawPoolLevelToIdToFish;

// Helper functions
export const getFishById = (id: number): Fish | undefined => fishesData[id];
export const getPoolById = (id: number): Pool | undefined => poolsData[id];
export const getBaitById = (id: number): Bait | undefined => baitsData[id];

export const isBait = (id: number): boolean => !!baitsData[id];
export const isFish = (id: number): boolean => !!fishesData[id];

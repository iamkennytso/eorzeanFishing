// Re-export with the old naming convention for backward compatibility
export { default as baitsData, baitProcure } from './baits';
export { default as fishesData, fishIdxToId } from './fishes';
export { regions as regionsData, areas as areasData, poolTypes } from './locations';
export { default as poolsData, poolLevelToIdToFish } from './pools';
export { default as servers } from './servers';

// Also export named exports for direct use
export { default as fishes } from './fishes';
export { default as pools } from './pools';
export { default as baits } from './baits';
export { regions, areas } from './locations';

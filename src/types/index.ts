// Core domain types
export interface Fish {
  id: number;
  name: string;
  level: number;
  description: string;
  pools: number[];
  baits: number[];
  mooches?: number[];
  iconURL: string;
}

export interface Pool {
  id: number;
  name: string;
  fish: number[];
  image: string;
  level: number;
  type: PoolType;
}

export enum PoolType {
  Freshwater = 0,
  Saltwater = 1,
  Dunefishing = 2,
  Cloudfishing = 3,
}

export interface Bait {
  id: number;
  name: string;
  source: string;
  description: string;
  iconURL: string;
  level: number;
  acquisition: string[];
  fishes: number[];
}

export interface Region {
  name: string;
  areas: Record<string, number[]>; // area name -> pool IDs
}

export interface UserData {
  avatarUrl: string;
  id: number;
  level: number;
  name: string;
  server: string;
}

export type CaughtFish = Record<number, boolean>;

export enum ThemeName {
  DARK = 'dark_theme',
  LIGHT = 'light_theme',
  CLASSIC = 'classic_theme',
}

export interface Theme {
  FONT: string;
  BACKGROUND: string;
  BORDER: string;
  TOUCHABLE_UNDERLAY: string;
  PRIMARY_GRADIENT: string[];
  SECONDARY_GRADIENT: string[];
}

// API Response types
export interface XIVAPICharacterResponse {
  Character: {
    Avatar: string;
    ID: number;
    Name: string;
    Server: string;
    ClassJobs: Array<{
      ClassID: number;
      Level: number;
    }>;
  };
}

// Constants
export const FISHER_CLASS_ID = 18;

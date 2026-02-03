import axios from 'axios';
import { XIVAPICharacterResponse, UserData, FISHER_CLASS_ID } from '@types/index';

const XIVAPI_BASE_URL = 'https://xivapi.com';

export class XIVAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'XIVAPIError';
  }
}

export const fetchCharacterData = async (
  lodestoneId: number
): Promise<UserData> => {
  try {
    const response = await axios.get<XIVAPICharacterResponse>(
      `${XIVAPI_BASE_URL}/character/${lodestoneId}`,
      {
        timeout: 10000, // 10 second timeout
      }
    );

    const { Character } = response.data;

    if (!Character) {
      throw new XIVAPIError('Character data not found', 404);
    }

    const fisherJob = Character.ClassJobs.find(
      (job) => job.ClassID === FISHER_CLASS_ID
    );

    if (!fisherJob) {
      throw new XIVAPIError(
        'Fisher class not unlocked for this character',
        400
      );
    }

    return {
      avatarUrl: Character.Avatar,
      id: Character.ID,
      level: fisherJob.Level,
      name: Character.Name,
      server: Character.Server,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new XIVAPIError('Request timed out. Please try again.', 408, error);
      }
      if (error.response?.status === 404) {
        throw new XIVAPIError('Character not found. Please check the Lodestone ID.', 404, error);
      }
      if (!error.response) {
        throw new XIVAPIError('Network error. Please check your connection.', 0, error);
      }
      throw new XIVAPIError(
        'Failed to fetch character data',
        error.response?.status,
        error
      );
    }

    if (error instanceof XIVAPIError) {
      throw error;
    }

    throw new XIVAPIError('An unexpected error occurred', 500, error);
  }
};

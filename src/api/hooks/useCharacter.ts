import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCharacterData, XIVAPIError } from '../xivapi';
import { useSetUser } from '@store/appStore';

const QUERY_KEY = 'character';

export const useCharacter = (lodestoneId: number | null) => {
  return useQuery({
    queryKey: [QUERY_KEY, lodestoneId],
    queryFn: () => fetchCharacterData(lodestoneId!),
    enabled: !!lodestoneId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error) => {
      // Don't retry on 404 or client errors
      if (error instanceof XIVAPIError && error.statusCode && error.statusCode < 500) {
        return false;
      }
      return failureCount < 2;
    },
  });
};

export const useRefreshCharacter = () => {
  const queryClient = useQueryClient();
  const setUser = useSetUser();

  return useMutation({
    mutationFn: (lodestoneId: number) => fetchCharacterData(lodestoneId),
    onSuccess: (data) => {
      setUser(data);
      queryClient.setQueryData([QUERY_KEY, data.id], data);
    },
  });
};

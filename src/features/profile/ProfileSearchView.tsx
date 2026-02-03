import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  ScrollView,
  View,
  Image,
  Keyboard,
} from 'react-native';
import { ProfileSearchScreenProps } from '@types/navigation';
import { useUser, useTheme } from '@store/appStore';
import { useRefreshCharacter } from '@api/hooks/useCharacter';
import { themes } from '@features/theme/themes';
import { ThemedText, TouchableGradient, ThemedDropdown, LoadingSpinner, ErrorMessage } from '@components/index';
import axios from 'axios';

// Import servers data
import { servers } from '../../data/servers';

interface SearchCandidate {
  Avatar: string;
  ID: number;
  Name: string;
  Server: string;
}

export default function ProfileSearchView({}: ProfileSearchScreenProps) {
  const user = useUser();
  const theme = useTheme();
  const currentTheme = themes[theme];

  const [loadingCandidates, setLoadingCandidates] = useState(false);
  const [selectedCandidateIdx, setSelectedCandidateIdx] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [server, setServer] = useState<string>();
  const [candidates, setCandidates] = useState<SearchCandidate[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const { mutate: selectCharacter, isPending: isSelectingCharacter } = useRefreshCharacter();

  const searchForCandidates = async () => {
    Keyboard.dismiss();

    if (loadingCandidates) return;

    if (!name.trim()) {
      return setErrorMessage('Please enter a name');
    }

    setLoadingCandidates(true);
    setErrorMessage('');
    setCandidates([]);

    try {
      const serverQuery = server ? `&server=${server}` : '';
      const response = await axios.get(
        `https://xivapi.com/character/search?name=${encodeURIComponent(name)}${serverQuery}`,
        { timeout: 10000 }
      );

      const { data } = response;

      if (data.Pagination.PageNext) {
        setErrorMessage('Too many results. Please be more specific or select a server.');
      } else if (data.Results.length === 0) {
        setErrorMessage('No characters found. Try a different name or server.');
      } else {
        setCandidates(data.Results);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          setErrorMessage('Search timed out. Please try again.');
        } else if (!error.response) {
          setErrorMessage('Network error. Please check your connection.');
        } else {
          setErrorMessage('Failed to search for characters. Please try again.');
        }
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
      console.error('Search error:', error);
    } finally {
      setLoadingCandidates(false);
    }
  };

  const handleCandidatePress = (lodestoneId: number, candidateIdx: number) => {
    if (isSelectingCharacter) return;

    setSelectedCandidateIdx(candidateIdx);
    selectCharacter(lodestoneId, {
      onSettled: () => {
        setSelectedCandidateIdx(null);
      },
    });
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Angler Search</ThemedText>

      <TextInput
        style={[
          styles.inputBox,
          { color: currentTheme.FONT, borderColor: currentTheme.FONT },
        ]}
        onChangeText={setName}
        value={name}
        placeholder="Enter character name"
        placeholderTextColor={`${currentTheme.FONT}80`}
        accessible={true}
        accessibilityLabel="Character name input"
        accessibilityHint="Enter the name of the character to search for"
      />

      <View style={styles.dropdownContainer}>
        <ThemedDropdown
          dataArray={servers}
          onSelect={(selectedServer) => setServer(selectedServer)}
          selected={server}
          defaultText="Select a Server (Optional)"
          buttonTextFunction={(s) => s}
          rowTextFunction={(s) => s}
          accessibilityLabel="Server selector"
        />
      </View>

      <View style={styles.searchButtonContainer}>
        <TouchableGradient
          onPress={searchForCandidates}
          disabled={loadingCandidates}
          accessibilityLabel="Search button"
          accessibilityHint="Searches for characters matching the entered name"
        >
          <ThemedText style={styles.searchButtonText}>Search</ThemedText>
        </TouchableGradient>
      </View>

      <View style={styles.dividerContainer}>
        <View style={[styles.divider, { backgroundColor: currentTheme.FONT }]} />
      </View>

      <ScrollView style={styles.resultsContainer}>
        {errorMessage && !loadingCandidates && (
          <ThemedText style={styles.errorText}>{errorMessage}</ThemedText>
        )}

        {loadingCandidates ? (
          <LoadingSpinner message="Searching for characters..." />
        ) : (
          candidates.map((candidate, candidateIdx) => {
            const { Avatar, ID, Name, Server } = candidate;
            const isCurrentUser = user?.id === ID;
            const isSelecting = selectedCandidateIdx === candidateIdx;

            return (
              <View style={styles.candidateContainer} key={ID}>
                <TouchableGradient
                  customGradientStyles={{ padding: 10 }}
                  onPress={() => handleCandidatePress(ID, candidateIdx)}
                  disabled={isSelectingCharacter}
                  accessibilityLabel={`${Name} on ${Server}`}
                  accessibilityHint={
                    isCurrentUser
                      ? 'This is your current character'
                      : 'Select this character'
                  }
                  accessibilityState={{ selected: isCurrentUser }}
                >
                  <View style={styles.candidateContentContainer}>
                    <View style={styles.candidatesContentLeftContainer}>
                      <Image
                        style={styles.candidateAvatar}
                        source={{ uri: Avatar }}
                        accessible={false}
                      />
                      <ThemedText style={styles.candidateText}>
                        {Name} - {Server}
                      </ThemedText>
                    </View>
                    <View style={styles.statusIndicator}>
                      {isSelecting && <LoadingSpinner size="small" />}
                      {isCurrentUser && (
                        <Image
                          style={styles.currentUserIndicator}
                          source={require('../../../assets/misc/confirmationBadge.png')}
                          accessible={true}
                          accessibilityLabel="Current user indicator"
                        />
                      )}
                    </View>
                  </View>
                </TouchableGradient>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'ffFont',
  },
  inputBox: {
    margin: 10,
    padding: 15,
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 10,
  },
  dropdownContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchButtonContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  searchButtonText: {
    padding: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  dividerContainer: {
    padding: 5,
  },
  divider: {
    height: 3,
    borderRadius: 3,
    width: '100%',
    marginBottom: 10,
  },
  resultsContainer: {
    flex: 1,
  },
  errorText: {
    fontSize: 18,
    color: '#FF6B6B',
    textAlign: 'center',
    padding: 20,
  },
  candidateContainer: {
    padding: 10,
  },
  candidateContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  candidatesContentLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  candidateAvatar: {
    height: 32,
    width: 32,
    marginRight: 10,
    borderRadius: 16,
  },
  candidateText: {
    fontSize: 16,
    flex: 1,
  },
  statusIndicator: {
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentUserIndicator: {
    height: 24,
    width: 24,
  },
});

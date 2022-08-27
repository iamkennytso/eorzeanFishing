import { View, StyleSheet, Text, ScrollView  } from 'react-native';

export default function FishGuide({ navigation }) {
  return <>
    <ScrollView styles={styles.regionsContainer}>
      <View style={styles.header}>
        <Text>HelloWorld</Text>
      </View>
    </ScrollView>
  </>
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'sans-serif-condensed'
  },
  regionContainer: {
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 15
  },
  regionGradient: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
  }
});

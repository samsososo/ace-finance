import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.background}>
      <Text>Welcome to Ace Finance</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default App;

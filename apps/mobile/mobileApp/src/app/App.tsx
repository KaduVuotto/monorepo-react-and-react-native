import { store } from '@shared/store';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

export const App = () => {
  return (
    <>
      <SafeAreaView />
      <View>
        <Text style={styles.textLg}>Welcome Mobile</Text>
        <Text style={styles.textLg}>
          {'Vindo do modulo shared -> ' + store()}
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  textLg: {
    fontSize: 24,
    padding: 24,
  },
});

export default App;

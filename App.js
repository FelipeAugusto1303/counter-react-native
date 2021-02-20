import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountScreen from './components/CountScreen'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import AllReducers from './reducers'

const store = createStore(AllReducers)

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CountScreen/>
      </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

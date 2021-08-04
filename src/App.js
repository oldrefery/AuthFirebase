import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <SafeAreaView>
      <Header title={'Authorisation'} />
      <Text>App</Text>
    </SafeAreaView>
  );
};

export default App;

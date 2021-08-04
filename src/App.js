import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import firebase from 'firebase';

import Header from './components/Header';

const firebaseConfig = {
  apiKey: 'AIzaSyDW6f7kE7KGQRpkQt3ZjPDe1cgylxReCik',
  authDomain: 'authentification-7b3b3.firebaseapp.com',
  projectId: 'authentification-7b3b3',
  storageBucket: 'authentification-7b3b3.appspot.com',
  messagingSenderId: '715415067738',
  appId: '1:715415067738:web:c0628c292a7bad099f8c63',
};

const App = () => {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);
  return (
    <SafeAreaView>
      <Header title={'Authorisation'} />
      <Text>App</Text>
    </SafeAreaView>
  );
};

export default App;

import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';

import Input from './Input';
import Spinner from './Spinner';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setError('');
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess)
      .catch(() =>
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(onLoginSuccess)
          .catch(onLoginFail),
      );
  };

  const onLoginSuccess = () => {
    setError('');
    setIsLoading(false);
    setEmail('');
    setPassword('');
  };

  const onLoginFail = () => {
    setError('Authentication Failed');
    setIsLoading(false);
  };

  const renderButton = () => {
    return (
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={handleLogin}
          disabled={isLoading}>
          {isLoading ? (
            <Spinner />
          ) : (
            <Text style={styles.titleButton}>Log In</Text>
          )}
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Input
          title={'EMail'}
          placeholder={'user@gmail.com'}
          value={email}
          setValue={setEmail}
        />
      </View>
      <View style={styles.section}>
        <Input
          title={'Password'}
          placeholder={'password'}
          value={password}
          setValue={setPassword}
          secure
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {renderButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  section: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 5,
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  titleButton: {
    fontSize: 18,
    color: 'white',
  },
  error: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default LoginForm;

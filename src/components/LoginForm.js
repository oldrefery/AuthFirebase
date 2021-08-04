import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import Input from './Input';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Input
          title={'Login'}
          placeholder={'Type e-mail'}
          value={name}
          setValue={setName}
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
      <View style={styles.section}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.titleButton}>Log In</Text>
        </Pressable>
      </View>
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
});

export default LoginForm;

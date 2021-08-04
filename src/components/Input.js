import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({title, placeholder, value, setValue, secure = false}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secure}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  title: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  input: {
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
});

export default Input;

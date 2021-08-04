import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({title, placeholder, value, setValue}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginRight: 10,
  },
  input: {
    height: 20,
    width: 100,
  },
});

export default Input;

import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Spinner = ({size = 'large'}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Spinner;

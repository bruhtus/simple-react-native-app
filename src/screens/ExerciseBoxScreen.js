import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ExerciseBoxScreen = () => {
  return (
    <View style={styles.viewParentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewParentStyle: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
  },
  viewTwoStyle: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    // TODO: figure out how to use other props value (height value in this case)
    marginTop: 50,
  },
  viewThreeStyle: {
    backgroundColor: 'purple',
    height: 50,
    width: 50,
  },
});

export default ExerciseBoxScreen;

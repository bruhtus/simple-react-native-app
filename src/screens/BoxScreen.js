import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>
        Child #1
      </Text>
      <Text style={styles.textTwoStyle}>
        Child #2
      </Text>
      <Text style={styles.textThreeStyle}>
        Child #3
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    borderWidth: 3,
    borderColor: 'black',
    // alignItems: 'center',
    // flexDirection: 'row',
    justifyContent: 'center',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // the options below can be condensed into `margin`
    // marginVertical: 20,
    // marginHorizontal: 20,
    // margin: 20,
    // flex: 4,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'yellow',
    // the options below can be condensed into `margin`
    // marginVertical: 20,
    // marginHorizontal: 20,
    // margin: 20,
    // flex: 4,
    // alignSelf: 'center',
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // Note: the element below is equvalent to 5 element above (position, top, etc)
    ...StyleSheet.absoluteFillObject
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // the options below can be condensed into `margin`
    // marginVertical: 20,
    // marginHorizontal: 20,
    // margin: 20,
    // flex: 2,
  }
});

export default BoxScreen;

import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// number to increase or decrease
const setNum = 1;

const reducer = (state, action) => {
  // Note: state === {counter: number}
  // Note: action === {type: 'increase' || 'decrease', payload: setNum}

  switch (action.type) {
    case 'increase':
      return {...state, counter: state.counter + action.payload};
    case 'decrease':
      return state.counter + action.payload < 0 ?
        state :
        {...state, counter: state.counter + action.payload};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  const counter = state.counter;

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => dispatch({
          type: 'increase',
          payload: setNum
        })}
      />
      <Button
        title='Decrease'
        onPress={() => dispatch({
          type: 'decrease',
          payload: -1 * setNum
        })}
      />
      <Text>
        Current Count: {counter}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default CounterScreen;

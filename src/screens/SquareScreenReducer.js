import React, {useReducer} from 'react'
import {View, StyleSheet, Button} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const INCREMENT_COLOR = 15;

const reducer = (state, action) => {
  // Note: state === {red: number, green: number, blue: number}
  // Note: action === {colorToChange: 'red' || 'green' || 'blue', amount: +INCREMENT_COLOR || -INCREMENT_COLOR}
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0 ?
        state :
        {...state, red: state.red + action.amount};
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0 ?
        state :
        {...state, green: state.green + action.amount};
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0 ?
        state :
        {...state, blue: state.blue + action.amount};
    default:
      // need to return something from reducer so that `state` didn't become undefined
      return state;
  }
};

const SquareScreen = () => {
  // Note: dispatch pass on argument as action argument for reducer function above
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;

  // console.log(blue)

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease = {() => dispatch({
          colorToChange: 'red',
          amount: INCREMENT_COLOR
        })}
        onDecrease = {() => dispatch({
          colorToChange: 'red',
          amount: -1 * INCREMENT_COLOR
        })}
      />
      <ColorCounter
        color='Green'
        onIncrease = {() => dispatch({
          colorToChange: 'green',
          amount: INCREMENT_COLOR
        })}
        onDecrease = {() => dispatch({
          colorToChange: 'green',
          amount: -1 * INCREMENT_COLOR
        })}
      />
      <ColorCounter
        color='Blue'
        onIncrease = {() => dispatch({
          colorToChange: 'blue',
          amount: INCREMENT_COLOR
        })}
        onDecrease = {() => dispatch({
          colorToChange: 'blue',
          amount: -1 * INCREMENT_COLOR
        })}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default SquareScreen;

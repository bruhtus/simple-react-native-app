import React, {useReducer} from 'react'
import {View, StyleSheet, Button} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const INCREMENT_COLOR = 15;

const reducer = (state, action) => {
  // Note: state === {red: number, green: number, blue: number}
  // Note: action === {type: 'change_red' || 'change_green' || 'change_blue', payload: +INCREMENT_COLOR || -INCREMENT_COLOR}
  // Note: type is string that describes the exact change operation we want to make
  // Note: payload is some data that is critical to the change operation

  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0 ?
        state :
        {...state, red: state.red + action.payload};
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0 ?
        state :
        {...state, green: state.green + action.payload};
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0 ?
        state :
        {...state, blue: state.blue + action.payload};
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
          type: 'change_red',
          payload: INCREMENT_COLOR
        })}
        onDecrease = {() => dispatch({
          type: 'change_red',
          payload: -1 * INCREMENT_COLOR
        })}
      />
      <ColorCounter
        color='Green'
        onIncrease = {() => dispatch({
          type: 'change_green',
          payload: INCREMENT_COLOR
        })}
        onDecrease = {() => dispatch({
          type: 'change_green',
          payload: -1 * INCREMENT_COLOR
        })}
      />
      <ColorCounter
        color='Blue'
        onIncrease = {() => dispatch({
          type: 'change_blue',
          payload: INCREMENT_COLOR
        })}
        onDecrease = {() => dispatch({
          type: 'change_blue',
          payload: -1 * INCREMENT_COLOR
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

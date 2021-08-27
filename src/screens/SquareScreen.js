import React, {useState} from 'react'
import {View, StyleSheet, Button} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const INCREMENT_COLOR = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // console.log(blue)

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +INCREMENT_COLOR, -INCREMENT_COLOR

    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ?
          null :
          setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ?
          null :
          setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ?
          null :
          setBlue(blue + change);
        return;
      default:
        return;
    }

  };

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease = {() => {
          setColor('red', INCREMENT_COLOR)
        }}
        onDecrease = {() => {
          setColor('red', -1 * INCREMENT_COLOR)
        }}
      />
      <ColorCounter
        color='Green'
        onIncrease = {() => {
          setColor('green', INCREMENT_COLOR)
        }}
        onDecrease = {() => {
          setColor('green', -1 * INCREMENT_COLOR)
        }}
      />
      <ColorCounter
        color='Blue'
        onIncrease = {() => {
          setColor('blue', INCREMENT_COLOR)
        }}
        onDecrease = {() => {
          setColor('blue', -1 * INCREMENT_COLOR)
        }}
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

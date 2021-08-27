import React, {useState} from 'react'
import {View, StyleSheet, Button} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const INCREMENT_COLOR = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red)

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease = {() => {
          setRed(red + INCREMENT_COLOR)
        }}
        onDecrease = {() => {
          setRed(red - INCREMENT_COLOR)
        }}
      />
      <ColorCounter
        color='Green'
        onIncrease = {() => {
          setGreen(green + INCREMENT_COLOR)
        }}
        onDecrease = {() => {
          setGreen(green - INCREMENT_COLOR)
        }}
      />
      <ColorCounter
        color='Blue'
        onIncrease = {() => {
          setBlue(blue + INCREMENT_COLOR)
        }}
        onDecrease = {() => {
          setBlue(blue - INCREMENT_COLOR)
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

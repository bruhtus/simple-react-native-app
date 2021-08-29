import React from "react";
import {Text, StyleSheet, View, Button} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.headerStyle}>
        Welcome!
      </Text>
      <Button
        title='Go to Counter (using useState) Demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to Counter (using useReducer) Demo'
        onPress={() => navigation.navigate('CounterReducer')}
      />
      <Button
        title='Go to Color Generator Demo'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to Square Color (using useState) Demo'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='Go to Square Color (using useReducer) Demo'
        onPress={() => navigation.navigate('SquareReducer')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 30
  }
});

export default HomeScreen;

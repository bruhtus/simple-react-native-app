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
      <Button
        title='Go to Text Demo'
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title='Go to Password Demo'
        onPress={() => navigation.navigate('Password')}
      />
      <Button
        title='Go to Box Styling Demo'
        onPress={() => navigation.navigate('Box')}
      />
      <Button
        title='Go to Exercise Box Styling Demo'
        onPress={() => navigation.navigate('ExerciseBox')}
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

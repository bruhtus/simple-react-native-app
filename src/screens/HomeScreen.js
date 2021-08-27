import React from "react";
import {Text, StyleSheet, View, Button} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.headerStyle}>
        Welcome!
      </Text>
      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to Color Generator Demo'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to Square Color Demo'
        onPress={() => navigation.navigate('Square')}
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

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
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 30
  }
});

export default HomeScreen;

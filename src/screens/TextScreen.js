import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {
  // Note: the parent pass the name value to the child (even tho the value already there)
  const [name, setName] = useState('');

  // Note: TextInput doesn't have any kind of styling
  return (
    <View>
      <Text>
        Enter name:
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>
        Your name is {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;

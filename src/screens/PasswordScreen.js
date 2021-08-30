import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {
  // Note: the parent pass the password value to the child (even tho the value already there)
  const [password, setPassword] = useState('');

  // Note: TextInput doesn't have any kind of styling
  // Ref: https://stackoverflow.com/a/29337494
  return (
    <View>
      <Text>
        Enter Password:
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length == 0 ?
        null :
        password.length < 8 ?
        <Text>
          Password must be at least 8 characters
        </Text> :
        null
      }
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

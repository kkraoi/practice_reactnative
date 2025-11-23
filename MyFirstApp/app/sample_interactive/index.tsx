import React, {useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native"

export default function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert(`Hello, ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.container}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Submit" onPress={handleSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderBlockColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5
  }
})
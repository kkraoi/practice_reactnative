import React, { useState } from "react"
import { View, Button, Alert, StyleSheet, TextInput, Text } from "react-native"
import { Link } from "expo-router"

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Button title="Click mee" onPress={() => Alert.alert("Button cliced")} />

      <TextInput
        style={styles.input}
        placeholder="Enter something..."
        value={text}
        onChangeText={(value) => setText(value)}
       />

       <Text style={styles.output}>You typed: {text}</Text>

       <Link href="/sample_event/button">
        <Text>ボタンイベントのサンプルへ</Text>
       </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10
  },
  output: {
    fontSize: 16
  }
})
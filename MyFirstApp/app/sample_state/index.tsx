import React, { useState } from "react"
import { View, Text, Button, StyleSheet } from "react-native"

export default function ConterApp() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  counterText: {

  }
})
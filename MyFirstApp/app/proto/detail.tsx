import { View, Text, Button, StyleSheet } from "react-native";

export default function DetailScreen() {
  const task = {
    name: "雑貨を買う",
    description: "牛乳、卵、パン",
    deadline: "2025-01-20"
  }

  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>{task.name}</Text>
      <Text style={styles.taskDescription}>{task.description}</Text>
      <Text style={styles.taskDeadline}>{task.deadline}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Edit" onPress={() => alert("Editing Task!")}/>
        <Button title="Delete" color="red" onPress={() => alert("Task Deleted!")}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff"},
  taskName: { fontSize: 24, fontWeight: "bold", marginBottom: 10},
  taskDescription: { fontSize: 18, marginBottom: 10 },
  taskDeadline: { fontSize: 16, color: "#555", marginBottom: 20 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between" }
})
import React, {useState} from "react"
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native"

type Task = {
  id: string,
  name: string
}

export default function TaskForm() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState("");

  const addTask = () => {
    if (task.trim() === "") {
      setError("Task cannot be empty!");
      return
    }

    setError("")
    const newTask = {
      id: Date.now().toString(),
      name: task
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a New Task</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter task name..."
        value="task"
        onChangeText={setTask}
      />

      {error ? <Text style={styles.error}></Text> : null}

      <Button title="Add Task" onPress={addTask}/>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.taskCard}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  error: {
    color: "red",
    marginBottom: 10
  },
  taskCard: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    marginVertical: 5,
    borderRadius: 5
  }
})
import React, { useState } from "react"
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native"

type Task = {
  id: string,
  name: string
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now().toString(),
      name: taskText
    }

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskText("")
  }

  const deleteTask = (id:string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a task..."
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
      />
  
      <Button title="Add Task" onPress={addTask}/>

      {/* FlatList：見えないViewはレンダリングしない。 */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskText}>{item.name}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({   container: { flex: 1, padding: 20, backgroundColor: '#fff' },header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },input: {   borderWidth: 1,   borderColor: '#ccc',   padding: 10,   marginBottom: 10,   },   taskCard: {   flexDirection: 'row',   justifyContent: 'space-between',   alignItems: 'center',   backgroundColor: '#f9f9f9',   padding: 15,   marginVertical: 5,   borderRadius: 8,   },   taskText: { fontSize: 16 },   deleteButton: { color: 'red', fontWeight: 'bold' },});
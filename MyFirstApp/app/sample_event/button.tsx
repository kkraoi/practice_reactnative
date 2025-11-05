import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

type Task = {
  id: string;
  name: string;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() === "") return; // からの入力は無視

    const newTask = { id: Date.now().toString(), name: taskText };
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // 入力フィールドをクリア
    setTaskText("") 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task Manager</Text>

      {/* 入力フォーム */}
      <TextInput
        style={styles.input}
        placeholder="Enter a new task..."
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
      />

      {/* タスク追加ボタン */}
      <Button title="Add Task" onPress={addTask} />
    
      {/* タスク一覧 */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        // なぜ({item}) ？: 分割代入だ。(arg)とした場合、arg.item.nameとする必要がある。ここではitemだけを使う。
        renderItem={({item}) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: "#fff"
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
    marginBottom: 10
  },
  taskCard: {
    backgroundColor: "#f9f0f0",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  taskName: {
    fontSize: 16
  }
})
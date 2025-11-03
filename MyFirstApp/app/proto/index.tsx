import { View, Text, FlatList, StyleSheet, ViewBase, ViewComponent, Button, TouchableOpacity } from "react-native";
import { Link } from "expo-router"

// 関数名はファイル名と一致させる？
export default function ProtoScreen() {
  const tasks = [
    { id: "1", name: "雑貨を買う", deadline: "2025-01-20"},
    { id: "2", name: "チーム会議", deadline: "2025-01-21"}
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id} // 抽出する
        renderItem={({item}) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskName}>{item.name}</Text>
            <Text style={styles.taskDeadline}>{item.deadline}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => alert("Add a new task!")}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <Button 
        title="+ 新しいタスクを追加" onPress={() => alert("タスク追加")}
      />

      <Link href="/">
          <Text>ホームに戻る</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  taskCard: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: .1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },
  taskName: {
    fontSize: 18,
    fontWeight: "500"
  },
  taskDeadline: {
    fontSize: 14,
    color: "#888",
    marginTop: 5
  },
  addButton: {
    position: "absolute",
    bottom: 100,
    right: 20,
    backgroundColor: "#4caf50",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: .3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  }
});
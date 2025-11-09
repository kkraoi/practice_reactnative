import {View, Text, StyleSheet} from "react-native"

type GreetingProps = {
  name: string,
  age: string
}

function Greeting({name, age}: GreetingProps ) {
  return <Text style={styles.text}>Hello, {name}.  U are {age} years old.</Text>
}

export default function App() {
  <View style={styles.container}>
    <Greeting name="Alice" age="25"/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20
  }
})
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Username from "./components/Username";
import Password from "./components/Password";

export default function App() {
  console.log("App executed");

  return (
    <View style={styles.container}>
      <Text>Tervetuloa</Text>
      <Username />
      <Text>{"\n"}</Text>
      <Password />
      <Text>{"\n"}</Text>
      <Button title="Kirjaudu sisään" />
      <Text>{"\n"}</Text>
      <Button title="Luo käyttäjä tunnus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

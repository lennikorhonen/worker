import React from "react";
import { TextInput } from "react-native";

const Username = (props) => {
  const [value, onChangeText] = React.useState("Käyttäjänimi");

  return (
    <TextInput
      style={{ height: 40, width: 250, borderColor: "grey", borderWidth: 1 }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

export default Username;

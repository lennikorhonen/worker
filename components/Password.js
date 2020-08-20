import React from "react";
import { TextInput } from "react-native";

const Password = (props) => {
  const [value, onChangeText] = React.useState("Salasana");

  return (
    <TextInput
      style={{ height: 40, width: 250, borderColor: "grey", borderWidth: 1 }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

export default Password;

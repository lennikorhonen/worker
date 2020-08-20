import React from "react";
import { TextInput, View, Button } from "react-native";

const SingupPage = (props) => {
  const [value, onChangeText] = React.useState("TESTI");

  return (
    <View>
      <TextInput
        style={{ height: 40, bordercolor: "grey", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

export default SingupPage;

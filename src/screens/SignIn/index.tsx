import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";

export function SignIn() {
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      <Text>SignIn page</Text>

      <TextInput style={styles.input} onChangeText={setInputText} />
      <Text>Texto digitad... {inputText}</Text>
    </View>
  );
}

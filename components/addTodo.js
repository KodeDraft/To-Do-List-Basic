import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.customInput}
        placeholder="Enter Task To Be Done"
        placeholderTextColor="tomato"
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        style={styles.customBtn}
        onPress={() => submitHandler(text)}
      >
        <Text style={styles.customBtnText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  customInput: {
    borderColor: "tomato",
    marginBottom: 10,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: "tomato",
    paddingBottom: 12,
    color: "tomato",
  },
  customBtn: {
    backgroundColor: "tomato",
    color: "white",
    width: "100%",
    height: 40,
  },
  customBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 40,
    borderRadius: 10,
  },
});

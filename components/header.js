import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.marginTop}>
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks To Be Done</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  marginTop: {
    marginTop: 40,
  },
});
export default Header;

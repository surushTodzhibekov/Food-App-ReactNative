import React from "react";
import { Text, StyleSheet } from "react-native";

function Context({ children }) {
  return <Text style={styles.container}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "open-sans-bold",
  },
});

export default Context;

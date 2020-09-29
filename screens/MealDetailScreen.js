import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ navigation, route }) {
  const { mealId, mealTitle } = route.params;
  return (
    <View style={styles.container}>
      <Text>MealDetailScreen........</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MealDetailScreen;

import React from "react";
import { View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen({ navigation }) {
  const fevMeals = MEALS.filter((meal) => meal.id == "m1" || meal.id == "m2");
  return (
    <>
      <View style={styles.container}></View>
      <MealList listData={fevMeals} navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default FavoritesScreen;

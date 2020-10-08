import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen({ navigation }) {
  const fevMeals = useSelector((state) => state.meals.favoriteMeals);
  // const fevMeals = availableMeals.filter((meal) => meal.id == "m1" || meal.id == "m2");
  if (fevMeals.length === 0 || !fevMeals) {
    return (
      <View style={styles.content}>
        <Text>No favorite found. Start adding some!</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}></View>
      <MealList listData={fevMeals} navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;

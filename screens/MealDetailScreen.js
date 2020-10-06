import React, { useCallback, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { MEALS } from "../data/dummy-data";
import Context from "../components/Context";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Context>{children}</Context>
    </View>
  );
};

function MealDetailScreen({ navigation, route }) {
  const { mealId, mealTitle } = route.params;
  const availableMeal = useSelector((state) => state.meals.meals);
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const selectedMeal = availableMeal.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // navigation.setParams({mealTitle: selectedMeal.title})
    navigation.setParams({ toggleFev: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFev: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <Context>{selectedMeal.duration}m</Context>
        <Context>{selectedMeal.complexity.toUpperCase()}</Context>
        <Context>{selectedMeal.affordability.toUpperCase()}</Context>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  detail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
  },
});

export default MealDetailScreen;

import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { withNavigation } from "@react-navigation/compat";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import MealItem from "../components/MealItem";

function MealList({ listData }) {
  const navigation = useNavigation();
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = ({ item }) => {
    const isFavorite = favoriteMeals.some((meal) => meal.id === item.id);
    return (
      <MealItem
        affordability={item.affordability}
        title={item.title}
        complexity={item.complexity}
        duration={item.duration}
        imageUrl={item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate("MealDetail", {
            mealId: item.id,
            mealTitle: item.title,
            isFev: isFavorite,
          });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 15,
  },
});

export default MealList;

import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

function CategoryMealsScreen({ navigation, route }) {
  const { categoryId, categoryTitle } = route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    ({ categoryIds }) => categoryIds.indexOf(categoryId) >= 0
  );
  return <MealList listData={displayedMeals} navigation={navigation} />;
}

export default CategoryMealsScreen;

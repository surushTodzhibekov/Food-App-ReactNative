import React from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

function CategoryMealsScreen({ navigation, route }) {
  const { categoryId, categoryTitle } = route.params;

  const displayedMeals = MEALS.filter(
    ({ categoryIds }) => categoryIds.indexOf(categoryId) >= 0
  );
  return <MealList listData={displayedMeals} navigation={navigation} />;
}

export default CategoryMealsScreen;

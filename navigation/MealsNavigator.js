import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { DrawerActions } from "@react-navigation/native";
import { LogBox } from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";
import FiltersScreen from "../screens/FiltersScreen";
import { toggleFavorite } from "../store/actions/meals";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
      }}
    >
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              ></Item>
            </HeaderButtons>
          ),
          title: "Category Meal",
        })}
        name="Category"
        component={CategoriesScreen}
      />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.categoryTitle })}
        name="CategoryMeal"
        component={CategoryMealsScreen}
      />
      <Stack.Screen
        options={({ route }) => {
          const isFavorite = route.params.isFev;
          return {
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favorite"
                  iconName={isFavorite ? "ios-star" : "ios-star-outline"}
                  onPress={route.params.toggleFev}
                ></Item>
              </HeaderButtons>
            ),
            title: route.params.mealTitle,
          };
        }}
        name="MealDetail"
        component={MealDetailScreen}
      />
    </Stack.Navigator>
  );
};
{
  /* Favorites Screen */
}
const FavoritesStack = createStackNavigator();
const FavoritesNav = () => {
  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 17,
        },
      }}
    >
      <FavoritesStack.Screen
        name="Favorite"
        component={FavoritesScreen}
        title="Favorite"
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              ></Item>
            </HeaderButtons>
          ),
        })}
      />
      <FavoritesStack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => {
          const mealId = route.params.mealId;
          const selectedMeal = MEALS.find((meal) => meal.id === mealId);

          return {
            title: selectedMeal.title,
          };
        }}
      />
    </FavoritesStack.Navigator>
  );
};
{
  /* Favorites Screen */
}
const FilterStack = createStackNavigator();

const FilterNav = () => {
  return (
    <FilterStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 17,
        },
      }}
    >
      <FilterStack.Screen
        name="Filter"
        component={FiltersScreen}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Save"
                iconName="ios-save"
                onPress={() => navigation.getParams("save")}
              ></Item>
            </HeaderButtons>
          ),
          headerTitleAlign: "center",
        })}
      />
    </FilterStack.Navigator>
  );
};

export { StackNavigator, FavoritesNav, FilterNav };

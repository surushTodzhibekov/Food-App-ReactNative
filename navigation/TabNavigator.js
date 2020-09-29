import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { StackNavigator } from "./MealsNavigator";
import { FavoritesNav } from "./MealsNavigator";
import Colors from "../constants/Colors";

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const BottomTabNavigator = () => {
  if (Platform.OS === "android") {
    return (
      <Tab.Navigator
        activeColor="white"
        shifting={false}
        barStyle={{ backgroundColor: Colors.primaryColor }}
      >
        <Tab.Screen
          name="Meals"
          component={StackNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-restaurant" color={color} size={25} />
            ),
            tabBarColor: Colors.primaryColor,
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoritesNav}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-star" color={color} size={25} />
            ),
            tabBarColor: Colors.accentColor,
          }}
        />
      </Tab.Navigator>
    );
  } else {
    return (
      <Tab.Navigator tabBarOptions={{ activeTintColor: Colors.accentColor }}>
        <Tab.Screen
          name="Meals"
          component={StackNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-restaurant" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-star" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
};

export default BottomTabNavigator;

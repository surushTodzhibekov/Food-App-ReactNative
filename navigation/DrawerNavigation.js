import React from "react";
import { Platform } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FiltersScreen from "../screens/FiltersScreen";
import BottomTabNavigator from "./TabNavigator";
import { FilterNav } from "./MealsNavigator";

const Drawer = createDrawerNavigator();

//drawer navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Filter" component={FilterNav} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

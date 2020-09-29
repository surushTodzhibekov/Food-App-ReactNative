import React from "react";
import { Platform } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FiltersScreen from "../screens/FiltersScreen";
import BottomTabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

//drawer navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Filter" component={FiltersScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

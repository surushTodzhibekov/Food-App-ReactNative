import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, Switch, Text, Platform } from "react-native";
import Colors from "../constants/Colors";

const FilterSwitch = ({ title, value, onValueChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{title}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform === "android" ? Colors.primaryColor : ""}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

function FiltersScreen({ route, navigation }) {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactous, setIsLactous] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegatarian, setIsVegatarian] = useState(false);

  const SaveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactous: isLactous,
      vegan: isVegan,
      isVegatarian: isVegatarian,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactous, isVegan, isVegatarian]);

  useEffect(() => {
    navigation.setParams({ save: SaveFilters });
  }, [SaveFilters]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        title="Gluten-free"
        value={isGlutenFree}
        onValueChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        title="Lactous-free"
        value={isLactous}
        onValueChange={(newValue) => setIsLactous(newValue)}
      />
      <FilterSwitch
        title="Vegan"
        value={isVegan}
        onValueChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        title="Vegatarian"
        value={isVegatarian}
        onValueChange={(newValue) => setIsVegatarian(newValue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    marginVertical: 30,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 15,
  },
});

export default FiltersScreen;

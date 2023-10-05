import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import FavoritesStackNavigator from "./FavoritesStackNavigator";

const Tabs = createBottomTabNavigator();

export default function RootTabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fbf8f8",
        tabBarInactiveTintColor: "#ccb0ab",
        tabBarStyle: { backgroundColor: "#9f6a60", borderColor: "transparent" },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialIcons name="home" size={30} color={props.color} />
          ),
        }}
      />
      <Tabs.Screen
        name="FavoritesTab"
        component={FavoritesStackNavigator}
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialIcons
              name="favorite-outline"
              size={30}
              color={props.color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

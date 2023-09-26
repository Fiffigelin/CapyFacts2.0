import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import FavoritesStackNavigator from "./FavoritesStackNavigator";

// type RootTabScreens = {
//   HomeTab: undefined;
//   FavoritesTab: undefined;
// };

// const Tabs = createBottomTabNavigator<RootTabScreens>();
const Tabs = createBottomTabNavigator();

export default function RootTabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialIcons name="home" size={props.size} color={props.color} />
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
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

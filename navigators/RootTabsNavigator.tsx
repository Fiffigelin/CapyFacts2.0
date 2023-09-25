import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/favorites/FavoritesScreen";

type RootTabScreens = {
  HomeTab: undefined;
  FavoritesTab: undefined;
};

const Tabs = createBottomTabNavigator<RootTabScreens>();

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
        component={FavoritesScreen}
        options={{
          title: "Favorites",
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

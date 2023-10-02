import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavoriteDetailScreen from "../screens/favorites/FavoriteDetailScreen";
import FavoritesScreen from "../screens/favorites/FavoritesScreen";
import { Favorite } from "../types/Types";

export type FavoriteStackScreens = {
  Favorites: undefined;
  Detail: { selectedCard: Favorite };
};

const Stack = createNativeStackNavigator<FavoriteStackScreens>();

export default function FavoritesStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#d1b7b2" },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Detail" component={FavoriteDetailScreen} />
    </Stack.Navigator>
  );
}

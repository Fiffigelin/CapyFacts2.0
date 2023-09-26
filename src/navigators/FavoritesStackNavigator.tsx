import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Capy } from "../../data";
import FavoriteDetailScreen from "../screens/favorites/FavoriteDetailScreen";
import FavoritesScreen from "../screens/favorites/FavoritesScreen";

export type FavoriteStackScreens = {
  Favorites: undefined;
  Detail: { selectedCard: Capy };
};

const Stack = createNativeStackNavigator<FavoriteStackScreens>();

export default function FavoritesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Detail" component={FavoriteDetailScreen} />
    </Stack.Navigator>
  );
}

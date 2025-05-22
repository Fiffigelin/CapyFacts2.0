import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavoriteDetailScreen from "../screens/favorites/FavoriteDetailScreen";
import FavoritesScreen from "../screens/favorites/FavoritesScreen";
import { Capy } from "../types/Types";
import { useTheme } from "react-native-paper";

export type FavoriteStackScreens = {
	Favorites: undefined;
	Detail: { selectedCard: Capy };
};

const Stack = createNativeStackNavigator<FavoriteStackScreens>();

export default function FavoritesStackNavigator() {
	const { colors } = useTheme();
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: colors.background },
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{ title: "" }}
			/>
			<Stack.Screen
				name="Detail"
				component={FavoriteDetailScreen}
				options={{ title: "Back" }}
			/>
		</Stack.Navigator>
	);
}

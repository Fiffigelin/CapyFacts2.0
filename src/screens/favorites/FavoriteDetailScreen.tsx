import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FavoriteStackScreens } from "../../navigators/FavoritesStackNavigator";
import { Text, View } from "react-native";

import React from "react";
import CapyCard from "../../components/capycard/CapyCard";
import useFavoriteStyle from "./hooks/useFavoriteStyle";

type DetailScreenRouteProp = RouteProp<FavoriteStackScreens, "Detail">;

type DetailScreenProps = {
	navigation: NativeStackNavigationProp<FavoriteStackScreens, "Detail">;
	route: DetailScreenRouteProp;
};

export default function FavoriteDetailScreen({ route }: DetailScreenProps) {
	const { selectedCard } = route.params;
	const { favoriteDetail } = useFavoriteStyle();

	return (
		<View style={favoriteDetail.container}>
			{selectedCard ? (
				<CapyCard
					id={selectedCard.id}
					image={selectedCard.image}
					fact={selectedCard.fact}
				/>
			) : (
				<Text>No selected card</Text>
			)}
		</View>
	);
}

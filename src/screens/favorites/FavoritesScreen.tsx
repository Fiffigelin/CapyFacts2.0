import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import FavoriteImage from "../../components/FavoriteImage";
import { useFavoriteContext } from "../../context/FavoriteContext";
import { FavoriteStackScreens } from "../../navigators/FavoritesStackNavigator";
import useFavoriteStyle from "./hooks/useFavoriteStyle";

type FavoritesScreenProps = {
	navigation: NativeStackNavigationProp<FavoriteStackScreens, "Favorites">;
};

function arrayChunk<T>(array: T[], chunkSize: number): T[][] {
	const chunkedArray: T[][] = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		chunkedArray.push(array.slice(i, i + chunkSize));
	}
	return chunkedArray;
}

export default function FavoritesScreen({ navigation }: FavoritesScreenProps) {
	const { favorites } = useFavoriteContext();
	const chunkedCards = arrayChunk(favorites, 3);

	const { favorite } = useFavoriteStyle();

	return (
		<View style={favorite.container}>
			<FlatList
				alwaysBounceVertical={false}
				data={chunkedCards}
				renderItem={({ item }) => (
					<View style={favorite.row}>
						{item.map((favorite) => (
							<TouchableOpacity
								key={favorite.id}
								onPress={() =>
									navigation.navigate("Detail", {
										selectedCard: favorite,
									})
								}
							>
								<FavoriteImage favorite={favorite} />
							</TouchableOpacity>
						))}
					</View>
				)}
			></FlatList>
		</View>
	);
}

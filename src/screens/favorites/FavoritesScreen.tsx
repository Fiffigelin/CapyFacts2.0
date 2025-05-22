import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { use } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import FavoriteImage from "../../components/FavoriteImage";
import { useFavoriteContext } from "../../context/FavoriteContext";
import { FavoriteStackScreens } from "../../navigators/FavoritesStackNavigator";
import { useTheme } from "react-native-paper";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

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

	const { colors } = useTheme();
	const bottomTabBarHeight = useBottomTabBarHeight();

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: colors.background,
					paddingBottom: bottomTabBarHeight,
				},
			]}
		>
			<FlatList
				alwaysBounceVertical={false}
				data={chunkedCards}
				renderItem={({ item }) => (
					<View style={styles.row}>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		padding: 12,
	},
	row: {
		flexDirection: "row",
	},
});

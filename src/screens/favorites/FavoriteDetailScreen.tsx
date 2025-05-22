import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CapyCard from "../../components/CapyCard";
import { FavoriteStackScreens } from "../../navigators/FavoritesStackNavigator";
import { useTheme } from "react-native-paper";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

type DetailScreenRouteProp = RouteProp<FavoriteStackScreens, "Detail">;

type DetailScreenProps = {
	navigation: NativeStackNavigationProp<FavoriteStackScreens, "Detail">;
	route: DetailScreenRouteProp;
};

export default function FavoriteDetailScreen({ route }: DetailScreenProps) {
	const { selectedCard } = route.params;
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

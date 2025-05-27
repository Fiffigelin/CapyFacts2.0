import React from "react";
import { View } from "react-native";
import useShimmerStyle from "./hooks/useShimmerStyle";
import Shimmer from "./Shimmer";

export default function FavoriteShimmer() {
	const { shimmerFavorite } = useShimmerStyle();
	return (
		<View style={shimmerFavorite.cardContainer}>
			<Shimmer mode={"flat"} shimmerHeight={120} shimmerWidth={120} />
		</View>
	);
}

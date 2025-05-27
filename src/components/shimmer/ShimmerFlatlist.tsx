import React from "react";
import { FlatList, View } from "react-native";
import FavoriteShimmer from "./FavoriteShimmer";

export default function ShimmerFlatlist() {
	function arrayChunk<T>(array: T[], chunkSize: number): T[][] {
		const chunkedArray: T[][] = [];
		for (let i = 0; i < array.length; i += chunkSize) {
			chunkedArray.push(array.slice(i, i + chunkSize));
		}
		return chunkedArray;
	}

	const shimmer = Array.from({ length: 18 }, (_, index) => index);

	const chunkedCards = arrayChunk(shimmer, 3);

	return (
		<View>
			<FlatList
				alwaysBounceVertical={false}
				data={chunkedCards}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={{ flexDirection: "row" }}>
						{item.map((index) => (
							<FavoriteShimmer key={index} />
						))}
					</View>
				)}
			/>
		</View>
	);
}

import React from "react";
import useFavoriteImageStyle from "./hooks/useFavoritImageStyle";

import { Image } from "expo-image";
import { View } from "react-native";
import { Capy } from "../../types/Types";

interface Props {
	favorite: Capy;
}

export default function FavoriteImage({ favorite }: Props) {
	const { style } = useFavoriteImageStyle();
	return (
		<View style={style.cardContainer}>
			<Image style={style.image} source={favorite.image} />
		</View>
	);
}

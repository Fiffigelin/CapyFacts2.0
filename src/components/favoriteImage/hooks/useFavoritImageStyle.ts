import { StyleSheet } from "react-native";

export default function useFavoriteImageStyle() {
	const style = StyleSheet.create({
		cardContainer: {
			padding: 2,
			marginTop: 2,
		},
		image: {
			width: 125,
			height: 125,
			objectFit: "contain",
			borderRadius: 8,
		},
	});

	return {
		style,
	};
}

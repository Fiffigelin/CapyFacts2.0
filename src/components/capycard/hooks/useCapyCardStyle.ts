import { StyleSheet } from "react-native";
import useRootStyle from "../../../styles/useRootStyle";

export default function useFavoriteStyle() {
	const { surface, onSurface, primary, error } = useRootStyle();

	const style = StyleSheet.create({
		container: {
			alignItems: "flex-end",
			justifyContent: "center",
			padding: 20,
		},
		cardContainer: {
			alignItems: "center",
			justifyContent: "center",
			width: 350,
			backgroundColor: surface,
		},
		cardContent: {
			paddingTop: 12,
			paddingBottom: 12,
		},
		cardCover: {
			width: 350,
			height: 350,
			resizeMode: "contain",
		},
		factText: {
			fontSize: 24,
			textAlign: "justify",
			color: onSurface,
		},
		buttonContainer: {
			flexDirection: "row",
			padding: 10,
			gap: 20,
		},
	});

	return {
		style,
		error,
		primary,
	};
}

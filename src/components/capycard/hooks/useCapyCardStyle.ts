import useRootStyle from "../../../styles/useRootStyle";

import { StyleSheet } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function useFavoriteStyle() {
	const {
		background,
		onBackground,
		surface,
		onSurface,
		primary,
		error,
		tertiary,
		onTertiary,
	} = useRootStyle();
	const bottomTabBarHeight = useBottomTabBarHeight();

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
			height: 300,
			maxHeight: 300,
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
		snackbarStyle: {
			marginBottom: bottomTabBarHeight - 25,
			backgroundColor: onBackground,
			zIndex: 9999,
		},
		snackbarText: {
			color: background,
		},
	});

	return {
		style,
		error,
		primary,
	};
}

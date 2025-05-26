import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import useRootStyle from "../../../styles/useRootStyle";

export default function useFavoriteStyle() {
	const bottomTabBarHeight = useBottomTabBarHeight();
	const { background } = useRootStyle();

	const favorite = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "flex-start",
			padding: 12,
			backgroundColor: background,
			paddingBottom: bottomTabBarHeight,
		},
		row: {
			flexDirection: "row",
		},
	});

	const favoriteDetail = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: "center",
			justifyContent: "flex-start",
			backgroundColor: background,
			paddingBottom: bottomTabBarHeight,
		},
	});

	return {
		favorite,
		favoriteDetail,
	};
}

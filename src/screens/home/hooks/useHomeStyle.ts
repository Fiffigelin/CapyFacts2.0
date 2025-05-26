import { StyleSheet } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import useRootStyle from "../../../styles/useRootStyle";

export default function useHomeStyle() {
	const { background } = useRootStyle();
	const bottomTabBarHeight = useBottomTabBarHeight();

	const style = StyleSheet.create({
		background: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: background,
			paddingBottom: bottomTabBarHeight,
		},
		buttonContainer: {
			borderRadius: 8,
			justifyContent: "center",
		},
	});

	return {
		style,
	};
}

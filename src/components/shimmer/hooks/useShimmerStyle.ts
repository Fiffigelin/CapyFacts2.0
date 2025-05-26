import useRootStyle from "../../../styles/useRootStyle";

import { StyleSheet } from "react-native";
import { useThemeContext } from "../../../context/ThemeContext";

export default function useShimmerStyle() {
	const { background, surface, onSurface } = useRootStyle();
	const { isDarkMode } = useThemeContext();

	const shimmerBackground = isDarkMode
		? "rgba(20, 20, 20, 0.4)"
		: "rgba(255, 255, 255, 0.4)";
	const styles = StyleSheet.create({
		container: {
			backgroundColor: surface,
			borderRadius: 12,
		},
		card: {
			margin: 12,
			height: 80,
		},
		shimmerContainer: {
			position: "relative",
			overflow: "hidden",
		},
		box: {
			backgroundColor: background,
			borderRadius: 4,
			marginBottom: 6,
		},
		box2: {
			width: "60%",
			height: 20,
		},
		box3: {
			width: "80%",
			height: 40,
			marginBottom: 0,
		},
		text: {
			width: "90%",
			height: 20,
		},
		text2: {
			width: "60%",
			height: 20,
		},
		text3: {
			width: "80%",
			height: 20,
		},
		image: {
			borderRadius: 12,
		},
		shimmer: {
			backgroundColor: shimmerBackground,
		},
	});
	return {
		styles,
	};
}

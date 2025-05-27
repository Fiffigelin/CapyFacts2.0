import useRootStyle from "../../../styles/useRootStyle";

import { StyleSheet } from "react-native";
import { useThemeContext } from "../../../context/ThemeContext";

export default function useShimmerStyle() {
	const { background, surface, onSurface } = useRootStyle();
	const { isDarkMode } = useThemeContext();

	const box = isDarkMode ? "#212121" : "#F5F5F5";
	const shimmerBackground = isDarkMode
		? "rgba(20, 20, 20, 0.4)"
		: "rgba(255, 255, 255, 0.4)";

	const boxBackground = isDarkMode ? "#252525" : "#FAFAFA";
	const shimmerBoxBackground = isDarkMode
		? "rgba(33, 33, 33, 1)"
		: "rgba(255, 255, 255, 1)";

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
			backgroundColor: box,
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
			backgroundColor: box,
		},
		imageFlat: {
			borderRadius: 12,
			backgroundColor: boxBackground,
		},
		shimmer: {
			backgroundColor: shimmerBackground,
		},
		shimmerFlat: {
			backgroundColor: shimmerBoxBackground,
		},
	});

	const shimmerFavorite = StyleSheet.create({
		cardContainer: {
			padding: 2,
			marginTop: 3,
			backgroundColor: background,
		},
	});

	return {
		styles,
		shimmerFavorite,
	};
}

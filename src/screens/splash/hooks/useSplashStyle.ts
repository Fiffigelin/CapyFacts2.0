import { StyleSheet } from "react-native";
import useRootStyle from "../../../styles/useRootStyle";
import { useThemeContext } from "../../../context/ThemeContext";

export default function useSplashStyle() {
	const { background, onBackground, primary } = useRootStyle();
	const { isDarkMode } = useThemeContext();

	const style = StyleSheet.create({
		background: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: background,
		},
		image: {
			width: 200,
			height: 200,
		},
		activityIndicator: {
			position: "absolute",
		},
	});

	const splashImage = isDarkMode
		? require("../../../../assets/darkMode-capy.png")
		: require("../../../../assets/lightMode-capy.png");

	return {
		style,
		primary,
		onBackground,
		splashImage,
	};
}

import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import type { MD3Theme } from "react-native-paper";

const sand = "#DCC6A0";
const darkBackground = "#121212";
const lightBackground = "#FFFFFF";

export const LightTheme: MD3Theme = {
	...MD3LightTheme,
	colors: {
		...MD3LightTheme.colors,
		primary: sand,
		onPrimary: "#000000",
		background: lightBackground,
		onBackground: "#000000",
		surface: "#FFFFFF",
		onSurface: "#000000",
	},
};

export const DarkTheme: MD3Theme = {
	...MD3DarkTheme,
	colors: {
		...MD3DarkTheme.colors,
		primary: sand,
		onPrimary: "#000000",
		background: darkBackground,
		onBackground: "#FFFFFF",
		surface: "#1E1E1E",
		onSurface: "#FFFFFF",
	},
};

import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import type { MD3Theme } from "react-native-paper";

export const LightTheme: MD3Theme = {
	...MD3LightTheme,
	colors: {
		...MD3LightTheme.colors,
		primary: "#513DFF",
		onPrimary: "#FFFFFF",
		background: "#F0F0F0",
		onBackground: "#404040",
		surface: "#FFFFFF",
		onSurface: "#000000",
		secondary: "#A89EFF",
		onSecondary: "#FFFFFF",
		error: "#E00614",
		onError: "#000000",
		tertiary: "#000000",
		onTertiary: "#919191",
	},
};

export const DarkTheme: MD3Theme = {
	...MD3DarkTheme,
	colors: {
		...MD3LightTheme.colors,
		primary: "#C3BDFF",
		onPrimary: "#000000",
		background: "#1C1C1C",
		onBackground: "#FFFFFF",
		surface: "#141414",
		onSurface: "#FFFFFF",
		secondary: "#9185FF",
		onSecondary: "#000000",
		error: "#FB8D95",
		onError: "#000000",
		tertiary: "#FFFFFF",
		onTertiary: "#D6D1FF",
	},
};

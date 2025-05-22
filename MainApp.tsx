import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useThemeContext } from "./src/context/ThemeContext";
import RootTabsNavigator from "./src/navigators/RootTabsNavigator";
import { LightTheme, DarkTheme } from "./src/styles/theme";

export default function MainApp() {
	const { isDarkMode } = useThemeContext();
	const theme = isDarkMode ? DarkTheme : LightTheme;

	return (
		<PaperProvider theme={theme}>
			<StatusBar style="auto" />
			<RootTabsNavigator />
		</PaperProvider>
	);
}

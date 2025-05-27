import RootTabsNavigator from "./src/navigators/RootTabsNavigator";

import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useThemeContext } from "./src/context/ThemeContext";
import { DarkTheme, LightTheme } from "./src/styles/RootTheme";

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

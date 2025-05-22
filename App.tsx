import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FavoriteProvider } from "./src/context/FavoriteContext";
import { NewDataProvider } from "./src/context/NewDataContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import MainApp from "./MainApp";

export default function App() {
	return (
		<SafeAreaProvider>
			<NewDataProvider>
				<FavoriteProvider>
					<ThemeProvider>
						<MainApp />
					</ThemeProvider>
				</FavoriteProvider>
			</NewDataProvider>
		</SafeAreaProvider>
	);
}

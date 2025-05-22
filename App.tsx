import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FavoriteProvider } from "./src/context/FavoriteContext";
import { NewDataProvider } from "./src/context/NewDataContext";
import RootTabsNavigator from "./src/navigators/RootTabsNavigator";

export default function App() {
	return (
		<SafeAreaProvider>
			<NewDataProvider>
				<FavoriteProvider>
					<StatusBar style="auto" />
					<RootTabsNavigator />
				</FavoriteProvider>
			</NewDataProvider>
		</SafeAreaProvider>
	);
}

import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import FavoritesStackNavigator from "./FavoritesStackNavigator";
import {
	StyleSheet,
	Switch,
	TouchableWithoutFeedback,
	View,
	Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BlurView } from "expo-blur";

export type RootTabScreens = {
	// Todo: add a splash screen
	//SplashScreen: undefined;
	Home: undefined;
	FavoritesTab: undefined;
	// Todo: add settings screen
	//Settings: undefined;
};

const Tabs = createBottomTabNavigator<RootTabScreens>();

export default function RootTabsNavigator() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const Header = () => {
		return (
			<View
				style={{
					flexDirection: "row",
					position: "absolute",
					top: 0,
					width: "100%",
					alignItems: "center",
					justifyContent: "flex-end",
					paddingVertical: 20,
					backgroundColor: "transparent",
					zIndex: 10,
				}}
			>
				<Text>Dark Mode</Text>
				<Switch
					style={{ margin: 15 }}
					value={isDarkMode}
					onValueChange={() => {
						setIsDarkMode((prev) => !prev);
					}}
				/>
			</View>
		);
	};

	return (
		<>
			<Header />
			<NavigationContainer>
				<Tabs.Navigator
					screenOptions={{
						tabBarShowLabel: false,
						tabBarActiveTintColor: "#fbf8f8",
						tabBarInactiveTintColor: "#ccb0ab",
						tabBarStyle: {
							position: "absolute",
							borderColor: "transparent",
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
						},
						tabBarBackground: () => (
							<BlurView
								intensity={75}
								style={{
									...StyleSheet.absoluteFillObject,
									borderTopLeftRadius: 20,
									borderTopRightRadius: 20,
									overflow: "hidden",
									backgroundColor: "transparent",
								}}
							/>
						),
					}}
				>
					<Tabs.Screen
						name="Home"
						component={HomeScreen}
						options={{
							tabBarButton: (props) => (
								<TouchableWithoutFeedback onPress={props.onPress}>
									<View
										style={{
											flex: 1,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										{props.children}
									</View>
								</TouchableWithoutFeedback>
							),
							headerShown: false,
							tabBarShowLabel: true,
							tabBarLabel: "Home",
							tabBarIcon: ({ color, focused }) => (
								<MaterialCommunityIcons
									name={focused ? "home" : "home-outline"}
									size={30}
									color={color}
								/>
							),
						}}
					/>
					<Tabs.Screen
						name="FavoritesTab"
						component={FavoritesStackNavigator}
						options={{
							tabBarButton: (props) => (
								<TouchableWithoutFeedback onPress={props.onPress}>
									<View
										style={{
											flex: 1,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										{props.children}
									</View>
								</TouchableWithoutFeedback>
							),
							title: "Favorites",
							headerShown: false,
							tabBarShowLabel: true,
							tabBarLabel: "Favorites",
							tabBarIcon: ({ color, focused }) => (
								<MaterialIcons
									name={focused ? "favorite" : "favorite-outline"}
									size={30}
									color={color}
								/>
							),
						}}
					/>
				</Tabs.Navigator>
			</NavigationContainer>
		</>
	);
}

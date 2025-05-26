import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import FavoritesStackNavigator from "./FavoritesStackNavigator";
import {
	StyleSheet,
	Switch,
	TouchableWithoutFeedback,
	View,
	Text,
	Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useThemeContext } from "../context/ThemeContext";
import { useTheme } from "react-native-paper";

export type RootTabScreens = {
	// Todo: add a splash screen
	//SplashScreen: undefined;
	Home: undefined;
	FavoritesTab: undefined;
};

const Tabs = createBottomTabNavigator<RootTabScreens>();

export default function RootTabsNavigator() {
	const { colors } = useTheme();

	const Header = () => {
		const { isDarkMode, toggleTheme } = useThemeContext();
		return (
			<View
				style={{
					flexDirection: "row",
					position: "absolute",
					top: 0,
					right: 0,
					alignItems: "center",
					justifyContent: "flex-end",
					paddingVertical: 20,
					backgroundColor: "transparent",
					zIndex: 10,
				}}
			>
				<Text
					style={{
						color: colors.onBackground,
						fontWeight: "bold",
						fontSize: 16,
					}}
				>
					{isDarkMode ? "Dark" : "Light"}
				</Text>
				<Switch
					trackColor={{
						false: colors.secondary,
						true: colors.secondary,
					}}
					thumbColor={colors.primary}
					style={{ margin: 10 }}
					value={isDarkMode}
					onValueChange={toggleTheme}
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
						tabBarActiveTintColor: colors.primary,
						tabBarInactiveTintColor: colors.secondary,
						tabBarStyle: {
							position: "absolute",
							borderColor: "transparent",
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
						},
						tabBarBackground: () => (
							<View
								style={{
									...StyleSheet.absoluteFillObject,
									borderTopLeftRadius: 20,
									borderTopRightRadius: 20,
									overflow: "hidden",
									backgroundColor: colors.background,
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

import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/home/HomeScreen";
import FavoritesStackNavigator from "./FavoritesStackNavigator";
import { Switch, TouchableWithoutFeedback, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useThemeContext } from "../context/ThemeContext";
import NavigationStyle from "./hooks/useNavigationStyle";
import SplashScreen from "../screens/splash/SplashScreen";

export type RootTabScreens = {
	HomeTab: undefined;
	FavoritesTab: undefined;
};

const Tabs = createBottomTabNavigator<RootTabScreens>();

export default function RootTabsNavigator() {
	const { HeaderStyle, TabNav, Root } = NavigationStyle();
	const { isLoading, isDarkMode, toggleTheme } = useThemeContext();

	const Header = () => {
		const modeText = isDarkMode ? "Dark" : "Light";

		return (
			<View style={HeaderStyle.headerContainer}>
				<Text style={HeaderStyle.headerText}>{modeText}</Text>
				<Switch
					trackColor={{
						false: Root.secondary,
						true: Root.secondary,
					}}
					thumbColor={Root.primary}
					style={HeaderStyle.margin10}
					value={isDarkMode}
					onValueChange={toggleTheme}
				/>
			</View>
		);
	};

	return isLoading ? (
		<SplashScreen />
	) : (
		<>
			<Header />
			<NavigationContainer>
				<Tabs.Navigator
					screenOptions={{
						tabBarShowLabel: false,
						tabBarActiveTintColor: Root.primary,
						tabBarInactiveTintColor: Root.secondary,
						tabBarStyle: TabNav.tabBar,
						tabBarBackground: () => <View style={TabNav.tabBarBackground} />,
					}}
				>
					<Tabs.Screen
						name="HomeTab"
						component={HomeScreen}
						options={{
							tabBarButton: (props) => (
								<TouchableWithoutFeedback onPress={props.onPress}>
									<View style={TabNav.tabBarButton}>{props.children}</View>
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
									<View style={TabNav.tabBarButton}>{props.children}</View>
								</TouchableWithoutFeedback>
							),
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

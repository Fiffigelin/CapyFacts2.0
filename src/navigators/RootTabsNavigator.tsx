import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import FavoritesStackNavigator from "./FavoritesStackNavigator";
import {
	Pressable,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";

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
	return (
		<Tabs.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#fbf8f8",
				tabBarInactiveTintColor: "#ccb0ab",
				tabBarStyle: { backgroundColor: "#9f6a60", borderColor: "transparent" },
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
	);
}

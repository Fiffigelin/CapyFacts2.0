import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/favorites/FavoritesScreen";

type RootTabScreens = {
  HomeTab: undefined;
  FavoritesTab: undefined;
};
const Tabs = createBottomTabNavigator<RootTabScreens>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tabs.Navigator>
          <Tabs.Screen
            name="HomeTab"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <MaterialIcons
                  name="home"
                  size={props.size}
                  color={props.color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="FavoritesTab"
            component={FavoritesScreen}
            options={{
              title: "Favorites",
              tabBarIcon: (props) => (
                <MaterialIcons
                  name="favorite-outline"
                  size={props.size}
                  color={props.color}
                />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootTabsNavigator from "./navigators/RootTabsNavigator";

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
        <RootTabsNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

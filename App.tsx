import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootTabsNavigator from "./src/navigators/RootTabsNavigator";
import { FavoriteProvider } from "./src/context/FavoriteContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <FavoriteProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <RootTabsNavigator />
        </NavigationContainer>
      </FavoriteProvider>
    </SafeAreaProvider>
  );
}

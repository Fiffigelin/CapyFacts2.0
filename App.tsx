import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FavoriteProvider } from "./src/context/FavoriteContext";
import { NewCapyProvier } from "./src/context/NewCapyContext";
import RootTabsNavigator from "./src/navigators/RootTabsNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <NewCapyProvier>
        <FavoriteProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            <RootTabsNavigator />
          </NavigationContainer>
        </FavoriteProvider>
      </NewCapyProvier>
    </SafeAreaProvider>
  );
}

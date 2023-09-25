import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoriteStackScreens } from "../../navigators/FavoritesStackNavigator";

type DetailScreenRouteProp = RouteProp<FavoriteStackScreens, "Detail">;

type DetailScreenProps = {
  navigation: NativeStackNavigationProp<FavoriteStackScreens, "Detail">;
  route: DetailScreenRouteProp;
};

export default function FavoriteDetailScreen(props: DetailScreenProps) {
  const { id, key } = props.route.params;

  return (
    <View style={styles.container}>
      <Text>FavoriteDetailScreen</Text>
      <Text>ID: {id}</Text>
      <Text>KEY: {key}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

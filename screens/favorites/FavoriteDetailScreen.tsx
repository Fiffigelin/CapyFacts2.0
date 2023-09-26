import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoriteStackScreens } from "../../navigators/FavoritesStackNavigator";
import { Capy } from "../../data";

type DetailScreenRouteProp = RouteProp<FavoriteStackScreens, "Detail">;

type DetailScreenProps = {
  navigation: NativeStackNavigationProp<FavoriteStackScreens, "Detail">;
  route: DetailScreenRouteProp;
};

export default function FavoriteDetailScreen({ route }: DetailScreenProps) {
  const { selectedCard } = route.params;

  return (
    <View style={styles.container}>
      <Text>FavoriteDetailScreen</Text>
      {selectedCard ? (
        <>
          <Text>ID: {selectedCard.id}</Text>
          <Text>Fact: {selectedCard.fact}</Text>
        </>
      ) : (
        <Text>No selected card</Text>
      )}
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

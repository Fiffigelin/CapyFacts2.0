import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CapyCard from "../../components/CapyCard";
import { FavoriteStackScreens } from "../../navigators/FavoritesStackNavigator";

type DetailScreenRouteProp = RouteProp<FavoriteStackScreens, "Detail">;

type DetailScreenProps = {
  navigation: NativeStackNavigationProp<FavoriteStackScreens, "Detail">;
  route: DetailScreenRouteProp;
};

export default function FavoriteDetailScreen({ route }: DetailScreenProps) {
  const { selectedCard } = route.params;

  return (
    <LinearGradient
      // colors={["#4c669f", "#3b5998", "#192f6a"]} //blå
      // colors={["#e2d2c3", "#b0855c"]} //roseguld
      colors={["#d1b7b2", "#9f6a60"]} //rose
      // colors={["#dfe0e0", "#8c8e8c"]} //silver
      // colors={["#efc275", "#E9AE49", "#DB941A"]} //gul
      locations={[0.5, 1]}
      style={styles.background}
    >
      <View style={styles.container}>
        {selectedCard ? (
          <CapyCard
            id={selectedCard.id}
            image={selectedCard.image}
            fact={selectedCard.fact}
          />
        ) : (
          <Text>No selected card</Text>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

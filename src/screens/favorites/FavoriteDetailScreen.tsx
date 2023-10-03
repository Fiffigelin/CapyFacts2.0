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
      colors={["#d1b7b2", "#9f6a60"]} //rose
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
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

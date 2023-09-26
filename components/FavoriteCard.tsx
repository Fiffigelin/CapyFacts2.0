import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Image } from "expo-image";
import { Capy, cards } from "../data";

interface Props {
  selectedCard: Capy;
}

export default function FavoriteCard({ selectedCard }: Props) {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={{
          width: 125,
          height: 125,
          objectFit: "contain",
          borderRadius: 8,
        }}
        source={selectedCard.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 50,
  },
  cardContainer: {
    backgroundColor: "#fff",
    padding: 2,
    marginTop: 2,
  },
});

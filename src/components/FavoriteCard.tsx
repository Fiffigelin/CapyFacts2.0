import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Capy } from "../../data";

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

import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Capy } from "../types/Types";

interface Props {
  favorite: Capy;
}

export default function FavoriteImage({ favorite }: Props) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={favorite.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  cardContainer: {
    padding: 2,
    marginTop: 2,
  },
  image: {
    width: 125,
    height: 125,
    objectFit: "contain",
    borderRadius: 8,
  },
});

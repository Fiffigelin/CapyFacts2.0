import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Capy, cards } from "../data";

interface Props {
  id: number;
}

export default function FavoriteCard({ props }: Props) {
  const id = props;
  const capy = cards.find((card) => card.id === id);

  return (
    <View style={styles.cardContainer}>
      <Card>
        <Card.Cover
          source={{ uri: capy?.image }}
          style={{ width: 200, height: 200, objectFit: "contain" }}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  cardContainer: {
    backgroundColor: "#fff",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
});

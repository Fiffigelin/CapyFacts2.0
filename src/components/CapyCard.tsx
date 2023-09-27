import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { Capy, cards } from "../../data";

interface Props {
  capyFact: Capy;
}

export default function CapyCard({capyFact}: Props ) {
  // const randomIndex = Math.floor(Math.random() * cards.length);
  // const randomCard = cards[randomIndex];
  // console.log(randomCard);

  return (
    <View style={styles.cardContainer}>
      <Card>
        <Card.Cover
          source={{ uri: capyFact.image }}
          style={{ width: 375, height: 375, objectFit: "contain" }}
        />
        <Card.Content>
          <Text style={{ fontSize: 24, textAlign: "justify" }}>
            {capyFact.fact}
          </Text>
        </Card.Content>
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
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});

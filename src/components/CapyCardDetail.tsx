import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { Capy } from "../../data";

export default function CapyCardDetail({
  cardProps,
}: {
  cardProps: Capy | null;
}) {
  if (!cardProps) {
    return null;
  }

  return (
    <View style={styles.cardContainer}>
      <Card>
        <Card.Cover
          source={{ uri: cardProps?.image }}
          style={{ width: 375, height: 375, objectFit: "contain" }}
        />
        <Card.Content>
          <Text style={{ fontSize: 24, textAlign: "justify" }}>
            {cardProps?.fact}
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

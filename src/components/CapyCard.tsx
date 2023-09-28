import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "react-native-paper";

type Props = {
  imageData: string | undefined;
  factData: string | undefined;
};

export default function CapyCard({ imageData, factData }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  function favoritesOnPress() {
    setIsFavorite(isFavorite ? false : true);
    console.log(isFavorite);
  }
  function sendSmsOnPress() {
    console.log("Ett sms");
  }
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Card.Cover
          source={{ uri: imageData }}
          style={{ width: 375, height: 375, objectFit: "contain" }}
        />
        <Card.Content>
          <Text style={{ fontSize: 24, textAlign: "justify" }}>{factData}</Text>
        </Card.Content>
      </Card>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={favoritesOnPress}>
          {isFavorite ? (
            <MaterialIcons
              style={{ justifyContent: "flex-start" }}
              name="favorite-outline"
              color="black"
              size={30}
            />
          ) : (
            <MaterialIcons name="favorite" size={30} color="red" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={sendSmsOnPress}>
          <Feather name="send" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 50,
  },
  cardContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 10,
    gap: 20,
  },
});

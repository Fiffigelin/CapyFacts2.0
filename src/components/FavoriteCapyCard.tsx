import { Feather, MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { useFavoriteContext } from "../context/FavoriteContext";
import { FavoriteStackScreens } from "../navigators/FavoritesStackNavigator";

type Props = {
  id: string;
  imageData: string | undefined;
  factData: string | undefined;
};

export default function CapyCard({ id, imageData, factData }: Props) {
  const { deleteFavorite } = useFavoriteContext();

  function favoritesOnPress() {
    console.log("deleted");
    if (id) {
      deleteFavorite(id);
    }
  }

  function sendSmsOnPress() {
    console.log("Ett sms");
  }
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Card.Cover
          source={{ uri: imageData }}
          style={{ width: 350, height: 350, objectFit: "contain" }}
        />
        <Card.Content>
          <Text style={{ fontSize: 24, textAlign: "justify" }}>{factData}</Text>
        </Card.Content>
      </Card>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={favoritesOnPress}>
          <MaterialIcons name="favorite" size={30} color="red" />
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
    padding: 20,
  },
  cardContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 10,
    gap: 20,
  },
});

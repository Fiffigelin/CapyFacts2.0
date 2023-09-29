import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, PaperProvider, Portal } from "react-native-paper";
import { useFavoriteContext } from "../context/FavoriteContext";

type Props = {
  imageData: string | undefined;
  factData: string | undefined;
};

export default function CapyCard({ imageData, factData }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSmsModal, setShowSmsModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { createFavorite, deleteFavorite, dailyFavorite, favorites } =
    useFavoriteContext();

  function favoritesOnPress() {
    setIsFavorite(isFavorite ? false : true);
    console.log(isFavorite);

    if (isFavorite === true) {
      createFavorite();
    } else {
      if (dailyFavorite) {
        console.log("deleted");
        deleteFavorite(dailyFavorite);
      }
    }
  }

  function renderModal() {
    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "90%",
              height: "60%",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity onPress={() => setOpenModal(false)}>
                <MaterialIcons name="close" size={40} color="black" />
              </TouchableOpacity>
            </View>
            <Text>En modal!</Text>
          </View>
        </View>
      </Modal>
    );
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
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Feather name="send" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {renderModal()}
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

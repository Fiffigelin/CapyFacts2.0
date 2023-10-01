import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { useFavoriteContext } from "../context/FavoriteContext";

type Props = {
  id: string;
  image: string;
  fact: string;
};

export default function CapyCard({ id, image, fact }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSmsModal, setShowSmsModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { createFavorite, deleteFavorite, favorites } = useFavoriteContext();

  function favoritesOnPress() {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);
    console.log(newIsFavorite);

    if (newIsFavorite === true) {
      createFavorite(id, image, fact);
    }
    if (newIsFavorite === false) {
      console.log("deleted");
      deleteFavorite(id);
    }
  }

  useEffect(() => {
    const capy = favorites.find((favorite) => favorite.id === id);
    console.log(id);
    setIsFavorite(!!capy);
  }, [id, favorites]);

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
          source={{ uri: image }}
          style={{ width: 350, height: 350, objectFit: "contain" }}
        />
        <Card.Content>
          <Text style={{ fontSize: 24, textAlign: "justify" }}>{fact}</Text>
        </Card.Content>
      </Card>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={favoritesOnPress}>
          {isFavorite ? (
            <MaterialIcons name="favorite" size={30} color="red" />
          ) : (
            <MaterialIcons
              style={{ justifyContent: "flex-start" }}
              name="favorite-outline"
              color="black"
              size={30}
            />
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

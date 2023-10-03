import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { useFavoriteContext } from "../context/FavoriteContext";
import SMS from "./SMS";
import { randomId } from "../utilities/RandomIdGenerator";
import Snackbar from "./Snackbar";

// import SmsModal from "./SmsModal";

type Props = {
  id: string;
  image: string;
  fact: string;
};

export default function CapyCard({ id, image, fact }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [alreadyFavorite, setAlreadyFavorite] = useState(false);
  const { createFavorite, deleteFavorite, favorites } = useFavoriteContext();

  function favoritesOnPress() {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);
    console.log(newIsFavorite);

    if (newIsFavorite === true) {
      const existingFavorite = favorites.find(
        (fav) => fav.image === image && fav.fact === fact
      );
      if (existingFavorite) {
        setAlreadyFavorite(true);
        setIsFavorite(false);

        setTimeout(() => {
          setAlreadyFavorite(false);
        }, 3000);
      } else if (!existingFavorite) {
        const existingId = favorites.find((fav) => fav.id === id);

        if (existingId) {
          id = randomId();
        }

        createFavorite(id, image, fact);
      }
    } else {
      console.log("deleted");
      deleteFavorite(id);
    }
  }

  useEffect(() => {
    const capy = favorites.find((favorite) => favorite.id === id);
    console.log(`capy: ${capy?.id}`);
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#e2d1ce",
              padding: 15,
              width: "90%",
              height: "auto",
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
            <SMS props={fact} />
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <>
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
              <MaterialIcons name="favorite" size={30} color="#dd223a" />
            ) : (
              <MaterialIcons
                style={{ justifyContent: "flex-start" }}
                name="favorite-outline"
                color="#fbf8f8"
                size={30}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <Feather name="send" size={30} color="#fbf8f8" />
          </TouchableOpacity>
        </View>
        {renderModal()}
      </View>
      {alreadyFavorite && <Snackbar props={alreadyFavorite} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 20,
  },
  cardContainer: {
    backgroundColor: "#e7dad7",
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

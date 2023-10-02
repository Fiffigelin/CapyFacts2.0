import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import FavoriteImage from "../../components/FavoriteImage";
import { useFavoriteContext } from "../../context/FavoriteContext";
import { FavoriteStackScreens } from "../../navigators/FavoritesStackNavigator";

type FavoritesScreenProps = {
  navigation: NativeStackNavigationProp<FavoriteStackScreens, "Favorites">;
};

function arrayChunk<T>(array: T[], chunkSize: number): T[][] {
  const chunkedArray: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

export default function FavoritesScreen({ navigation }: FavoritesScreenProps) {
  const { favorites } = useFavoriteContext();
  const chunkedCards = arrayChunk(favorites, 3);

  return (
    <LinearGradient
      // colors={["#4c669f", "#3b5998", "#192f6a"]} //blå
      // colors={["#e2d2c3", "#b0855c"]} //roseguld
      colors={["#d1b7b2", "#9f6a60"]} //rose
      // colors={["#dfe0e0", "#8c8e8c"]} //silver
      // colors={["#efc275", "#E9AE49", "#DB941A"]} //gul
      locations={[0.5, 1]}
      style={styles.background}
    >
      <View style={styles.container}>
        <FlatList
          alwaysBounceVertical={false}
          data={chunkedCards}
          renderItem={({ item }) => (
            <View style={styles.row}>
              {item.map((favorite) => (
                <TouchableOpacity
                  key={favorite.id}
                  onPress={() =>
                    navigation.navigate("Detail", {
                      selectedCard: favorite,
                    })
                  }
                >
                  <FavoriteImage favorite={favorite} />
                </TouchableOpacity>
              ))}
            </View>
          )}
        ></FlatList>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "flex-start",
    padding: 12,
  },
  row: {
    flexDirection: "row",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

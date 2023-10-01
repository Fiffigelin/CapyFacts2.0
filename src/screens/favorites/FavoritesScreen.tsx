import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import FavoriteImage from "../../components/FavoriteImage";
import { useFavoriteContext } from "../../context/FavoriteContext";
import { FavoriteStackScreens } from "../../navigators/FavoritesStackNavigator";
import { FlashList } from "@shopify/flash-list";

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
    <View style={styles.container}>
      <FlashList
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
        estimatedItemSize={200}
      >
        {/* <FlatList
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
        ></FlatList> */}
      </FlashList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "flex-start",
    padding: 12,
  },
  row: {
    flexDirection: "row",
  },
});

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import FavoriteCard from "../../components/FavoriteCard";
import { useMockedData } from "../../hooks/useSelectedData";
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
  const { data } = useMockedData(); // hämtar datan via min hook
  const chunkedCards = arrayChunk(data, 3);

  return (
    <View style={styles.container}>
      <FlatList
        alwaysBounceVertical={false}
        data={chunkedCards}
        renderItem={({ item }) => (
          <View style={styles.row}>
            {item.map((card) => (
              <TouchableOpacity
                key={card.id}
                onPress={() =>
                  navigation.navigate("Detail", {
                    selectedCard: card,
                  })
                }
              >
                <FavoriteCard selectedCard={card} />
              </TouchableOpacity>
            ))}
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  row: {
    flexDirection: "row",
  },
});

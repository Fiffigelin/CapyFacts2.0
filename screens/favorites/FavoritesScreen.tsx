import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, View } from "react-native";
import FavoriteCard from "../../components/FavoriteCard";
import { cards } from "../../data";
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

export default function FavoritesScreen(props: FavoritesScreenProps) {
  const chunkedCards = arrayChunk(cards, 2);

  return (
    <View style={styles.container}>
      <FlatList
        alwaysBounceVertical={false}
        data={chunkedCards}
        renderItem={({ item }) => (
          <View style={styles.row}>
            {item.map((card) => (
              <FavoriteCard key={card.id} props={card.id} />
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
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

import { StyleSheet, Button, View } from "react-native";
import { FavoriteStackScreens } from "../../navigators/FavoritesStackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type FavoritesScreenProps = {
  navigation: NativeStackNavigationProp<FavoriteStackScreens, "Favorites">;
};

export default function FavoritesScreen(props: FavoritesScreenProps) {
  return (
    <View style={styles.container}>
      <Button
        title="A fav"
        onPress={() => props.navigation.navigate("Detail")}
      />
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
});

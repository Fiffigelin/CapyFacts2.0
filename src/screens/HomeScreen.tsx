import { StyleSheet, View } from "react-native";
import CapyCard from "../components/CapyCard";
import { cards } from "../../data";

const randomIndex = Math.floor(Math.random() * cards.length);
const randomCard = cards[randomIndex];
console.log(randomCard);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CapyCard capyFact={randomCard} />
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

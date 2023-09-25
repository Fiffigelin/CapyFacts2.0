import { StyleSheet, View } from "react-native";
import CapyCard from "../components/CapyCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CapyCard />
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

import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import CapyCard from "../components/CapyCard";
import { useNewDataContext } from "../context/NewDataContext";

export default function HomeScreen() {
  const { newCapy, createNewCapy } = useNewDataContext();

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
      <View>
        <CapyCard
          id={newCapy?.id as string}
          image={newCapy?.image as string}
          fact={newCapy?.fact as string}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button textColor="#66443e" mode="elevated" onPress={createNewCapy}>
          New CapyFact
        </Button>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "center",
  },
});

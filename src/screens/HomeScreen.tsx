import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import CapyCard from "../components/CapyCard";
import { useNewDataContext } from "../context/NewDataContext";

export default function HomeScreen() {
  const { newCapy, createNewCapy } = useNewDataContext();

  return (
    <View style={styles.container}>
      <CapyCard
        id={newCapy?.id as string}
        image={newCapy?.image as string}
        fact={newCapy?.fact as string}
      />
      <Button onPress={createNewCapy}>New Capy</Button>
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

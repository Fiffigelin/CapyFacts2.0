import { StyleSheet, View } from "react-native";
import CapyCard from "../components/CapyCard";
import useFactData from "../hooks/useFactData";
import useImageData from "../hooks/useImageData";
import { Button } from "react-native-paper";
import { useNewCapyContext } from "../context/NewCapyContext";

export default function HomeScreen() {
  const { imageData } = useImageData();
  const { factData } = useFactData();
  const { newCapy, createNewCapy } = useNewCapyContext();

  return (
    <View style={styles.container}>
      <CapyCard id={newCapy?.id} image={newCapy?.image} fact={newCapy?.fact} />
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

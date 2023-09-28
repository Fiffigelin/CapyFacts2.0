import { StyleSheet, View } from "react-native";
import CapyCard from "../components/CapyCard";
import useFactData from "../hooks/useFactData";
import useImageData from "../hooks/useImageData";

export default function HomeScreen() {
  const { imageData } = useImageData();
  const { factData } = useFactData();

  return (
    <View style={styles.container}>
      <CapyCard imageData={imageData} factData={factData} />
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

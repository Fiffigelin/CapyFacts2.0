import { StyleSheet, View } from "react-native";
import CapyCard from "../components/CapyCard";
import useImageData from "../hooks/useImageData";

export default function HomeScreen() {
  const { imageData, refetch } = useImageData();

  return (
    <View style={styles.container}>
      <CapyCard imageData={imageData} />
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

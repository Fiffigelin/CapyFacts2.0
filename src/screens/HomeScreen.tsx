import { useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import CapyCard from "../components/CapyCard";
import { useNewDataContext } from "../context/NewDataContext";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function HomeScreen() {
	const { newCapy, createNewCapy } = useNewDataContext();
	const bottomTabBarHeight = useBottomTabBarHeight();
	const { colors } = useTheme();

	return (
		<View
			style={[
				styles.background,
				{
					backgroundColor: colors.background,
					paddingBottom: bottomTabBarHeight,
				},
			]}
		>
			<View>
				<CapyCard
					id={newCapy?.id as string}
					image={newCapy?.image as string}
					fact={newCapy?.fact as string}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					uppercase={true}
					textColor={colors.onPrimary}
					buttonColor={colors.primary}
					mode="elevated"
					onPress={createNewCapy}
				>
					New CapyFact
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonContainer: {
		borderRadius: 8,
		justifyContent: "center",
	},
});

import { useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import CapyCard from "../components/CapyCard";
import { useNewDataContext } from "../context/NewDataContext";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import StyledButton from "../components/StyledButton";

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
			<CapyCard
				id={newCapy?.id as string}
				image={newCapy?.image as string}
				fact={newCapy?.fact as string}
			/>
			<View style={styles.buttonContainer}>
				<StyledButton
					mode="primary"
					title="New CapyFact"
					onPress={createNewCapy}
					uppercase={true}
				/>
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

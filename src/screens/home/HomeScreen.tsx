import { View } from "react-native";
import CapyCard from "../../components/CapyCard";
import { useNewDataContext } from "../../context/NewDataContext";
import StyledButton from "../../components/StyledButton";
import useHomeStyle from "./hooks/useHomeStyle";

export default function HomeScreen() {
	const { newCapy, createNewCapy } = useNewDataContext();
	const { style } = useHomeStyle();

	return (
		<View style={[style.background]}>
			<CapyCard
				id={newCapy?.id as string}
				image={newCapy?.image as string}
				fact={newCapy?.fact as string}
			/>
			<View style={style.buttonContainer}>
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

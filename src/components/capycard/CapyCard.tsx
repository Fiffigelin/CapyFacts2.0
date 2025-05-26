import React, { useCallback, useState } from "react";
import SmsModal from "../smsModal/SmsModal";
import useCapyCardStyle from "./hooks/useCapyCardStyle";

import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Card, Snackbar as SnackBar } from "react-native-paper";
import { useFavoriteCapy } from "./hooks/useFavoriteCapy";

type Props = {
	id: string;
	image: string;
	fact: string;
};

export default function CapyCard({ id, image, fact }: Props) {
	const { style, error, primary } = useCapyCardStyle();
	const { isFavorite, handleFavoriteToggle, alreadyFavorite } = useFavoriteCapy(
		id,
		image,
		fact
	);

	const [openModal, setOpenModal] = useState<boolean>(false);
	const [showSnackBar, setSnackBar] = useState<boolean>(alreadyFavorite);

	const handleShowingModal = useCallback(() => {
		setOpenModal((prev) => !prev);
	}, []);

	const handleShowSnackBar = useCallback(() => {
		setSnackBar((prev) => !prev);
	}, []);

	return (
		<>
			<View style={style.container}>
				<Card style={style.cardContainer}>
					<Card.Cover source={{ uri: image }} style={style.cardCover} />
					<Card.Content style={style.cardContent}>
						<Text style={style.factText}>{fact}</Text>
					</Card.Content>
				</Card>
				<View style={style.buttonContainer}>
					<TouchableOpacity onPress={handleFavoriteToggle}>
						{isFavorite ? (
							<MaterialIcons name="favorite" size={30} color={error} />
						) : (
							<MaterialIcons
								style={{ justifyContent: "flex-start" }}
								name="favorite-outline"
								color={primary}
								size={30}
							/>
						)}
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setOpenModal(true)}>
						<Feather name="send" size={30} color={primary} />
					</TouchableOpacity>
				</View>
				<SmsModal
					visible={openModal}
					onClose={handleShowingModal}
					fact={fact}
				/>
			</View>
			{showSnackBar && (
				<SnackBar
					style={style.snackbarStyle}
					visible={showSnackBar}
					onDismiss={handleShowSnackBar}
					action={{
						label: "Close",
						labelStyle: style.snackbarText,
						onPress: handleShowSnackBar,
					}}
				>
					<Text style={style.snackbarText}>
						CapyCard already exists in favorites
					</Text>
				</SnackBar>
			)}
		</>
	);
}

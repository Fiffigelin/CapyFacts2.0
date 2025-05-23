import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, useTheme } from "react-native-paper";
import { useFavoriteContext } from "../context/FavoriteContext";
import { randomId } from "../utilities/RandomIdGenerator";
import SmsModal from "./SmsModal";
import Snackbar from "./Snackbar";

type Props = {
	id: string;
	image: string;
	fact: string;
};

export default function CapyCard({ id, image, fact }: Props) {
	const [isFavorite, setIsFavorite] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [alreadyFavorite, setAlreadyFavorite] = useState(false);
	const { createFavorite, deleteFavorite, favorites } = useFavoriteContext();

	const { colors } = useTheme();

	function favoritesOnPress() {
		const newIsFavorite = !isFavorite;
		setIsFavorite(newIsFavorite);

		if (newIsFavorite) {
			const existingFavorite = favorites.find(
				(fav) => fav.image === image && fav.fact === fact
			);
			if (existingFavorite) {
				setAlreadyFavorite(true);
				setIsFavorite(false);

				setTimeout(() => {
					setAlreadyFavorite(false);
				}, 3000);
			} else if (!existingFavorite) {
				const existingId = favorites.find((fav) => fav.id === id);

				if (existingId) {
					id = randomId();
				}

				createFavorite(id, image, fact);
			}
		} else {
			deleteFavorite(id);
		}
	}

	useEffect(() => {
		const capy = favorites.find((favorite) => favorite.id === id);

		setIsFavorite(!!capy);
	}, [id, favorites]);

	const handleShowingModal = useCallback(() => {
		setOpenModal((prev) => !prev);
	}, []);

	return (
		<>
			<View style={styles.container}>
				<Card
					style={[styles.cardContainer, { backgroundColor: colors.surface }]}
				>
					<Card.Cover
						source={{ uri: image }}
						style={{
							width: 350,
							height: 350,
							resizeMode: "contain",
						}}
					/>
					<Card.Content style={{ paddingTop: 12, paddingBottom: 12 }}>
						<Text
							style={{
								fontSize: 24,
								textAlign: "justify",
								color: colors.onSurface,
							}}
						>
							{fact}
						</Text>
					</Card.Content>
				</Card>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={favoritesOnPress}>
						{isFavorite ? (
							<MaterialIcons name="favorite" size={30} color={colors.error} />
						) : (
							<MaterialIcons
								style={{ justifyContent: "flex-start" }}
								name="favorite-outline"
								color={colors.primary}
								size={30}
							/>
						)}
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setOpenModal(true)}>
						<Feather name="send" size={30} color={colors.primary} />
					</TouchableOpacity>
				</View>
				<SmsModal
					visible={openModal}
					onClose={handleShowingModal}
					fact={fact}
				/>
			</View>
			{alreadyFavorite && <Snackbar props={alreadyFavorite} />}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "flex-end",
		justifyContent: "center",
		padding: 20,
	},
	cardContainer: {
		alignItems: "center",
		justifyContent: "center",
		width: 350,
	},
	buttonContainer: {
		flexDirection: "row",
		padding: 10,
		gap: 20,
	},
});

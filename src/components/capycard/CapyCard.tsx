import React, { useCallback, useRef, useState } from "react";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { captureRef } from "react-native-view-shot";

import useCapyCardStyle from "./hooks/useCapyCardStyle";
import Shimmer from "../shimmer/Shimmer";

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

	const [showSnackBar, setSnackBar] = useState<boolean>(alreadyFavorite);
	const handleShowSnackBar = useCallback(() => {
		setSnackBar((prev) => !prev);
	}, []);

	const cardRef = useRef<View>(null);

	const handleShare = async () => {
		try {
			if (!(await Sharing.isAvailableAsync())) {
				alert("Sharing is not supported on this device");
				return;
			}

			const uri = await captureRef(cardRef, {
				format: "png",
				quality: 1,
			});

			const fileUri = FileSystem.cacheDirectory + "CapyCard.png";
			await FileSystem.copyAsync({ from: uri, to: fileUri });

			await Sharing.shareAsync(fileUri, {
				dialogTitle: "Share CapyCard",
			});
		} catch (error) {
			console.error("Something went wrong when sharing ", error);
		}
	};

	return (
		<>
			<View style={style.container}>
				<Card ref={cardRef} collapsable={false} style={style.cardContainer}>
					{image ? (
						<Card.Cover source={{ uri: image }} style={style.cardCover} />
					) : (
						<Shimmer mode={"image"} shimmerHeight={300} shimmerWidth={350} />
					)}
					{fact ? (
						<Card.Content style={style.cardContent}>
							<Text style={style.factText}>{fact}</Text>
						</Card.Content>
					) : (
						<Card.Content style={style.cardContent}>
							<Shimmer mode={"text"} />
						</Card.Content>
					)}
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
					<TouchableOpacity onPress={handleShare}>
						<Feather name="send" size={30} color={primary} />
					</TouchableOpacity>
				</View>
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

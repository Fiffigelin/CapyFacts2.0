import React from "react";
import {
	Modal,
	Pressable,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SMS from "./SMS";
import { Button, useTheme } from "react-native-paper";

type SmsModalProps = {
	visible: boolean;
	onClose: () => void;
	fact: string;
};

export default function SmsModal({ visible, onClose, fact }: SmsModalProps) {
	const { colors } = useTheme();
	return (
		<Modal
			visible={visible}
			animationType="slide"
			transparent={true}
			style={styles.container}
		>
			<View style={styles.container}>
				<View
					style={[styles.smsContainer, { backgroundColor: colors.background }]}
				>
					<View style={styles.close}>
						<Pressable onPress={onClose}>
							<MaterialIcons
								name="close"
								size={32}
								color={colors.onBackground}
							/>
						</Pressable>
					</View>
					<SMS props={fact} />
				</View>
			</View>
		</Modal>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	smsContainer: {
		padding: 15,
		width: "90%",
		height: "auto",
		borderRadius: 10,
	},
	close: {
		alignItems: "flex-end",
	},
});

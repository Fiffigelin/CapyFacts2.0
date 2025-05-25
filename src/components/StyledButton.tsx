import { Button, useTheme } from "react-native-paper";

type Props = {
	onPress: () => void;
	title: string;
	mode: "primary" | "secondary";
	disabled?: boolean;
	uppercase?: boolean;
};
export default function StyledButton({
	onPress,
	title,
	mode,
	disabled = false,
	uppercase = false,
}: Props) {
	const { colors } = useTheme();
	const buttonColor = mode === "primary" ? colors.primary : colors.secondary;
	const buttonTextColor =
		mode === "primary" ? colors.onPrimary : colors.onSecondary;

	return (
		<Button
			uppercase={uppercase}
			textColor={buttonTextColor}
			buttonColor={buttonColor}
			mode="elevated"
			onPress={onPress}
			disabled={disabled}
			style={{ borderRadius: 8 }}
		>
			{title}
		</Button>
	);
}

import { useTheme } from "react-native-paper";

export default function useRootStyle() {
	const { colors } = useTheme();

	const primary = colors.primary;
	const onPrimary = colors.onPrimary;
	const background = colors.background;
	const onBackground = colors.onBackground;
	const surface = colors.surface;
	const onSurface = colors.onSurface;
	const secondary = colors.secondary;
	const onSecondary = colors.onSecondary;
	const error = colors.error;
	const onError = colors.onError;
	const tertiary = colors.tertiary;
	const onTertiary = colors.onTertiary;

	return {
		primary,
		onPrimary,
		background,
		onBackground,
		surface,
		onSurface,
		secondary,
		onSecondary,
		error,
		onError,
		tertiary,
		onTertiary,
	};
}

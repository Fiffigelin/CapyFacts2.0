import { StyleSheet } from "react-native";
import useRootStyle from "../../styles/useRootStyle";

export default function useNavigationStyle() {
	const {
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
	} = useRootStyle();

	const HeaderStyle = StyleSheet.create({
		headerContainer: {
			flexDirection: "row",
			position: "absolute",
			top: 0,
			right: 0,
			alignItems: "center",
			justifyContent: "flex-end",
			paddingVertical: 20,
			backgroundColor: "transparent",
			zIndex: 10,
		},
		headerText: {
			fontWeight: "bold",
			fontSize: 16,
			color: onBackground,
		},
		margin10: {
			margin: 10,
		},
	});

	const TabNav = StyleSheet.create({
		margin10: {
			margin: 10,
		},
		tabBar: {
			position: "absolute",
			borderColor: "transparent",
			borderTopLeftRadius: 20,
			borderTopRightRadius: 20,
		},
		tabBarBackground: {
			...StyleSheet.absoluteFillObject,
			borderTopLeftRadius: 20,
			borderTopRightRadius: 20,
			overflow: "hidden",
			backgroundColor: background,
		},
		tabBarButton: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
	});

	const Font16 = {
		fontsize: 16,
	};

	const StackHeaderStyle = {
		backgroundColor: background,
	};

	const StackHeaderTitleStyle = {
		color: onBackground,
	};

	const Root = {
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

	return {
		HeaderStyle,
		TabNav,
		Font16,
		StackHeaderStyle,
		StackHeaderTitleStyle,
		Root,
	};
}

import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, Dimensions } from "react-native";
import useShimmerStyle from "./hooks/useShimmerStyle";

type Props = {
	mode: "text" | "image" | "combined";
	shimmerWidth?: number;
	shimmerHeight?: number;
};

export default function Shimmer({ mode, shimmerWidth, shimmerHeight }: Props) {
	const { width } = Dimensions.get("screen");
	const { styles } = useShimmerStyle();

	if (!shimmerWidth) {
		shimmerWidth = width;
	}
	const translateX = useRef(new Animated.Value(-350)).current;

	useEffect(() => {
		Animated.loop(
			Animated.timing(translateX, {
				toValue: width,
				duration: 1500,
				useNativeDriver: true,
			})
		).start();
	}, []);

	const getShimmerMode = (): React.ReactNode => {
		switch (mode) {
			case "text":
				return (
					<View style={[styles.shimmerContainer, styles.card]}>
						<View style={[styles.box, styles.text3]} />
						<View style={[styles.box, styles.text2]} />
						<View style={[styles.box, styles.text]} />
						<Animated.View
							style={[
								StyleSheet.absoluteFillObject,
								styles.shimmer,
								{ transform: [{ translateX }] },
							]}
						/>
					</View>
				);
			case "image":
				return (
					<View
						style={[
							styles.shimmerContainer,
							styles.image,
							{ width: shimmerWidth },
						]}
					>
						<View style={[styles.box, { height: shimmerHeight }]} />
						<Animated.View
							style={[
								StyleSheet.absoluteFillObject,
								styles.shimmer,
								{ transform: [{ translateX }] },
							]}
						/>
					</View>
				);
			case "combined":
				return <View style={styles.box} />;
			default:
				return <View />;
		}
	};

	return <View style={styles.container}>{getShimmerMode()}</View>;
}

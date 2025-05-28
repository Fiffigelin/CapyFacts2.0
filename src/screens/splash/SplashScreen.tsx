import { View, Image, ActivityIndicator } from "react-native";
import useSplashStyle from "./hooks/useSplashStyle";

export default function SplashScreen() {
	const { style, onBackground, splashImage } = useSplashStyle();

	return (
		<View style={style.background}>
			<Image source={splashImage} style={style.image} />
			<ActivityIndicator
				animating={true}
				color={onBackground}
				size={320}
				style={style.activityIndicator}
			/>
		</View>
	);
}

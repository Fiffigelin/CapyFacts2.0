import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ThemeContextType = {
	isDarkMode: boolean;
	toggleTheme: () => void;
	isLoading: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
	isDarkMode: false,
	toggleTheme: () => {},
	isLoading: true,
});
const STORAGE_KEY = "overrideThemeMode";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const systemTheme = useColorScheme();
	const [overrideTheme, setOverrideTheme] = useState<"dark" | "light" | null>(
		null
	);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadTheme = async () => {
			const stored = await AsyncStorage.getItem(STORAGE_KEY);
			if (stored === "dark" || stored === "light") {
				setOverrideTheme(stored);
			}
			setIsLoading(false);
		};
		loadTheme();
	}, []);

	const isDarkMode = overrideTheme
		? overrideTheme === "dark"
		: systemTheme === "dark";

	const toggleTheme = async () => {
		const newTheme = isDarkMode ? "light" : "dark";
		await AsyncStorage.setItem(STORAGE_KEY, newTheme);
		setOverrideTheme(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ isLoading, isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);

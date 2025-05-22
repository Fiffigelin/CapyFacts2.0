import React, { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeContextType = {
	isDarkMode: boolean;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
	isDarkMode: false,
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const systemTheme = useColorScheme();
	const [isDarkMode, setIsDarkMode] = useState(systemTheme === "dark");

	const toggleTheme = () => setIsDarkMode((prev) => !prev);
	console.log(isDarkMode);

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);

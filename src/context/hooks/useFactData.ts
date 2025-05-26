import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { FactResponse } from "../../types/Types";

export default function useFactData() {
	const [factData, setFactData] = useState<string | undefined>(undefined);

	const FetchRandomFact = async () => {
		try {
			const response = await fetch("https://api.capy.lol/v1/fact?json=true");
			const fact: FactResponse = await response.json();

			if (fact.success) {
				const factString = fact.data.fact;
				await AsyncStorage.setItem("dailyFact", factString);

				setFactData(factString);
				return factString;
			} else {
				console.log("Api request failed");
			}
		} catch (error) {
			console.error("Error fetching fact: ", error);
		}
	};

	useEffect(() => {
		const getCache = async () => {
			try {
				const cachedFact = await AsyncStorage.getItem("dailyFact");
				if (cachedFact) {
					setFactData(cachedFact);
				} else {
					FetchRandomFact();
				}
			} catch (error) {
				console.error("Error getting cached fact: ", error);
			}
		};

		getCache();
	}, []);

	return { factData, refetchFact: FetchRandomFact };
}

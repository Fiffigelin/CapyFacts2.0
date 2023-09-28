import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useState } from "react";
import { Favorite } from "../types/Types";

export default function useFavoriteData() {
  const [favoritesData, setFavoritesData] = useState<Favorite[] | undefined>(
    []
  );

  const fetchFavorites = useCallback(async () => {
    try {
      const cachedFavorites = await AsyncStorage.getItem("favorites");
      if (cachedFavorites) {
        const parsedFavorites: Favorite[] = JSON.parse(cachedFavorites);
        setFavoritesData(parsedFavorites);
      }
    } catch (error) {
      console.error("Error fetching favorites: ", error);
    }
  }, []);

  const saveFavorite = useCallback(
    async (favorite: Favorite) => {
      try {
        // Hämtar favoriter från AsyncStorage
        const cachedFavorites = await AsyncStorage.getItem("favorites");
        const parsedFavorites: Favorite[] = cachedFavorites
          ? JSON.parse(cachedFavorites)
          : [];

        parsedFavorites.push(favorite);

        // Spara de uppdaterade favoriterna till AsyncStorage
        await AsyncStorage.setItem(
          "favorites",
          JSON.stringify(parsedFavorites)
        );

        // Uppdatera state med de nya favoriterna
        setFavoritesData(parsedFavorites);
      } catch (error) {
        console.error("Error saving favorite: ", error);
      }
    },
    [setFavoritesData]
  );

  const deleteFavoriteFromAsyncStorage = useCallback(
    async (id: string) => {
      try {
        const cachedFavorites = await AsyncStorage.getItem("favorites");
        if (cachedFavorites) {
          const parsedFavorites: Favorite[] = JSON.parse(cachedFavorites);

          const updatedFavorites = parsedFavorites.filter(
            (favorite) => favorite.id !== id
          );

          await AsyncStorage.setItem(
            "favorites",
            JSON.stringify(updatedFavorites)
          );

          setFavoritesData(updatedFavorites);
        }
      } catch (error) {
        console.error("Error deleting favorite from AsyncStorage: ", error);
      }
    },
    [setFavoritesData]
  );

  return {
    favoritesData,
    fetchFavorites,
    saveFavorite,
    deleteFavoriteFromAsyncStorage,
  };
}

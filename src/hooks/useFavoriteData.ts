import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useState } from "react";
import { Favorite } from "../types/Types";

export default function useFavoriteData() {
  const [favoritesData, setFavoritesData] = useState<Favorite[] | undefined>(
    []
  );

  const fetchFavoritesStorage = useCallback(async () => {
    try {
      const cachedFavorites = await AsyncStorage.getItem("favorites");
      if (cachedFavorites) {
        const parsedFavorites: Favorite[] = JSON.parse(cachedFavorites);
        // setFavoritesData(parsedFavorites);
        return parsedFavorites;
      }
    } catch (error) {
      console.error("Error fetching favorites: ", error);
    }
  }, []);

  const saveFavoriteStorage = useCallback(
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
        // console.log({ parsedFavorites });

        // Uppdatera state med de nya favoriterna
        setFavoritesData(parsedFavorites);
      } catch (error) {
        console.error("Error saving favorite: ", error);
      }
    },
    [setFavoritesData]
  );

  const deleteFavoriteStorage = useCallback(
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

  //felhantering
  async function logCachedFavorites() {
    try {
      const cachedFavorites = await AsyncStorage.getItem("favorites");
      if (cachedFavorites) {
        const parsedFavorites: Favorite[] = JSON.parse(cachedFavorites);
        console.log("Cached favorites from AsyncStorage:", parsedFavorites);
      } else {
        console.log("No cached favorites found in AsyncStorage.");
      }
    } catch (error) {
      console.error("Error fetching cached favorites: ", error);
    }
  }

  return {
    favoritesData,
    fetchFavoritesStorage,
    saveFavoriteStorage,
    deleteFavoriteStorage,
    logCachedFavorites,
  };
}

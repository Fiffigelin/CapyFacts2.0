import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useFactData from "../hooks/useFactData";
import useFavoriteData from "../hooks/useFavoriteData";
import useImageData from "../hooks/useImageData";
import { Favorite } from "../types/Types";
import { randomId } from "../utilities/RandomIdGenerator";

type FavoriteContextType = {
  createFavorite: (id: string, image:string, fact:string) => void;
  deleteFavorite: (id: string) => void;
  favorites: Favorite[];
  dailyFavorite: string | undefined;
};

const FavoriteContext = createContext({} as FavoriteContextType);

export function useFavoriteContext() {
  return useContext(FavoriteContext);
}

export function FavoriteProvider(props: PropsWithChildren) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [dailyFavorite, setDailyFavorite] = useState<string>();
  const { imageData, refetchImage } = useImageData();
  const { factData, refetchFact } = useFactData();
  const {
    favoritesData,
    fetchFavoritesStorage,
    saveFavoriteStorage,
    deleteFavoriteStorage,
    logCachedFavorites,
  } = useFavoriteData();

  async function getFavorites() {
    // hämta all cachad data från asyncStorage
    const fetchedFavorites = await fetchFavoritesStorage();

    if (fetchedFavorites) {
      // console.log(fetchedFavorites);
      setFavorites(fetchedFavorites);
      logCachedFavorites();
    } else {
      console.log("No chached favorites available");
    }
  }

  async function createFavorite(id: string, image: string, fact: string) {
    const newFavorite: Favorite = {
      id: id,
      image: image,
      fact: fact,
    };

    setFavorites([...favorites, newFavorite]);
    await saveFavoriteStorage(newFavorite);
    setDailyFavorite(newFavorite.id);
    console.log(`created ${dailyFavorite} + ${newFavorite.id}`);
  }

  function deleteFavorite(id: string) {
    // ta bort favoriten både i staten OCH i asyncStorage
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);

    setFavorites(updatedFavorites);
    deleteFavoriteStorage(id);
    if (id === dailyFavorite) {
      setDailyFavorite("");
    }
    console.log(id);
  }

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <FavoriteContext.Provider
      value={{
        createFavorite,
        deleteFavorite,
        favorites,
        dailyFavorite,
      }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
}

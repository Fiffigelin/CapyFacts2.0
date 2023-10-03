import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useFavoriteData from "../hooks/useFavoriteData";
import { Capy } from "../types/Types";

type FavoriteContextType = {
  createFavorite: (id: string, image: string, fact: string) => void;
  deleteFavorite: (id: string) => void;
  favorites: Capy[];
  dailyFavorite: string | undefined;
};

const FavoriteContext = createContext({} as FavoriteContextType);

export function useFavoriteContext() {
  return useContext(FavoriteContext);
}

export function FavoriteProvider(props: PropsWithChildren) {
  const [favorites, setFavorites] = useState<Capy[]>([]);
  const [dailyFavorite, setDailyFavorite] = useState<string>();
  const {
    fetchFavoritesStorage,
    saveFavoriteStorage,
    deleteFavoriteStorage,
    logCachedFavorites,
  } = useFavoriteData();

  async function getFavorites() {
    const fetchedFavorites = await fetchFavoritesStorage();

    if (fetchedFavorites) {
      setFavorites(fetchedFavorites);
      logCachedFavorites();
    } else {
      console.log("No chached favorites available");
    }
  }

  async function createFavorite(id: string, image: string, fact: string) {
    const newFavorite: Capy = {
      id: id,
      image: image,
      fact: fact,
    };

    setFavorites([...favorites, newFavorite]);
    await saveFavoriteStorage(newFavorite);
    setDailyFavorite(newFavorite.id);
  }

  function deleteFavorite(id: string) {
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

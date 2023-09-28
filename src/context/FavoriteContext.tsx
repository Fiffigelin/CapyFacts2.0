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
  createFavorite: () => void;
  deleteFavorite: (id: string) => void;
  favorites: Favorite[];
  dailyFavorite: string | undefined;
  isFavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
};

const FavoriteContext = createContext({} as FavoriteContextType);

export function useFavoriteContext() {
  return useContext(FavoriteContext);
}

export function FavoriteProvider(props: PropsWithChildren) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [dailyFavorite, setDailyFavorite] = useState<string>();
  const [isFavorite, setIsFavorite] = useState(false);
  const { imageData, refetchImage } = useImageData();
  const { factData, refetchFact } = useFactData();
  const {
    favoritesData,
    fetchFavoritesStorage,
    saveFavoriteStorage,
    deleteFavoriteStorage,
  } = useFavoriteData();

  async function getFavorites() {
    // hämta all cachad data från asyncStorage
    await fetchFavoritesStorage();

    if (favoritesData) {
      setFavorites(favoritesData);
    }
  }

  function createFavorite() {
    // ordna så datan cachas och skickas till asyncStorage och läggs in i statet

    const newFavorite: Favorite = {
      id: randomId(),
      image: imageData,
      fact: factData,
    };

    setFavorites([...favorites, newFavorite]);
    saveFavoriteStorage(newFavorite);
    setDailyFavorite(newFavorite.id);
  }

  function deleteFavorite(id: string) {
    // ta bort favoriten både i staten OCH i asyncStorage
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);

    setFavorites(updatedFavorites);
    deleteFavoriteStorage(id);
  }

  useEffect(() => {
    getFavorites();
    setIsFavorite(false);
  }, []);

  return (
    <FavoriteContext.Provider
      value={{
        createFavorite,
        deleteFavorite,
        favorites,
        dailyFavorite,
        isFavorite,
        setIsFavorite,
      }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
}

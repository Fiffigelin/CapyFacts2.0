import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useImageData from "../hooks/useImageData";
import useFactData from "../hooks/useFactData";

// Efter handledningen med David : context för dagliga bilden och faktan behövs inte.
// SKAPA istället en FavoritesContext.tsx som håller tillfälligt datan med alla favoriter

type Capy = {
  id: string;
  image: string | undefined;
  fact: string | undefined;
};

type DataContext = {
  newFavorite: () => void;
  deleteFavorite: () => void;
  dailyFact: Capy | undefined;
  favorites: Capy[];
};

const DataContext = createContext({} as DataContext);

export function useData() {
  return useContext(DataContext);
}

export function DataProvider(props: PropsWithChildren) {
  const [dailyFact, setDailyFact] = useState<Capy | undefined>(undefined);
  const [favorites, setFavorites] = useState<Capy[]>([]);
  const { imageData, refetchImage } = useImageData();
  const { factData, refetchFact } = useFactData();

  async function getData() {
    try {
      if (!imageData && !factData) {
        // await refetchImage();
        // await refetchFact();
      }
      const newDailyFact = {
        id: "daily",
        image: imageData || undefined,
        fact: factData || undefined,
      };
      setDailyFact(newDailyFact);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  function newFavorite() {
    // ordna så datan cachas och skickas till asyncStorage och läggs in i statet
  }

  function deleteFavorite() {
    // ta bort favoriten både i staten OCH i asyncStorage
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{ newFavorite, deleteFavorite, dailyFact, favorites }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

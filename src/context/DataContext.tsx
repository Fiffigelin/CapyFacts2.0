import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useImageData from "../hooks/useImageData";
import { Capy } from "../../data/index";

// type capyFact = capyFactInterface;
// ska hooken tillhandahålla interfacet och skicka in all data därifrån?

type DataContext = {
  getData: () => void;
  newFavorite: () => void;
  deleteFavorite: () => void;
  dailyFact: Capy | null;
};

const DataContext = createContext({} as DataContext);

export function useData() {
  return useContext(DataContext);
}

export function DataProvider(props: PropsWithChildren) {
  const [dailyFact, setDailyFact] = useState<Capy | null>(null);
  const [favorites, setFavorites] = useState<Capy[]>([]);
  const { imageData, refetch } = useImageData();

  async function getData() {
    try {
      if (!imageData) {
        await refetch();
      }
      const newDailyFact = {
        id: 1,
        image: imageData || "",
        fact: "Lite fakta",
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
    // ta bort favoriten
  }

  function dailyFactCard() {
    // ordna den nya capybara-cardet-infon. hur tusan ska jag ordna detta?
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{ getData, newFavorite, deleteFavorite, dailyFact }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

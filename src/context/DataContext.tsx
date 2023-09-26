import { PropsWithChildren, createContext, useContext, useState } from "react";

interface capyFactInterface {
  id: number;
  image: string;
  fact: string;
}

type capyFact = capyFactInterface;
// ska hooken tillhandahålla interfacet och skicka in all data därifrån?

type DataContext = {
  getData: () => void;
  postNewFavorite: () => void;
  deleteFavorite: () => void;
  getDailyFact: () => void;
};

const DataContext = createContext({} as DataContext);

export function useData() {
  return useContext(DataContext);
}

export function DataProvider(props: PropsWithChildren) {
  const [dailyFact, setDailyFact] = useState<capyFact>();
  const [favorites, setFavorites] = useState<capyFact[]>([]);

  function getData() {
    // här hämtas datan från hooken som talar med apiet och asyncStorage - tror jag :)
  }

  function postNewFavorite() {
    // ordna så datan cachas och skickas till asyncStorage och läggs in i statet
  }

  function deleteFavorite() {
    // ta bort favoriten
  }

  function getDailyFact() {
    // ordna den nya capybara-cardet-infon. hur tusan ska jag ordna detta?
  }

  return (
    <DataContext.Provider
      value={{ getData, postNewFavorite, deleteFavorite, getDailyFact }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

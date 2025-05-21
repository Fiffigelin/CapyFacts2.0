import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useFactData from "../hooks/useFactData";
import useImageData from "../hooks/useImageData";
import useDataStorage from "../hooks/useNewData";
import { Capy } from "../types/Types";
import { randomId } from "../utilities/RandomIdGenerator";

type NewDataContextType = {
  newCapy?: Capy;
  createNewCapy: () => void;
  deleteNewCapy: (id: string) => void;
};

const NewDataContext = createContext({} as NewDataContextType);

export function useNewDataContext() {
  return useContext(NewDataContext);
}

export function NewDataProvider(props: PropsWithChildren) {
  const [newCapy, setNewCapy] = useState<Capy>();
  const {
    fetchDataStorage,
    saveDataStorage,
    logCachedData,
    deleteDataStorage,
  } = useDataStorage();
  const { refetchImage } = useImageData();
  const { refetchFact } = useFactData();

  async function getData() {
    const fetchedData = await fetchDataStorage();

    if (fetchedData) {
      setNewCapy(fetchedData);
      logCachedData();
      return true;
    } else {
      console.log("No chached data available");
      return false;
    }
  }

  async function createNewCapy() {
    const imageURL = await refetchImage();
    const factURL = await refetchFact();

    const newCapy: Capy = {
      id: randomId(),
      image: imageURL as string,
      fact: factURL as string,
    };

    await saveDataStorage(newCapy);
    setNewCapy(newCapy);
  }

  async function deleteNewCapy(id: string) {
    await deleteDataStorage(id);
  }

  useEffect(() => {
    async function fetchData() {
      const success = await getData();
      if (!success) {
        createNewCapy();
      }
    }

    fetchData();
  }, []);

  return (
    <NewDataContext.Provider value={{ newCapy, createNewCapy, deleteNewCapy }}>
      {props.children}
    </NewDataContext.Provider>
  );
}

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Favorite } from "../types/Types";
import useImageData from "../hooks/useImageData";
import useFactData from "../hooks/useFactData";
import useDataStorage from "../hooks/useNewData";
import { randomId } from "../utilities/RandomIdGenerator";

type NewCapyContextType = {
  newCapy?: Favorite;
  createNewCapy: () => void;
};

const NewCapyContext = createContext({} as NewCapyContextType);

export function useNewCapyContext() {
  return useContext(NewCapyContext);
}

export function NewCapyProvier(props: PropsWithChildren) {
  const [newCapy, setNewCapy] = useState<Favorite>();
  const { newData, fetchDataStorage, saveDataStorage, logCachedData } =
    useDataStorage();
  const { imageData, refetchImage } = useImageData();
  const { factData, refetchFact } = useFactData();

  async function getData() {
    const fetchedData = await fetchDataStorage();
    console.log("fetched data", fetchedData);

    if (fetchedData) {
      setNewCapy(fetchedData);
      console.log("newData", newCapy);
      logCachedData();
    } else {
      console.log("No chached data available");
    }
  }

  async function createNewCapy() {
    await refetchImage();
    await refetchFact();

    console.log(`new capy: ${imageData} ${factData}`);
    const newCapy: Favorite = {
      id: randomId(),
      image: imageData as string,
      fact: factData as string,
    };

    await saveDataStorage(newCapy);
    setNewCapy(newCapy);
    console.log("NewCapy : ", newCapy);
  }

  useEffect(() => {
    getData();
    if (newCapy) {
      createNewCapy();
    }
  }, []);

  return (
    <NewCapyContext.Provider value={{ newCapy, createNewCapy }}>
      {props.children}
    </NewCapyContext.Provider>
  );
}

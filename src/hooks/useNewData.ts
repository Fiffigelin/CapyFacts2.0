import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useState } from "react";
import { Capy } from "../types/Types";

export default function useDataStorage() {
  const [newData, setNewData] = useState<Capy | undefined>();

  const fetchDataStorage = useCallback(async () => {
    try {
      const cachedData = await AsyncStorage.getItem("newData");
      if (cachedData) {
        const parsedData: Capy = JSON.parse(cachedData);
        setNewData(parsedData);
        logCachedData();
        return parsedData;
      }
    } catch (error) {
      console.error("Error fetching new data: ", error);
    }
  }, []);

  const saveDataStorage = useCallback(
    async (favorite: Capy) => {
      try {
        if (favorite) {
          await AsyncStorage.setItem("newData", JSON.stringify(favorite));
          setNewData(favorite);
        } else {
          console.log("No data available to save");
        }
      } catch (error) {
        console.error("Error saving favorite: ", error);
      }
    },
    [setNewData]
  );

  //felhantering
  async function logCachedData() {
    try {
      const cachedData = await AsyncStorage.getItem("newData");
      if (cachedData) {
        const parsedData: Capy = JSON.parse(cachedData);
      } else {
        console.log("No cached data found in AsyncStorage.");
      }
    } catch (error) {
      console.error("Error fetching cached data: ", error);
    }
  }

  //felhantering
  const deleteDataStorage = useCallback(
    async (id: string) => {
      try {
        await AsyncStorage.removeItem("newData");
      } catch (error) {
        console.error("Error deleting favorite from AsyncStorage: ", error);
      }
    },
    [newData]
  );

  return {
    newData,
    fetchDataStorage,
    saveDataStorage,
    logCachedData,
    deleteDataStorage,
  };
}

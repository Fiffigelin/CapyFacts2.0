import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { ImageResponse } from "../types/Types";

export default function useImageData() {
  const [imageData, setImageData] = useState<string | undefined>(undefined);

  const fetchRandomImage = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.capy.lol/v1/capybara?json=true"
      );
      const image: ImageResponse = await response.json();

      if (image.success) {
        const imageUrl = image.data.url;

        await AsyncStorage.setItem("dailyImage", imageUrl);
        setImageData(imageUrl);

        return imageUrl;
      } else {
        console.log("Api request failed");
      }
    } catch (error) {
      console.error("Error fetching image: ", error);
    }
  }, []);

  useEffect(() => {
    const getCache = async () => {
      try {
        const cachedImage = await AsyncStorage.getItem("dailyImage");

        if (cachedImage) {
          setImageData(cachedImage);
        } else {
          fetchRandomImage();
        }
      } catch (error) {
        console.error("Error getting cached image: ", error);
      }
    };

    getCache();
  }, [fetchRandomImage]);

  return { imageData, refetchImage: fetchRandomImage };
}

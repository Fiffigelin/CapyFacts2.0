import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

type ApiResponse = {
  data: {
    alt: string;
    height: number;
    index: number;
    url: string;
    width: number;
  };
  success: boolean;
};

export default function useImageData() {
  const [imageData, setImageData] = useState<string>();

  const fetchRandomImage = async () => {
    try {
      const response = await fetch(
        "https://api.capy.lol/v1/capybara?json=true"
      );
      const data: ApiResponse = await response.json();

      if (data.success) {
        const imageUrl = data.data.url;
        await AsyncStorage.setItem("dailyImage", imageUrl);
        console.log(imageUrl);
        setImageData(imageUrl);
      } else {
        console.error("Api request failed");
      }
    } catch (error) {
      console.error("Error fetching image: ", error);
    }
  };

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
        console.log("Error getting cached image: ", error);
      }
    };

    getCache();
  }, []);

  return { imageData, refetch: fetchRandomImage };
}

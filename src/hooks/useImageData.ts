import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function useImageData() {
  const [imageData, setImageData] = useState<string>();

  const fetchRandomImage = async () => {
    try {
      const response = await fetch("https://api.capy.lol/v1/capybara/random");
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        const randomImage = data.data[0];
        const imageUrl: string = randomImage.url;

        await AsyncStorage.setItem("dailyImage", imageUrl);

        setImageData(imageUrl);
      } else {
        console.error("No image data found.");
      }
    } catch (error) {
      console.error("Error fetching random image:", error);
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

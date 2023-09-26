// mockHook.js
import { useState } from "react";
import { cards } from "../data/index";

export const useMockedData = () => {
  const [data, setData] = useState(cards);

  return {
    data,
  };
};

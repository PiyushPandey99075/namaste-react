import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, SetResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId + "&source=collection&query=Biryani"
    );
    const json = await data.json();
    SetResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;

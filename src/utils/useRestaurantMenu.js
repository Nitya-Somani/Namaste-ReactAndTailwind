import { MENU_API } from "../utils/commonLinks";
import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [resData, setresData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setresData(jsonData.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
      setresData([]); // Set to an empty array or appropriate default value
    }
  };

  return resData;
};

export default useRestaurantMenu;

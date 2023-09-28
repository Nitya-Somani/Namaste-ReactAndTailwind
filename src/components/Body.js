import React, { useState, useEffect } from "react";
import RestaurantCard,{isVegLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantWithLabel = isVegLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(restaurants);
      setOriginalData(restaurants);
      setFilteredResList(restaurants);
    } catch (error) {
      setFilteredResList([]);
    }
  };
  const handleSearch = () => {
    const listAfterSearch = originalData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
      restaurant.info.cuisines.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResList(listAfterSearch);
  };


  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if(onlineStatus == false)
  {return <div className="body"><div className="offlineStatus"><b>Connection Error .</b>
    <br/>
    <i>
    Looks like you are offline !!! Please check your internet connection .</i>
    <div>
  No internet
  <br/>
Try:<br/>

Checking the network cables, modem, and router<br/>
Reconnecting to Wi-Fi<br/>
Running Windows Network Diagnostics<br/>
ERR_INTERNET_DISCONNECTED<br/>
  </div>
    
    
    </div>
 
  
  
  </div>}
    
    console.log(originalData);
  return (
    <div className="body ">
  <div className="searching-bar">
  <div className="flex items-center justify-end space-x-4">
    <div className="relative w-full md:w-96"> 
      <input
        className="border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring focus:border-yellow-500 w-full"
        type="text"
        placeholder="Search for restaurant or cuisine"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          const listAfterSearch = originalData.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
          );

          setFilteredResList(listAfterSearch);
        }}
      />
      <button
        className="absolute right-3 top-2 text-gray-400 hover:text-yellow-500 focus:outline-none"
        onClick={handleSearch}
      >
        <i className="fa fa-search"></i>
      </button>
    </div>
  </div>
</div>


<div className="restaurantContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  {console.log(filteredResList)}
  {filteredResList.length === 0 && searchText.length === 0 ? (
    <Shimmer />
  ) : filteredResList.length === 0 && searchText.length > 0 ? (
    <div className="no-results-message text-center text-gray-600">
      No results found for '{searchText}'
    </div>
  ) : (
    filteredResList.map((restaurant) => (
      <Link
        key={restaurant?.info?.id}
        to={"/restaurants/" + restaurant?.info?.id}
        className="hover:shadow-lg transition duration-300"
      >
        <div className=" rounded-lg p-2 ">
          
          {/* if  the label off veg is true then return isVegLabel elese return restaurantcard  */}
          {restaurant?.info?.veg === true ? <RestaurantWithLabel resData={restaurant}/> :<RestaurantCard resData={restaurant} />}
        </div>
      </Link>
    ))
  )}
</div>


    </div>
  );
};

export default Body;

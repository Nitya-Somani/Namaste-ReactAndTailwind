import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7051457&lng=75.8559729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
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

  return (
    <div className="body">
      <div className="searching-bar">
       
        <div className="d-flex ms-auto nav-item search-form">
         
          <div className="search-wrapper">
            <input
              className="form-control me-2 p-1 ps-2"
              type="text"
              placeholder="Search for restaurant or cuisine "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                const listAfterSearch = originalData.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
          
              setFilteredResList(listAfterSearch);
              }}
            />
            <button className="search-button" onClick={handleSearch}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="restaurantContainer">
      {filteredResList.length === 0 && searchText.length === 0 ? (
          <Shimmer />
        ) : filteredResList.length === 0 && searchText.length > 0 ? (
          <div className="no-results-message">
            No results found for '{searchText}'
          </div>
        ) : (
          filteredResList.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              resData={restaurant}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = () => {
  const [filteredresList, setfilteredresList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7051457&lng=75.8559729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      setfilteredresList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      setfilteredresList([])
    }
  }




  return filteredresList.length === 0 ?<div className="body"><Shimmer/></div>:(
    <div className="body">
      <button className="filterButton" onClick={
        () => {
          console.log("button clicked")
          const newList = filteredresList.filter((restaurant) => restaurant.info.avgRating >= 4)
          setfilteredresList(newList)
        }
      }>
        <span className="hover-underline-animation"> Prime Dines </span>
        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
          <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
        </svg>
      </button>
      <div className="restaurantContainer">
        {/*to include the cards of restaurant we are  including restaurant card component  */}
        {
          filteredresList.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            )
          })

        }
      </div>
    </div>
  )

}
export default Body;
import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
  const [filteredresList, setfilteredresList] = useState(resList);
  return (
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
          filteredresList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  )
}

export default Body;
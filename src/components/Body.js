import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">Search Bar</div>
      <div className="restaurantContainer">
        {/*to include the cards of restaurant we are  including restaurant card component  */}
        {
          resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }

      </div>
    </div>
  )
}

export default Body;
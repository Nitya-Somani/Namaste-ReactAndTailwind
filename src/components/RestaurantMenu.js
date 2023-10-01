import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  const[showIndex,setShowindex] = useState(0);

  if (resData === null) return <Shimmer />;

  console.log(resData);
  const {
    name,
    cuisines,
    id,
    city,
    costForTwoMessage,
    cloudinaryImageId,
    avgRatingString,
    locality,
  } = resData.cards[0]?.card?.card?.info;

{/*type.googleapis.com/swiggy.presentation.food.v2.ItemCategory */}

  const { itemCards } =
    resData.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resData.cards[2].groupedCard?.cardGroupMap?.REGULAR);

  const filterItemcategory = resData.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(filterItemcategory);
  //this console.log prints the name of the dish
  return (
<section id="our_menu" className="pt-10 pb-16 bg-gray-100">
  <div className="container mx-auto">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
      <br />
      <span className="text-xl text-gray-600 font-bold">{cuisines.join(", ")}</span>
      <br /><br />
      <p className="text-lg text-gray-600 font-bold">
        {locality}, {city}
      </p>
      <div className="place-review flex items-center justify-center mt-4">
      <p className="ml-3 text-xl text-gray-600 font-bold">{costForTwoMessage}</p>
        <p className="ml-4 text-xl font-bold text-red-500">
          {avgRatingString} ★
        </p>        
      </div>
      <div className="h-1 w-24 bg-red-500 mx-auto mt-4"></div>
    </div>
  </div>
  
{/* categories  */}
{console.log(filterItemcategory)}
{filterItemcategory.map((category,index)=>(<RestaurantCategory 
 showItems={index=== showIndex?true:false} 
 setShowindex ={()=>setShowindex(index)}
 key={category.card.card.title}data ={category?.card?.card}/>))}

</section>



  
  );
};

export default RestaurantMenu;

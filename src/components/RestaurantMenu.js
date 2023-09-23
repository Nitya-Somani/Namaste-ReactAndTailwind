import Shimmer from "./Shimmer";
import { DISH_URL, MENU_API } from "../utils/commonLinks";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

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
  const { itemCards } =
    resData.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  console.log(
    resData.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards[0]?.card?.info?.name
  );
  //this console.log prints the name of the dish
  return (
<section id="our_menu" className="pt-10 pb-16 bg-gray-100">
  <div className="container mx-auto">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
      <span className="text-xl text-gray-600">{cuisines.join(", ")}</span>
      <p className="text-lg text-gray-600">
        {locality}, {city}
      </p>
      <div className="place-review flex items-center justify-center mt-4">
        <p className="text-xl font-semibold text-yellow-500">
          {avgRatingString} ★
        </p>
        <p className="ml-3 text-xl text-gray-600">{costForTwoMessage}</p>
      </div>
      <div className="h-1 w-24 bg-yellow-500 mx-auto mt-4"></div>
    </div>
  </div>
  
  <div className="container mx-auto mt-12">
    <div className="grid  gap-6">
      {itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white  flex  rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
        >
          <div className="h-40 overflow-hidden m-5">
            {item.card.info.imageId && (
              <img
                src={DISH_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-90 h-90 rounded-lg m-3 object-cover"
              />
            )}
          </div>
          <div className="p-4  m-5 ">
            <h4 className="text-lg font-semibold text-gray-800">
              {item.card.info.name}
            </h4>
            <br/>
            <p className="text-gray-600">Rs.{item.card.info.price / 100}</p>
            
            <div className="flex items-center mt-4">
              <button className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-full flex items-center hover:bg-yellow-600">
                <i className="fas fa-plus mr-2"></i> Add
              </button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



  
  );
};

export default RestaurantMenu;

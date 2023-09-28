import { IMG_URL } from "../utils/commonLinks";

const RestaurantCard = (resData) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    areaName,
    locality,
  } = resData?.resData.info;

  return (
    <div className="cards-container flex flex-col items-center gap-6">
      <div className="card bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
        <div className="card-media relative overflow-hidden">
          <img
            src={IMG_URL + cloudinaryImageId}
            alt="Restaurant Card Image"
            className="w-full h-56 object-cover transform scale-100 transition-transform hover:scale-105 hover:grayscale-50"
          />
        </div>
        <div className="card-description p-4">
          <div className="about-place">
            <div className="place">
              <p className="place-name text-xl font-semibold text-gray-800 m-0.5">
                {name}
              </p>
              <p className="place-speciality text-gray-600 m-1">
                {cuisines.join(", ")}
              </p>
            </div>
            <div className="place-review flex p-3 space-x-5">
              <p className="per-person text-gray-600 ml-4">
                Cost for Two: {costForTwo}
              </p>
              <p className="rating text-lg font-semibold text-red-600">
                {avgRating} &#x2605;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


//Higher order function 

// The contract between them is - it takes a  componenet and enhances it with a label veg or non veg 

export const isVegLabel = (RestaurantCard) =>{
  return(props)=>{
    return (
      <div>
        <label className=" bg-emerald-300 m-2 p-2 text-white font-bold">Veg</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;

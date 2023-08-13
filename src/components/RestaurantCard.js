import { IMG_URL } from "../utils/commonLinks";

const RestaurantCard = (resData) =>
{ 
  const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,areaName} = resData?.resData.info;

  return (
    <div className="res-card">
      
      <div className="resCard-img">
      <img src={IMG_URL+cloudinaryImageId} alt="res-card-img" />
      <h3>{name}</h3>
      <h5>{avgRating} stars</h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{areaName}</h5>
      
      

      </div>
      <div>

      </div>
    </div>
  )
}

export default RestaurantCard;
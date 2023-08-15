import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
 /*
 -Introducing use state hook 
 - useState Hook at the end of the day  is normal javascript function 
 - when we are writing this line - 
 const [filteredresList,setfilteredresList] = useState(resList);
 what we are exactly doing do ?
 we are destructing the array on the fly 
 so writing this is equivalent to - 
  const arr = useState(resList);
  const filteredresList = arr[0] ;
 const setfilteredresList = arr[1];

 when we are using the useStateHook as soon as the variable changes the react rerenders the component 
 on Backend React uses reconcilation algorithm 
 which is also known as react fiber 
 so basically what happens is react creates a virtual dom 
 virtual dom  is the representation of the actual dom and at the end of the day is a javascript object 
 so whenever react virtual dom gets updated react has a diff algorithm it's like a git diff it checks the difference 
 and updates the actual dom 
 and as soon as actual dom gets updated the UI gets re render

 To get more detailed knowledge about how it works here's the link - https://github.com/acdlite/react-fiber-architecture




 
 */
   const [filteredresList,setfilteredresList] = useState(resList);
 

  return (
      <div className="body">
        <button className="filterButton" onClick={
        ()=>{
          console.log("button clicked")
          const  newList = filteredresList.filter((restaurant)=>restaurant.info.avgRating >= 4 )
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
import React from "react";
import ReactDOM from "react-dom/client";


/* Plan your code 
* Header
    - Navbar 
        -logo 
        - anchor links (Home, About us , contact us , cart)
* Body 
    -searchbar and search button
    -Resaturant card container 
      - cards (6)
      -rating , cuisine ,image , restaurant name 
* Footer 
    - copyright 
    - Description about  the company .  
*/

//Header rendered - 
const Header = () =>
{
  return (
    <div className="header">
      <div className ="Logo">
      <img src="https://designcontest.nyc3.digitaloceanspaces.com/data/contests/301603/entries/c4913704c96cbb55.png" alt ="Logo"/>

      </div>
      <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
      </div>

    </div>
  )
}


//body rendered 
const Body = () =>
{
  return(
    <div className="body">
      <div className="searchBar">Search Bar</div>
      <div className="restaurantContainer">
      {/*to include the cards of restaurant we are  including restaurant card component  */}
        <RestaurantCard resName="KFC" resRating ="4"/>
        <RestaurantCard resName = "MCD" resRating = "6"/>
       
        
      </div>
    </div>
  )
}



/* at the end of the day we can write css as json object */
stylecard = {
  backgroundColor :"yellow",
  border:"1px solid black"
}


const RestaurantCard = (props) =>
{ 
  {/* Props stands for properties 
  Basically when we are sending the props into a componenet at the end of the day we are passing it like 
  the arguments to a function in javascript 
  
 */}
  console.log(props);
  return (
    <div className="res-card">
      
      <div className="resCard-img">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eerbyy1fi3pbotrwgzux" alt="res-card-img" />
      <h3>{props.resName}</h3>
      <h4>{props.resRating} stars</h4>
      <h4>Briyani,North Indian ,Asian</h4>
      <h4>38 mins</h4>
      </div>
      <div>

      </div>
    </div>
  )
}


//This component is a top level component 
const AppLayout = () =>{
  return (
    <div>
     <Header/>
      <Body/>

    </div>
 

  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
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
      <div className="retaurantConatiner">
      {/*to include the cards of restaurant we r including restaurant card component  */}
        <RestaurantCard/>
        
        
      </div>
    </div>
  )
}



/* at the end of the day we can write css as json object */
stylecard = {
  backgroundColor :"yellow",
  border:"1px solid black"
}


const RestaurantCard = () =>
{ 
  return (
    <div className="res-card">
      <h2 style ={{
  backgroundColor :"blue",
  border:"1px solid black"
}}>I.C.H</h2>
      <div className="resCard-img">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eerbyy1fi3pbotrwgzux" alt="res-card-img" />

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
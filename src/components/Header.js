import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/commonLinks";
import{Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";


const Header = () => {
//whenever state variable update , react triggers a reconciliation cycle (re renders the component )
  const [toggleUserAuth,setToggleUserAuth] = useState("Login");

  const {LoggedInUser} = useContext(UserContext);
 
  const cartItems = useSelector((store) => store.cart.items);

  return (
     <nav className=" m-5 p-5">
  <div className="flex items-center justify-between">
    <a href="https://tastyfood-2.netlify.app/" className="text-black">
      <img src={LOGO_URL} alt="NS Logo" className="w-16" />
    </a> 
    <div id="collapsibleNavbar" className=" flex flex-row">
      <ul className="flex space-x-10">
        <li>
          <Link to="/" className="text-black hover:text-yellow-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="text-black hover:text-yellow-500">
            About
          </Link>
        </li>
        <li>
        <Link to="/Cart">
        <i className="fa-solid fa-cart-shopping fa-xl"></i>
        <span className="bg-red-500 text-white  px-2 py-1 text-xs font-bold ml-1 rounded-md">
  {cartItems.length}
</span></Link> 
        </li>
        <li>
          <Link to="/Contact" className="text-black hover:text-yellow-500">
            Contact
          </Link>
        </li>
        <li className="font-bold">
        {LoggedInUser}
        </li>
      </ul>
   
    </div>
  </div>
</nav>

  



  )
}

export default Header;

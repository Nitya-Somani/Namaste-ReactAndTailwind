import { useState } from "react";
import { LOGO_URL } from "../utils/commonLinks";
import{Link} from "react-router-dom";


const Header = () => {
//whenever state variable update , react triggers a reconciliation cycle (re renders the component )
  const [toggleUserAuth,setToggleUserAuth] = useState("Login");
 
  return (
     <nav className=" m-5 p-5">
  <div className="flex items-center justify-between">
    <a href="https://tastyfood15.netlify.app/" className="text-black">
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
          <Link to="/Vision" className="text-black hover:text-yellow-500">
            Vision
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="text-black hover:text-yellow-500">
            Contact
          </Link>
        </li>
      </ul>
   
    </div>
  </div>
</nav>

  



  )
}

export default Header;
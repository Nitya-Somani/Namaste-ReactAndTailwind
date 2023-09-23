import { useState } from "react";
import { LOGO_URL } from "../utils/commonLinks";
import{Link} from "react-router-dom";


const Header = () => {
//whenever state variable update , react triggers a reconciliation cycle (re renders the component )
  const [toggleUserAuth,setToggleUserAuth] = useState("Login");
 
  return (
        <nav>
          <div>
            <a  href="#">
              <img src={LOGO_URL} alt="NS Logo"  style={{ width: "90px" }} />
            </a>
            <button type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span ></span>
            </button>
            <div  id="collapsibleNavbar">
              <ul >
                {/* Never use anchor Link in react as it will load the complete page but i want it should only load the about component not the header so for this the react router-dom 
                gives us a super power component as Link which help us  to achieve that  
                link just refreshed the componets 
                that is why the react app is known as single page application 
                */}
                
                
                <li >                 
                  <Link to="/" >Home</Link>
                </li>
                <li >
                  
                  <Link to="/About"  >About </Link>
                </li>
                <li >
                
                  <Link  to="/Vision"  >Vision </Link>
                </li>
                <li >
                  
                  <Link   to="/Contact"  >Contact </Link>
                </li>
              </ul>
      
    
              <div>
                <button type="button"  data-bs-toggle="dropdown">
                  <i  ></i>
                </button>
                <ul >
                  <li><a   href="#">Register</a></li>
                  <li><a   href="#">About</a></li>
                  <li><a   href="#">Contact</a></li>
                  <li><hr   /></li>
                  <li><a   
                  onClick={
                    ()=>(
                      toggleUserAuth==="Login"?setToggleUserAuth("Logout"):setToggleUserAuth("Login")  
                    )
                  }>{toggleUserAuth}</a>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
  



  )
}

export default Header;
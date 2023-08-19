import { useState } from "react";
import { LOGO_URL } from "../utils/commonLinks";

const Header = () => {
//whenever state variable update , react triggers a reconciliation cycle (re renders the component )
  const [toggleUserAuth,setToggleUserAuth] = useState("Login");
 
  return (
        <nav className="navbar navbar-expand-sm p-3 fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={LOGO_URL} alt="NS Logo" className="logo-img" style={{ width: "90px" }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item ps-5">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item ps-5">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item ps-5">
                  <a className="nav-link" href="#">Vision</a>
                </li>
                <li className="nav-item ps-5">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
      
    
              <div className="dropdown nav-item">
                <button type="button" className="btn dropdown-toggle border-0" data-bs-toggle="dropdown">
                  <i className="fa-regular fa-user border border-3 border-dark rounded-circle"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-center">
                  <li><a className="dropdown-item" href="#">Register</a></li>
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Contact</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" 
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
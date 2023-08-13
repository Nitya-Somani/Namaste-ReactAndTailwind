import { LOGO_URL } from "../utils/commonLinks";
const Header = () => {
  return (
    <div className="header">
      <div className="Logo">
        <img src={LOGO_URL} alt="Logo" />

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

export default Header;
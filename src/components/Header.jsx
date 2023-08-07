
import img1 from '../assets/images/apneck.png'
import { Link } from 'react-router-dom';
import {PiShoppingCartBold} from 'react-icons/pi'
import { AiOutlineUser } from "react-icons/ai";
const Header = () => {
  return (
    <header>
      <div className="logo_section">
        <img src={img1} alt="apneck" />
      </div>

      <div className="nav_section">
        <div className="search_box">
          <input
            type="text"
            className="search_input"
            placeholder="Find Products ..."
          />
          <button className="search_btn">Search</button>
        </div>

        <nav className="nav_links">
          <Link to={"/"}> Home </Link>
          <Link to={"shop"}> Shop </Link>
          <Link to={"about"}> About </Link>
          <Link to={"contact"}> Contact </Link>
        </nav>
<hr className='header-hr'/>
        <nav className="side_links">
          <Link to={"login"} className='side_btn '>
            {" "}
            <AiOutlineUser className="a_icon" />
            Sign In
          </Link>
          <Link to={"cart"} className='side_btn'>
            {" "}
            <PiShoppingCartBold className="a_icon" />
            cart
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header
import img1 from "../assets/images/apneck.png";
import { Link } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const { cartItems } = useSelector(state => state)
  // console.log(this.state.cart);
  console.log(cartItems);

  return (
    <>
      <header>
        <div className="logo_section">
          <img src={img1} alt="apneck" />
        </div>

        <div className="nav_section">
          <div className="search_box relevent">
            <input
              type="text"
              className="search_input"
              placeholder="Find Products ..."
              onChange={handleInputChange}
            />
            <button className="search_btn">Search</button>
            <div
              className={`${
                searchText ? "block" : "hidden"
              } absolute  search_text `}
            >
              <ul>
                <li>
                  <AiOutlineSearch />
                  <Link>text</Link>
                </li>
                <li>
                  <AiOutlineSearch />
                  <Link>text</Link>
                </li>
                <li>
                  <AiOutlineSearch />
                  <Link>text</Link>
                </li>
              </ul>
            </div>
          </div>

          <nav className="nav_links">
            <Link to={"/"}> Home </Link>
            <Link to={"shop"}> Shop </Link>
            <Link to={"about"}> About </Link>
            <Link to={"contact"}> Contact </Link>
          </nav>

          <hr className="header-hr" />

          <nav className="side_links">
            <Link to={"login"} className="side_btn " id="account_toggle">
              <AiOutlineUser className="a_icon" />
              <nav className="account_links">
                <div className="sub-menu">
                  <Link to={"signup"} className="sub-menu-link">
                    <AiOutlineUser className="sub-icon" />
                    <p>sign up</p>
                    <span>&gt;</span>
                  </Link>
                  <Link to={'/'}  className="sub-menu-link">
                    <BsBoxSeam className="sub-icon" />
                    <p>orders</p>
                    <span>&gt;</span>
                  </Link>
                  <Link to={"signup"} className="sub-menu-link">
                    <AiOutlineHeart className="sub-icon" />
                    <p>wishlist</p>
                    <span>&gt;</span>
                  </Link>
                </div>
              </nav>
            </Link>

            <Link to={"cart"} className="side_btn">
              <PiShoppingCartBold className="a_icon" />
              <p className="cart_count">{cartItems.length}</p>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

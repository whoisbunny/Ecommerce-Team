import '../styles/header.scss'
import img1 from '../assets/images/apneck.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>

      <div className="logo_section">
        <img src={img1} alt="apneck" />
      </div>

      <div className="nav_section">
          <div className="search_box">
            <input type="text"  className='search_input' placeholder='Find Products ...'  />
            <button className="search_btn">Search</button>
          </div>

          <nav className="nav_links">
            <Link> Home </Link>
            <Link> Home </Link>
            <Link> Home </Link>
          </nav>

        <nav className="side_links">
          <Link>Cart</Link>
          <Link>Cart</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header
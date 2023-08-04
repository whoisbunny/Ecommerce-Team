import '../styles/header.scss'
import img1 from '../assets/images/apneck.png'
const Header = () => {
  return (
    <header>
      <div className="logo_section">
        <img src={img1} alt="apneck" />
      </div>
      <nav className="nav_section">more content</nav>
    </header>
  );
}

export default Header
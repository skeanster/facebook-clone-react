import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from './NavbarComponents/logo.svg';

const Navbar = (props) => {
  const { username } = props;

  return (
    <div className="navbarContainer">
      <div className="navbarLeftContainer">
        <Link to="/" className="logo">
          <LogoSvg />
        </Link>
        <div className="searchContainer">Search</div>
      </div>
      <div className="navbarCenterContainer">
        <div className="navbarCenterIcons" id="home">
          Home
        </div>
        <div className="navbarCenterIcons" id="watch">
          Watch
        </div>
        <div className="navbarCenterIcons" id="store">
          Store
        </div>
        <div className="navbarCenterIcons" id="gaming">
          Gaming
        </div>
      </div>
      <div className="navbarRightContainer">
        <Link to="/ProfilePage" className="navbarProfileLink">
          <div className="profileImage">i</div>
          <div className="profileName">{username}</div>
        </Link>
        <div className="navbarRightLinks" id="navbarMenu">
          M
        </div>
        <div className="navbarRightLinks" id="navbarMessenger">
          MS
        </div>
        <div className="navbarRightLinks" id="navbarNotifications">
          N
        </div>
        <div className="navbarRightLinks" id="navbarExpand">
          \/
        </div>
      </div>
    </div>
  );
};

export default Navbar;

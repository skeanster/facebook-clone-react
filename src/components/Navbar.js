import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from './NavbarComponents/logo.svg';
import { ReactComponent as GamingSvg } from './NavbarComponents/gaming.svg';
import { ReactComponent as HomeSvg } from './NavbarComponents/home.svg';
import { ReactComponent as WatchSvg } from './NavbarComponents/watch.svg';
import { ReactComponent as StoreSvg } from './NavbarComponents/store.svg';

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
        <Link to="/" className="navbarCenterIcons" id="home">
          <HomeSvg />
        </Link>
        <div className="navbarCenterIcons" id="watch">
          <WatchSvg />
        </div>
        <div className="navbarCenterIcons" id="store">
          <StoreSvg />
        </div>
        <div className="navbarCenterIcons" id="gaming">
          <GamingSvg />
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

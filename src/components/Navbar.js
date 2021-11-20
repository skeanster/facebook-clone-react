import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from './NavbarComponents/logo.svg';
import { ReactComponent as GamingSvg } from './NavbarComponents/gaming.svg';
import { ReactComponent as HomeSvg } from './NavbarComponents/home.svg';
import { ReactComponent as WatchSvg } from './NavbarComponents/watch.svg';
import { ReactComponent as StoreSvg } from './NavbarComponents/store.svg';
import { ReactComponent as DotsSvg } from './NavbarComponents/dots.svg';
import { ReactComponent as MessengerSvg } from './NavbarComponents/messenger.svg';
import { ReactComponent as NotificationsSvg } from './NavbarComponents/notifications.svg';
import { ReactComponent as ArrowSvg } from './NavbarComponents/arrow.svg';
import Search from './NavbarComponents/Search';
import ProfilePic from './miscimages/default-profile.png';

const Navbar = (props) => {
  const { username } = props;

  return (
    <div className="navbarContainer">
      <div className="navbarLeftContainer">
        <Link to="/facebook-clone-react" className="logo">
          <LogoSvg />
        </Link>
        <Search />
      </div>
      <div className="navbarCenterContainer" id="navbarCenterContainer">
        <Link
          to="/facebook-clone-react"
          className="navbarCenterIcons"
          id="home"
        >
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
        <Link
          to="/facebook-clone-react/ProfilePage"
          className="navbarProfileLink"
          id="navbarProfileLink"
        >
          <img src={ProfilePic} alt="profile pic" className="ProfileImage" />
          <div className="profileName">{username}</div>
        </Link>
        <Link
          to="/facebook-clone-react/ProfilePage"
          className="navbarRightLinks"
          id="navbarMenu"
        >
          <DotsSvg />
        </Link>
        <Link
          to="/facebook-clone-react/ProfilePage"
          className="navbarRightLinks"
          id="navbarMessenger"
        >
          <MessengerSvg />
        </Link>
        <Link
          to="/facebook-clone-react/ProfilePage"
          className="navbarRightLinks"
          id="navbarNotifications"
        >
          <NotificationsSvg />
        </Link>
        <Link
          to="/facebook-clone-react/ProfilePage"
          className="navbarRightLinks"
          id="navbarExpand"
        >
          <ArrowSvg />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

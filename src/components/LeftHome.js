import { Link } from 'react-router-dom';
import ProfilePic from './miscimages/default-profile.png';
import FriendsPic from './LeftHomeCompontents/friends.png';
import EventsPic from './LeftHomeCompontents/events.png';
import GroupsPic from './LeftHomeCompontents/groups.png';
import MarketplacePic from './LeftHomeCompontents/marketplace.png';
import WatchPic from './LeftHomeCompontents/watch.png';
import MemoriesPic from './LeftHomeCompontents/memories.png';
import SavedPic from './LeftHomeCompontents/saved.png';
import PagesPic from './LeftHomeCompontents/pages.png';
import NewsPic from './LeftHomeCompontents/news.png';

function LeftHome(props) {
  const { username } = props;
  return (
    <div className="leftHomeContainer">
      <ul className="leftHomeList">
        <Link
          to="/facebook-clone-react/ProfilePage"
          className="leftHomeListItem"
        >
          <img src={ProfilePic} alt="profile pic" className="ProfileImage" />
          <div className="leftHomeText">{username}</div>
        </Link>
        <li className="leftHomeListItem">
          <img src={FriendsPic} alt="profile pic" className="leftHomeImage" />
          <div className="leftHomeText">Friends</div>
        </li>
        <li className="leftHomeListItem">
          <img src={EventsPic} alt="profile pic" className="leftHomeImage" />
          <div className="leftHomeText">Events</div>
        </li>
        <li className="leftHomeListItem">
          <img src={GroupsPic} alt="profile pic" className="leftHomeImage" />
          <div className="leftHomeText">Groups</div>
        </li>
        <li className="leftHomeListItem">
          <img
            src={MarketplacePic}
            alt="profile pic"
            className="leftHomeImage"
          />
          <div className="leftHomeText">Marketplace</div>
        </li>
        <li className="leftHomeListItem">
          <img src={WatchPic} alt="profile pic" className="leftHomeImage" />
          <div className="leftHomeText">Watch</div>
        </li>
        <li className="leftHomeListItem">
          <img src={MemoriesPic} alt="profile pic" className="leftHomeImage" />
          <div className="leftHomeText">Memories</div>
        </li>
        <li className="leftHomeListItem">
          <img src={SavedPic} alt="profile pic" className="leftHomeImage" />
          <div className="leftHomeText">Saved</div>
        </li>
        <li className="leftHomeListItem">
          <img src={PagesPic} alt="profile pic" className="leftHomeImage" />
          <div className="leftHomeText">Pages</div>
        </li>
        <li className="leftHomeListItem">
          <img src={NewsPic} alt="profile pic" className="leftHomeImage" />
          <div className="leftHomeText">News</div>
        </li>
      </ul>
    </div>
  );
}

export default LeftHome;

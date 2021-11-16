import ProfilePic from './miscimages/default-profile.png';

function RightHome() {
  return (
    <div className="rightHomeContainer">
      <div className="sponsoredContainer">Sponsored</div>
      <div className="contactsContainer">
        <div className="contactsHeader">Contacts</div>
        <ul className="contactsList">
          <div className="contactRight">
            <img src={ProfilePic} alt="profile pic" className="ProfileImage" />
            <div className="contactName">John Smith</div>
          </div>
          <div className="contactRight">
            <img src={ProfilePic} alt="profile pic" className="ProfileImage" />
            <div className="contactName">John Smith</div>
          </div>
        </ul>
      </div>
      <div className="groupConvosContainer">
        <div className="groupConvosHeader">Group Conversations</div>
        <div className="newGroupText">Create New Group</div>
      </div>
    </div>
  );
}

export default RightHome;

function RightHome() {
  return (
    <div className="rightHomeContainer">
      <div className="sponsoredContainer">Sponsored</div>
      <div className="contactsContainer">
        <div className="contactsHeader">Contacts</div>
        <ul className="contactsList">
          <li>Ryan Skeans</li>
          <li>John Smith</li>
        </ul>
      </div>
      <div className="groupConvosContainer">
        <div className="groupConvosHeader">Group Conversations</div>
        <div className="newGroupButton">+</div>
        <div className="newGroupText">Create New Group</div>
      </div>
    </div>
  );
}

export default RightHome;

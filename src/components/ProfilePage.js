import Navbar from './Navbar';
import LogoutButton from './LogoutButton';

function ProfilePage(props) {
  const { username, changeUsername } = props;
  return (
    <div className="App">
      <Navbar username={username} />
      <div className="formContainer">
        <form name="newPost" onSubmit={changeUsername}>
          <input
            autoComplete="off"
            type="text"
            id="postInput"
            name="postInput"
            defaultValue=""
            placeholder={username}
            required
          />
          <br />
          <input type="submit" value="Change Username" id="postSubmit" />
        </form>
        <LogoutButton />
      </div>
    </div>
  );
}

export default ProfilePage;

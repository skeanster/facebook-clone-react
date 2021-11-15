import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function ProfilePage(props) {
  const { username } = props;
  return (
    <div className="App">
      <Navbar username={username} />
      <h1>{username} profile</h1>
    </div>
  );
}

export default ProfilePage;

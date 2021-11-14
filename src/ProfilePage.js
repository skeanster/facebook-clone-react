import './App.css';
import { Link } from 'react-router-dom';

function ProfilePage(props) {
  const { username } = props;
  return (
    <div className="App">
      <h1>{username} profile</h1>
      <Link to="/">Homepage</Link>
    </div>
  );
}

export default ProfilePage;

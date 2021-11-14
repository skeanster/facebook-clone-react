import './App.css';
import { Link } from 'react-router-dom';

function App(props) {
  const { username } = props;
  return (
    <div className="App">
      <h1>{username}</h1>
      <Link to="/ProfilePage">Profile Page</Link>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import LeftHome from './components/LeftHome';
import CenterHome from './components/CenterHome';

function App(props) {
  const { username, posts } = props;
  return (
    <div className="App">
      <Navbar username={username} />
      <div className="homeMainContainer">
        <LeftHome username={username} />
        <CenterHome username={username} posts={posts} />
      </div>
    </div>
  );
}

export default App;

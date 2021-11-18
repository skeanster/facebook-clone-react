import './App.css';
import Navbar from './components/Navbar';
import LeftHome from './components/LeftHome';
import CenterHome from './components/CenterHome';
import RightHome from './components/RightHome';
import LogIn from './components/LogIn';

function App(props) {
  const { username, posts, newPost, like, newComment } = props;
  return (
    <div className="App">
      <Navbar username={username} />
      <div className="homeMainContainer">
        <LeftHome username={username} />
        <CenterHome
          username={username}
          posts={posts}
          newPost={newPost}
          like={like}
          newComment={newComment}
        />
        <RightHome />
      </div>
    </div>
  );
}

export default App;

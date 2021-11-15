import './App.css';
import Navbar from './components/Navbar';
import LeftHome from './components/LeftHome';

function App(props) {
  const { username } = props;
  return (
    <div className="App">
      <Navbar username={username} />
      <div className="homeMainContainer">
        <LeftHome username={username} />
      </div>
    </div>
  );
}

export default App;

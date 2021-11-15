import './App.css';
import Navbar from './components/Navbar';

function App(props) {
  const { username } = props;
  return (
    <div className="App">
      <Navbar username={username} />
    </div>
  );
}

export default App;

import './App.css';
import drone from './assets/Drone.png'
import shadow from './assets/Shadow.png'
import NavTop from './NavTop';

function App() {
  return (
    <div className="App">
      <NavTop />
      <div>
        <img src={drone} alt="drone image" />
      </div>
      <div>
        <img src={shadow} alt="shadow image" />
      </div>
      <p>
        <span></span>
      </p>
    </div>
  );
}

export default App;

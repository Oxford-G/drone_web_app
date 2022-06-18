import drone from './assets/Drone.png'
import shadow from './assets/Shadow.png'
import heroBody from './assets/whitelabel-f210.png'
import NavTop from './NavTop';
import './Home.css';

const Home = () => {
  return (
    <div className="heroDiv">
      <NavTop />
      <div className="droneDiv">
        <img className="droneImg" src={drone} alt="drone" />
      </div>
      <div className="shadowDiv">
        <img className="shadowImg" src={shadow} alt="shadow" />
      </div>
      <div className="heroText">
        <img className="hero" src={heroBody } alt="hero" />
      </div>
    </div>
  )
}

export default Home

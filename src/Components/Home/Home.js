import drone from '../assets/Drone.png'
import shadow from '../assets/Shadow.png'
import heroBody from '../assets/whitelabel-f210.png'
import './Home.css';

const Home = ({closeMenu}) => {
  return (
    <div id="HOME" className="heroDiv" onClick={closeMenu}>
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

import './App.css';
import Home from "./Home"
import NavTop from './NavTop';
import Tutorials from './Tutorials';
import BlogImg from './assets/camera.png'
import BlogImg2 from './assets/whitelabel-blog.png'

function App() {
  return (
    <div className="App">
      <NavTop />
      <Home />
      <Tutorials />
      <div>
        <div className="tutorialBody">
          <p className="leftHrStick">
            F-210 PERFORMANCE RACING DRONE
          </p>
          <div className="tutorialImgCon">
            <div className="tutorialImg">
              <img src={BlogImg} alt="camera"/>
            </div>
          </div>
          <div className="tutorialCap">
            <h3 className="tutorialH3">Craft and design</h3>
            <p className="tutorialH3Line"><hr/></p>
            <p className="tutorialP">
              Breakthrough design makes F-210 essentialy improved.
              With a new body design and carbon fibre material. It has superior, and still 
              drop ability. Though improved small details, it will certainlt give you more 
              satisfaction. Axis equidistance design ensures the gravity center of the aircraft
              in the middle, which makes the fligth more stable and agiler. Motor
            </p>
          </div>
          <div className="rightHrStick">
            <hr className="rightHrStick1"/>
            <hr className="rightHrStick2"/>
            <hr className="rightHrStick3"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import BlogImg from '../assets/camera.png';
import RemoteImg from '../assets/Remote.png';
import './Blogs.css';

const Blogs = ({closeMenu}) => {
  return (
    <>
      <div id="TUTORIALS" className="blogsBody" onClick={closeMenu}>
        <div className="blogsBody2">
          <p className="leftBrStick">
            F-210 PERFORMANCE RACING DRONE
          </p>
          <div className="blogsImgCon">
            <img src={BlogImg} alt="camera"/>
          </div>
          <div className="blogsCap">
            <h3 className="blogsH3">Camera</h3>
            <div className="blogsH3Line"><hr/></div>
            <p className="blogsP">
              Breakthrough design makes F-210 essentialy improved.
              With a new body design and carbon fibre material. It has superior, and still 
              drop ability. Though improved small details, it will certainlt give you more 
              satisfaction. Axis equidistance design ensures the gravity center of the aircraft
              in the middle, which makes the fligth more stable and agiler. Motor
            </p>
          </div>
          <div className="rightBrStick">
            <hr className="rightBrStick1 brColor1"/>
            <hr className="rightBrStick1 brColor2"/>
            <hr className="rightBrStick1 brColor1"/>
          </div>
        </div>

        <div className="blogsFooter">
          <div className="blogsFooterDiv">
            <p className="blogsFooterP">700</p>
            <p className="blogsFooterP1">TVL VIDEO</p>
          </div>

          <div className="blogsFooterDiv">
            <p className="blogsFooterP">120°</p>
            <p className="blogsFooterP1">VISUAL RANGE</p>
          </div>

          <div className="blogsFooterDiv">
            <p className="blogsFooterP">HD</p>
            <p className="blogsFooterP1">NIGHT VISION</p>
          </div>
        </div>
      </div>

      <div id="BLOGS" className="blogsBody2 blogsBody3">
        <p className="leftBrStick leftBrStickB">
          F-210 PERFORMANCE RACING DRONE
        </p>
        <div className="blogsCap blogsCap2">
          <h3 className="blogsH3 blogsH3Color">Remote Control</h3>
          <div className="blogsH3Line"><hr/></div>
          <p className="remotesP">
            Breakthrough design makes F-210 essentialy improved.
            With a new body design and carbon fibre material. It has superior, and still 
            drop ability. Though improved small details, it will certainlt give you more 
            satisfaction. Axis equidistance design ensures the gravity center of the aircraft
            in the middle, which makes the fligth more stable and agiler. Motor
          </p>
        </div>

        <div className="remotesImgCon">
          <img src={RemoteImg} alt="remote"/>
        </div>

        <div className="rightBrStick">
          <hr className="rightBrStick1 brColor3"/>
          <hr className="rightBrStick1 brColor3"/>
          <hr className="rightBrStick1 brColor4"/>
        </div>
      </div>
    </>
  )
}

export default Blogs

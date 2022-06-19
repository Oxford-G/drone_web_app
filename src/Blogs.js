import BlogImg from './assets/camera.png'
import './Blogs.css';

const Blogs = () => {
  return (
    <div className="blogsBody">
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
          <hr className="rightBrStick1"/>
          <hr className="rightBrStick2"/>
          <hr className="rightBrStick3"/>
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
  )
}

export default Blogs

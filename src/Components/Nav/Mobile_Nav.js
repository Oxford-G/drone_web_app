import logo from '../assets/Logo.png';
import logo2 from '../assets/LogoWhite.png';
import './Mobile_Nav.css';

const MobileNav = ({navBarM, Toggle, toggleNav, closeMenu}) => {

  return (

    <div className={navBarM === true ? 'MtopNav2Color mobileNav' : navBarM === 'navImgBlack'
      ? 'MtopNav3Color mobileNav' : navBarM === 'navImgBrown' ? 'MtopNav4Color mobileNav' : 'MtopNavColor mobileNav'}>

      <nav className={navBarM ? 'MtopNav2' : 'MtopNav'}>

        <div className='MtopDiv'>
          <a className={navBarM === 'navImgBlack' ? 'MhideNav' : 'MnavA'} href="#HOME">
            <img className="MtopImg" src={logo} alt="logo" />
          </a>
          <a className={navBarM === 'navImgBlack' ? 'MnavImgBlack' : 'MhideNav'} href="#HOME">
            <img className="MtopImg" src={logo2} alt="logo" />
          </a>
        </div>

        <ul className={Toggle ? 'MslidingNav' : 'MhideNav'}>
          <ul className="MslidingDiv">
            <li className="li" onClick={closeMenu} >
              <a className="MnavB" href="#STORE">STORE</a>
            </li>
            <li className="li" onClick={closeMenu}>
              <a className="MnavB" href="#TUTORIALS">TUTORIALS</a>
            </li>
            <li className="li" onClick={closeMenu}>
              <a className="MnavB" href="#BLOG">BLOG</a>
            </li>
            <li className="li" onClick={closeMenu}>
              <a className="MnavB" href="#CONTACT">CONTACT</a>
            </li>
          </ul>
        </ul>

        <div className="MhamDiv" onClick={toggleNav}>
          <hr className="MhamLine1" />
          <hr className="MhamLine2" />
        </div>
      </nav>
    </div>

  )
}

export default MobileNav

import logo from './assets/Logo.png';
import logo2 from './assets/LogoWhite.png';
import { useState } from 'react';
import './Mobile_Nav.css';

const MobileNav = () => {
  const [navBar, setNavBar] = useState(false)
  const [Toggle, setToggle] = useState(false)

  const changeBackground = () => {
    if ((window.scrollY >= 510) && (window.scrollY <= 1091)) {
      setNavBar(true)
    } else if ((window.scrollY >= 1092) && (window.scrollY <= 1850)) {
      setNavBar('navImgBlack')
    } else if ((window.scrollY >= 1851) && (window.scrollY <= 2200)) {
      setNavBar(true)
    } else if (window.scrollY >= 2201) {
      setNavBar('navImgBrown')
    } else {
      setNavBar(false)
    }
  }

  const toggleNav = () => {
    setToggle(!Toggle)
  }

  const closeMenu = () => setToggle(false)

  window.addEventListener('scroll', changeBackground)

  return (

    <div className={navBar === true ? 'MtopNav2Color mobileNav' : navBar === 'navImgBlack'
      ? 'MtopNav3Color mobileNav' : navBar === 'navImgBrown' ? 'MtopNav4Color mobileNav' : 'MtopNavColor mobileNav'}>

      <nav className={navBar ? 'MtopNav2' : 'MtopNav'}>

        <div className='MtopDiv'>
          <a className={navBar === 'navImgBlack' ? 'MhideNav' : 'MnavA'} href="#HOME">
            <img className="MtopImg" src={logo} alt="logo" />
          </a>
          <a className={navBar === 'navImgBlack' ? 'MnavImgBlack' : 'MhideNav'} href="#HOME">
            <img className="MtopImg" src={logo2} alt="logo" />
          </a>
        </div>

        <ul className={Toggle ? 'MslidingNav' : 'MhideNav'}>
          <ul className="MslidingDiv">
            <li onClick={closeMenu}>
              <a className="MnavB" href="#STORE">STORE</a>
            </li>
            <li onClick={closeMenu}>
              <a className="MnavB" href="#TUTORIALS">TUTORIALS</a>
            </li>
            <li onClick={closeMenu}>
              <a className="MnavB" href="#BLOG">BLOG</a>
            </li>
            <li onClick={closeMenu}>
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

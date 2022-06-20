import './NavTop.css';
import logo from './assets/Logo.png';
import logo2 from './assets/LogoWhite.png';
import { useState } from 'react';
import {TbBrandTwitter} from 'react-icons/tb';
import {RiFacebookBoxFill} from 'react-icons/ri';

const NavTop = () => {
  const [navBar, setNavBar] = useState(false)
  const [Toggle, setToggle] = useState(false)

  const changeBackground = () => {
    if ((window.scrollY >= 830) && (window.scrollY <= 1470)) {
      setNavBar(true)
    } else if ((window.scrollY >= 1471) && (window.scrollY <= 2200)) {
      setNavBar('navImgBlack')
    } else if ((window.scrollY >= 2201) && (window.scrollY <= 3100)) {
      setNavBar(true)
    } else if (window.scrollY >= 3101) {
      setNavBar('navImgBrown')
    }else {
      setNavBar(false)
    } 
  }

  const toggleNav = () => {
    setToggle(!Toggle)
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className={navBar === true ? 'topNav2Color' : navBar === 'navImgBlack' 
                      ? 'topNav3Color' : navBar === 'navImgBrown' ? 'topNav4Color' : 'topNavColor'}>
      <nav className={navBar ? 'topNav2' : 'topNav' }>
        <ul className={navBar ? 'hideNav' : 'navUl' }>
          <li className="navLi"><a className="navA" href="#STORE">STORE</a></li>
          <li><a className="navA" href="#TUTORIALS">TUTORIALS</a></li>
        </ul>

        <ul className={ navBar ? 'navSocial' : 'hideNav' }>
          <li className="navLi">
            <RiFacebookBoxFill className="socialNav"/>
          </li>
          <li>
            <TbBrandTwitter className="socialNav"/>
          </li>
        </ul>

        <div className='topDiv'>
          <a className={ navBar === 'navImgBlack' ? 'hideNav' : 'navA' } href="#HOME">
            <img className="topImg" src={logo} alt="logo" />
          </a>
          <a className={ navBar === 'navImgBlack' ? 'navImgBlack' : 'hideNav' } href="#HOME">
            <img className="topImg" src={logo2} alt="logo" />
          </a>
        </div>

        <ul className={Toggle ? 'slidingNav' : 'hideNav' }>
          <li><a className="navA" href="#STORE">STORE</a></li>
          <li><a className="navA" href="#TUTORIALS">TUTORIALS</a></li>
          <li><a className="navA" href="#BLOG">BLOG</a></li>
          <li><a className="navA" href="#CONTACT">CONTACT</a></li>
        </ul>

        <div className={navBar ? 'hamDiv' : 'hideNav' } onClick={toggleNav}>
          <hr className="hamLine1"/>
          <hr className="hamLine2"/>
        </div>

        <ul className={navBar ? 'hideNav' : 'navUl' }>
          <li><a className="navA" href="#BLOG">BLOG</a></li>
          <li className="navLi2"><a className="navA" href="#CONTACT">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavTop

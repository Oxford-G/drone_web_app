import './NavTop.css';
import logo from '../assets/Logo.png';
import logo2 from '../assets/LogoWhite.png';
import { TbBrandTwitter } from 'react-icons/tb';
import { RiFacebookBoxFill } from 'react-icons/ri';

const NavTop = ({ navBar, Toggle, toggleNav, closeMenu }) => {
  return (
    <div className={navBar === true ? 'topNav2Color desktopNav' : navBar === 'navImgBlack'
      ? 'topNav3Color desktopNav' : navBar === 'navImgBrown' ? 'topNav4Color desktopNav' : 'topNavColor desktopNav'}>
      <nav className={navBar ? 'topNav2' : 'topNav'}>
        <ul className={navBar ? 'hideNav' : 'navUl'}>
          <li className="navLi hover"><a className="navA" href="#STORE">STORE</a></li>
          <li className="hover"><a className="navA" href="#TUTORIALS">TUTORIALS</a></li>
        </ul>

        <ul className={navBar ? 'navSocial' : 'hideNav'}>
          <li className="navLi">
            <RiFacebookBoxFill className="socialNav" />
          </li>
          <li>
            <TbBrandTwitter className="socialNav" />
          </li>
        </ul>

        <div className='topDiv'>
          <a className={navBar === 'navImgBlack' ? 'hideNav' : 'navA'} href="#HOME">
            <img className="topImg" src={logo} alt="logo" />
          </a>
          <a className={navBar === 'navImgBlack' ? 'navImgBlack' : 'hideNav'} href="#HOME">
            <img className="topImg" src={logo2} alt="logo" />
          </a>
        </div>


        <ul className={Toggle ? 'slidingNav' : 'hideNav'}>
          <ul className={navBar ? 'slidingDiv' : 'hideNav'}>
            <li
              onClick={closeMenu}>
              <a className="navB" href="#STORE">STORE</a>
            </li>
            <li
              onClick={closeMenu}>
              <a className="navB" href="#TUTORIALS">TUTORIALS</a>
            </li>
            <li
              onClick={closeMenu}>
              <a className="navB" href="#BLOG">BLOG</a>
            </li>
            <li
              onClick={closeMenu}>
              <a className="navB" href="#CONTACT">CONTACT</a>
            </li>
          </ul>
        </ul>

        <div className={navBar ? 'hamDiv' : 'hideNav'} onClick={toggleNav}>
          <hr className="hamLine1" />
          <hr className="hamLine2" />
        </div>

        <ul className={navBar ? 'hideNav' : 'navUl'}>
          <li className="hover"><a className="navA" href="#BLOG">BLOG</a></li>
          <li className="navLi2 hover"><a className="navA" href="#CONTACT">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavTop

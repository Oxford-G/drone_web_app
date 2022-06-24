import './TabletNav.css';
import logo from './assets/Logo.png';
import logo2 from './assets/LogoWhite.png';
import { TbBrandTwitter } from 'react-icons/tb';
import { RiFacebookBoxFill } from 'react-icons/ri';

const TabletNav = ({navBarT, Toggle, toggleNav, closeMenu}) => {
  return (
    <div className={navBarT === true ? 'topNav2Color tabletNav' : navBarT === 'navImgBlack'
      ? 'topNav3Color tabletNav' : navBarT === 'navImgBrown' ? 'topNav4Color tabletNav' : 'topNavColor tabletNav'}>
      <nav className={navBarT ? 'topNav2' : 'topNav'}>
        <ul className={navBarT ? 'hideNav' : 'navUl'}>
          <li className="navLi"><a className="navA" href="#STORE">STORE</a></li>
          <li><a className="navA" href="#TUTORIALS">TUTORIALS</a></li>
        </ul>

        <ul className={navBarT ? 'navSocial' : 'hideNav'}>
          <li className="navLi">
            <RiFacebookBoxFill className="socialNav" />
          </li>
          <li>
            <TbBrandTwitter className="socialNav" />
          </li>
        </ul>

        <div className='topDivT'>
          <a className={navBarT === 'navImgBlack' ? 'hideNav' : 'navA'} href="#HOME">
            <img className="topImg" src={logo} alt="logo" />
          </a>
          <a className={navBarT === 'navImgBlack' ? 'navImgBlack' : 'hideNav'} href="#HOME">
            <img className="topImg" src={logo2} alt="logo" />
          </a>
        </div>


        <ul className={Toggle ? 'slidingNav' : 'hideNav'}>
          <ul className={navBarT ? 'slidingDiv' : 'hideNav'}>
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

        <div className={navBarT ? 'hamDiv' : 'hideNav'} onClick={toggleNav}>
          <hr className="hamLine1" />
          <hr className="hamLine2" />
        </div>

        <ul className={navBarT ? 'hideNav' : 'navUl'}>
          <li><a className="navA" href="#BLOG">BLOG</a></li>
          <li className="navLi2"><a className="navA" href="#CONTACT">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default TabletNav

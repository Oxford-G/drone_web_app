import './NavTop.css';
import logo from './assets/Logo.png'
import { useState } from 'react';
import {TbBrandTwitter} from 'react-icons/tb'
import {RiFacebookBoxFill} from 'react-icons/ri'

const NavTop = () => {
  const [navBar, setNavBar] = useState(false)
  const [Toggle, setToggle] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  const toggleNav = () => {
    setToggle(!Toggle)
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navBar ? 'topNav2' : 'topNav' }>
      <ul className={navBar ? 'hideNav' : 'navUl' }>
        <li className="navLi"><a className="navA" href="#STORE">STORE</a></li>
        <li><a className="navA" href="#TUTORIALS">TUTORIALS</a></li>
      </ul>

      <ul className={navBar ? 'navSocial' : 'hideNav' }>
        <li className="navLi"><RiFacebookBoxFill className="socialNav"/></li>
        <li><TbBrandTwitter className="socialNav"/></li>
      </ul>

      <div className="topDiv">
        <a className="navA" href="#HOME">
          <img className="topImg" src={logo} alt="logo" />
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
  )
}

export default NavTop

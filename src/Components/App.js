import { useState } from 'react';
import './App.css';
import Home from "./Home/Home";
import Blogs from './Blog/Blogs';
import NavTop from './Nav/NavTop';
import Contact from './Contacts/Contact';
import MobileNav from './Nav/Mobile_Nav';
import TabletNav from './Nav/TabletNav';
import Tutorials from './Tutorial/Tutorials';

const App = () => {

  const [navBar, setNavBar] = useState(false)
  const [navBarT, setNavBarT] = useState(false)
  const [navBarM, setNavBarM] = useState(false)
  const [Toggle, setToggle] = useState(false)

  const changeBackground = () => {
    if ((window.scrollY >= 830) && (window.scrollY <= 1470)) {
      setNavBar(true)
    } else if ((window.scrollY >= 1471) && (window.scrollY <= 2200)) {
      setNavBar('navImgBlack')
    } else if ((window.scrollY >= 2201) && (window.scrollY <= 2980)) {
      setNavBar(true)
    } else if (window.scrollY >= 2981) {
      setNavBar('navImgBrown')
    }else {
      setNavBar(false)
    } 
  }

  const changeBackgroundTablet = () => {
    if ((window.scrollY >= 595) && (window.scrollY <= 1151)) {
      setNavBarT(true)
    } else if ((window.scrollY >= 1152) && (window.scrollY <= 1850)) {
      setNavBarT('navImgBlack')
    } else if (window.scrollY >= 1851) {
      setNavBarT(true)
    } else if (window.scrollY >= 2201) {
      setNavBarT('navImgBrown')
    }else {
      setNavBarT(false)
    } 
  }

  const changeBackgroundMobile = () => {
    if ((window.scrollY >= 510) && (window.scrollY <= 1031)) {
      setNavBarM(true)
    } else if ((window.scrollY >= 1032) && (window.scrollY <= 1890)) {
      setNavBarM('navImgBlack')
    } else if (window.scrollY >= 1851) {
      setNavBarM(true)
    } else if (window.scrollY >= 2201) {
      setNavBarM('navImgBrown')
    } else {
      setNavBarM(false)
    }
  }

  const toggleNav = () => {
    setToggle(!Toggle)
  }

  const closeMenu = () => setToggle(false)

  window.addEventListener('scroll', changeBackground)
  window.addEventListener('scroll', changeBackgroundMobile)
  window.addEventListener('scroll', changeBackgroundTablet)

  return (
    <div className="App">
      <NavTop navBar={navBar} Toggle={Toggle} toggleNav={toggleNav} closeMenu={closeMenu}/>
      <TabletNav navBarT={navBarT} Toggle={Toggle} toggleNav={toggleNav} closeMenu={closeMenu}/>
      <MobileNav navBarM={navBarM} Toggle={Toggle} toggleNav={toggleNav} closeMenu={closeMenu}/>
      <Home closeMenu={closeMenu}/>
      <Tutorials closeMenu={closeMenu}/>
      <Blogs closeMenu={closeMenu}/>
      <Contact closeMenu={closeMenu}/>
    </div>
  );
}

export default App;

import './NavTop.css';
import logo from './assets/Logo.png'

const NavTop = () => (
  <nav className="topNav">
    <ul className="navUl">
      <li className="navLi"><a className="navA" href="#STORE">STORE</a></li>
      <li><a className="navA" href="#TUTORIALS">TUTORIALS</a></li>
    </ul>
    <div className="topDiv">
      <a className="navA" href="#HOME">
        <img className="topImg" src={logo} alt="logo" />
      </a>
    </div>
    <ul className="navUl">
      <li><a className="navA" href="#BLOG">BLOG</a></li>
      <li className="navLi2"><a className="navA" href="#CONTACT">CONTACT</a></li>
    </ul>
  </nav>
)

export default NavTop
import './App.css';
import Home from "./Home"
import NavTop from './NavTop';
import Tutorials from './Tutorials';
import Blogs from './Blogs';
import Contact from './Contact'
import MobileNav from './Mobile_Nav'

function App() {
  return (
    <div className="App">
      <NavTop />
      <MobileNav />
      <Home />
      <Tutorials />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;

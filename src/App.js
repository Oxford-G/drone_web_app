import './App.css';
import Home from "./Home"
import NavTop from './NavTop';
import Tutorials from './Tutorials';
import Blogs from './Blogs';
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <NavTop />
      <Home />
      <Tutorials />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;

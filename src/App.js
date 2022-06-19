import './App.css';
import Home from "./Home"
import NavTop from './NavTop';
import Tutorials from './Tutorials';
import Blogs from './Blogs'

function App() {
  return (
    <div className="App">
      <NavTop />
      <Home />
      <Tutorials />
      <Blogs />
    </div>
  );
}

export default App;

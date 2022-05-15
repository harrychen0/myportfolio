import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
// import Works from "./components/works/Works";
import Biography from "./components/biography/Biography";
import Contact from "./components/contact/Contact";
import"./App.scss";
import {useState} from "react";
import Menu from "./components/menu/Menu";




function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Biography/>
       <Portfolio/>
       {/* <Works/> */}
       <Contact/>
     </div>
    </div>
  );
}

export default App;

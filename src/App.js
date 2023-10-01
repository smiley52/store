//import logo from './logo.svg';
import './App.css';
//import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Navbarr from './components/Navbarr';
import Footer from './components/Footer'
import Search from './components/Search'
import Title from './components/Title'
function App() {
  return (
    <HashRouter >

    <Title/>
    <Search/>
    <Navbarr/>
      <Routes> 
        <Route path="/store" element={<Home />}/>

      <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;

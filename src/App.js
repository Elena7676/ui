import { useEffect, useState } from 'react';
import './App.css';
import LoaderPage from './Loader/LoaderPage';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import About from './About/About';
import Service from './Services/Service';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Footer from './Footer';







function App() {
  const [stateLoader, setStateLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 1000);
    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
      <div className='containerLoader'>
        {stateLoader && <LoaderPage />}
      </div>
      <div className='container'>
        <Router>
          <nav className="nav-wrapper">
            <NavLink to='/' className="btn">главная</NavLink>
            <NavLink to='/about'className="btn">о компании</NavLink>
            <NavLink to='/service' className="btn">наши услуги</NavLink>
            <NavLink to='/team' className="btn">команда</NavLink>
            <NavLink to='/contact' className="btn">Контакты</NavLink>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='team' element={<Team />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </Router>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

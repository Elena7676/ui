import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from "../About";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";


import './style.css';
const Menu = () => {
    return <Router>
        <nav className="nav-wrapper">
            {/* <Link to='/' className="nav-link">главная</Link> */}
            <Link to='/about' className="nav-link">О компании</Link>
            <Link to='/services' className="nav-link">наши услуги</Link>
            <Link to='/team' className="nav-link">команда</Link>
            <Link to='/contact' className="nav-link">Контакты</Link>
        </nav>
        <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='about:title' element={<About />} />
            <Route path='../Services/Service' element={<Services/>} />
            <Route path='../Team/Team' element={<Team />} />
            <Route path='../Contact/Contact' element={<Contact />} />
        </Routes>
    </Router>
}
export default Menu;

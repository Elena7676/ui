import { NavLink,
Router} from "react-router-dom"

function Footer() {
    return (
        <div>
            <Router>
                <nav className="nav-wrapper">
                    <NavLink to='/' className="btn">главная</NavLink>
                    <NavLink to='/about' className="btn">о компании</NavLink>
                    <NavLink to='/service' className="btn">наши услуги</NavLink>
                    <NavLink to='/team' className="btn">команда</NavLink>
                    <NavLink to='/contact' className="btn">Контакты</NavLink>
                </nav>
            </Router>
        </div>
    )
}
export default Footer;
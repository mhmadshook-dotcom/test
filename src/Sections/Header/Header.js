import { Link } from 'react-router-dom'
import React from 'react'
import './Header.css'
import logo from '../../Component/assets/image/logo.png'
import NavItem,{NavItemDropDown} from '../../Component/Navbar/NavItem'
const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar ">
        <div className="container">
            <a href="/" className="navbar-brand">
                <img src={logo} alt=''/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                        </li>
                    <li className="nav-item"><a href="/#" className="nav-link">Browse</a></li>
                    <li className="nav-item dropdown">
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                        <ul className="dropdown-menu">
                            <li><a href="/#" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="/#" className="dropdown-item">Where to go next</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="/#" className="nav-link">Steams</a></li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
// eslint-disable-next-line no-unused-vars
import React from "react";
import {Outlet } from "react-router-dom";
import logo from '../assets/images/site-logo.png';
import { NavLink } from "react-router-dom"


const Layout = () => {
    return(
        <>
            <header className="container fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand logo" href="#"><img src={logo} alt="Logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Aboutus">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Vision">Our Vision</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Client">Client</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Project">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Careers">Careers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}
export default Layout;
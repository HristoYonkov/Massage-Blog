"use client"

import Image from "next/image";

import "./Header.scss";
import logo from '../../images/milen-logo.png';

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC = () => {

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Image src={logo} alt="Relax & Rejuvenate Logo" />
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#book">Book Massage</a></li>
                    </ul>
                </nav>
                <nav className="toaster-nav">
                    <input type="checkbox" id="toaster-toggle" />
                    <label htmlFor="toaster-toggle" className="toaster-toggle-label"><span></span><span></span></label>
                    <div className="toaster-nav-links">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#book">Book Massage</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
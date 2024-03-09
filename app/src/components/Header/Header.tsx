"use client"

import Image from "next/image";

import  "./Header.scss";
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
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#book">Book Massage</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
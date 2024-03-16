"use client"

import Image from "next/image";
import { useState } from "react";

import "./Header.scss";
import logo from '../../images/milen-logo.png';

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckedState = () => {
        setIsChecked(!isChecked);
    }

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Image src={logo} alt="Relax & Rejuvenate Logo" />
                </div>
                <nav className="nav">
                    <ul>
                        {['about', 'services', 'contact', 'book massage'].map((item) => (
                            <li key={`link-${item}`}>
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className="toaster-nav">
                    <input type="checkbox"
                        id="toaster-toggle"
                        checked={isChecked}
                        onChange={handleCheckedState}
                    />
                    <label htmlFor="toaster-toggle" className="toaster-toggle-label"><span></span><span></span><span></span></label>
                    <div className="toaster-nav-links">
                        <ul>
                        {['about', 'services', 'contact', 'book massage'].map((item) => (
                            <li key={`link-${item}`} onClick={handleCheckedState}>
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
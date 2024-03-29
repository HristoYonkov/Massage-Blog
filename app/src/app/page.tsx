"use client"

import { useEffect, useState } from "react";

import About from "@/components/About/About";
import "./page.scss";
import Work from "@/components/Work/Work";
import { smoothScroll } from "@/functions/smoothScroll";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        smoothScroll();
    }, []);

    return (
        <main>
            <About />
            <Work />
            <button
                className={`scroll-top-button ${isVisible ? 'show' : ''}`}
                onClick={scrollToTop}>
                &#8648;
            </button>
        </main>
    );
}

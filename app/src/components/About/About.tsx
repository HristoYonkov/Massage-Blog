"use client"

import { useEffect, useRef, useState } from "react";
import "./About.scss";
import { aboutSectionInfo } from "@/data/aboutSliderData";

const About: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [isSlidingRight, setIsSlidingRight] = useState(true);
    const [animationTrigger, setAnimationTrigger] = useState(false);
    const sliderContainerRef = useRef<HTMLDivElement>(null);

    const info = aboutSectionInfo[index];

    const slide = (move: string): void => {
        if (move === '+') {
            if (index + 1 > 2) {
                setIndex(state => state = 0);
                setIsSlidingRight(state => state = true);
            } else {
                setIndex(state => state + 1);
                setIsSlidingRight(state => state = true);
            }
        }
        if (move === '-') {
            if (index - 1 < 0) {
                setIndex(state => state = 2);
                setIsSlidingRight(state => state = false);
            } else {
                setIndex(state => state - 1);
                setIsSlidingRight(state => state = false);
            }
        }

        setAnimationTrigger(state => state = true);
    }

    useEffect(() => {
        const animationEndHandler = () => {
            setAnimationTrigger(state => state = false);
        };

        if (sliderContainerRef.current) {
            sliderContainerRef.current.addEventListener('animationend', animationEndHandler);
        }

        return () => {
            if (sliderContainerRef.current) {
                sliderContainerRef.current.removeEventListener('animationend', animationEndHandler);
            }
        };
    }, [index]);


    return (
        <section id="about">
            <div ref={sliderContainerRef} className={`slider-container ${isSlidingRight ? 'slideRight' : 'slideLeft'} ${animationTrigger ? 'animate' : ''}`}>
                <div className="img-container-about">
                    <img src={info.imgSrc} alt="about-image" />
                </div>
                <article className="article-container-about">
                    <h2>{info.title}</h2>
                    <p>{info.description}</p>
                </article>
            </div>
            <button className="prev-btn" onClick={() => (slide('-'))}>&#60;</button>
            <button className="next-btn" onClick={() => (slide('+'))}>&#62;</button>
        </section>

    )
}

export default About;
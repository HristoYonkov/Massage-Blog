"use client"

import { useEffect, useState } from "react";
import "./About.scss";
import { aboutSectionInfo } from "@/data/aboutSliderData";

const About: React.FC = () => {
    const [index, setIndex] = useState(0);
    const info = aboutSectionInfo[index];

    const slide = (move: string): void => {
        if (move === '+') {
            if (index + 1 > 2) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }
        if (move === '-') {
            if (index - 1 < 0) {
                setIndex(2);
            } else {
                setIndex(index - 1);
            }
        }
    }

    return (
        <section id="about">
            <div className="slider-container">
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
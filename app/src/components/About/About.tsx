"use client"

import { useEffect, useState } from "react";
import "./About.scss";
import { aboutSectionInfo } from "@/data/aboutSliderData";

const About: React.FC = () => {
    const [index, setIndex] = useState(0);
    const info = aboutSectionInfo[index];

    const slide = (page: number, move: string): void => {
        if (page > 2) setIndex(0);
        if (page < 0) setIndex(2);
    }

    useEffect(() => {
        setIndex(index + 1);

    }, [index]);

    return (
        <section id="about">
            <div className="slider-container">
                <div className="img-container-about">
                    <img src={info.imgSrc} alt="about-image" />
                </div>
                <article className="article-container-about">
                    <h2>About Me</h2>
                    <p>Welcome to Relax & Rejuvenate Massage Therapy! I specialize in providing high-quality massage services to help you unwind, destress, and feel your best.</p>
                    <h1>My Experience</h1>
                    <p>Welcome to Relax & Rejuvenate Massage Therapy! I specialize in providing high-quality massage services to help you unwind, destress, and feel your best.</p>
                    <h1>My Hobbies</h1>
                    <p>I like to spend time in mountains and i enjoy riding offroad. If you are feeling well after the massage feel free to come and ride with me!</p>
                </article>
            </div>
            <button className="prev-btn">p</button>
            <button className="next-btn">n</button>
        </section>

    )
}

export default About;
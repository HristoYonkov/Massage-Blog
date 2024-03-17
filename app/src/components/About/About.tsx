"use client"

import { useState } from "react";
import "./About.scss";

const About: React.FC = () => {
    const [index, setIndex] = useState(0);


    return (
        <section id="about">
            <div className="slider-container">
                <div className="img-container-about">
                    <img src="https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/417524460_374351538542578_7663349785761082265_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cPl9Faevjc4AX-WZeO-&_nc_ht=scontent.fsof8-1.fna&oh=00_AfBRFVjVmSBHjWK5pw8Cj8Pn1Lt_qjuEhyJYwaHX4Cejgg&oe=65FA62F6" alt="about-image" />
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
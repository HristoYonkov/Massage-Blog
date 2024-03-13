"use client"

import "./About.scss";

const About: React.FC = () => {

    return (
        <section id="about">
            <section id="about">
                <div className="img-container-about">
                    <img src="https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/417524460_374351538542578_7663349785761082265_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nntmzemIyjMAX8GWV9f&_nc_ht=scontent.fsof8-1.fna&oh=00_AfCMwrLBsGKneH_ir_LHTqP7cTKsZHyLoc6cSIMHwqXWbQ&oe=65F47436" alt="about-image" />
                </div>
                <article className="article-container-about">
                    <h2>About Me</h2>
                    <p>Welcome to Relax & Rejuvenate Massage Therapy! I'm specialize in providing high-quality massage services to help you unwind, destress, and feel your best.</p>
                </article>
            </section>
        </section>

    )
}

export default About;
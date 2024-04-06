"use client"

import { workSectionData } from "@/data/workSectionData";

import "./Work.scss";

const Work: React.FC = () => {

    const info = workSectionData;

    return (
        <section id="services">
            <h2>Services</h2>
            {info.map((item) => (
                <div className="services-container">
                    <div className="img-container-services">
                        <img src={`/images/${item.imgSrc}`} />
                    </div>
                    <article className="article-container-services">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </article>
                </div>
            ))}
        </section>
    )
}

export default Work;
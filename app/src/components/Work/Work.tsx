"use client"

import { workSectionData } from "@/data/workSectionData";

import "./Work.scss";

const Work: React.FC = () => {

    const info = workSectionData;

    return (
        // TODO: To map the services-container's!
        <section id="services">
            <h2>Services</h2>
            <div className="services-container">
                <div className="img-container-services">
                    <img src={`/images/${info[0].imgSrc}`} />
                </div>
                <article className="article-container-services">
                    <h2>{info[0].title}</h2>
                    <p>{info[0].description}</p>
                </article>
            </div>
            <div className="services-container">
                <div className="img-container-services">
                    <img src={`/images/${info[1].imgSrc}`} />
                </div>
                <article className="article-container-services">
                    <h2>{info[1].title}</h2>
                    <p>Welcome to Relax & Rejuvenate Massage Therapy! I specialize in providing high-quality massage services to help you unwind, destress, and feel your best.</p>
                </article>
            </div>
            <div className="services-container">
                <div className="img-container-services">
                    <img src={`/images/${info[2].imgSrc}`} />
                </div>
                <article className="article-container-services">
                    <h2>Hot Stone Massage</h2>
                    <p>Welcome to Relax & Rejuvenate Massage Therapy! I specialize in providing high-quality massage services to help you unwind, destress, and feel your best.</p>
                </article>
            </div>
            <div className="services-container">
                <div className="img-container-services">
                    <img src={`/images/${info[3].imgSrc}`} />
                </div>
                <article className="article-container-services">
                    <h2>Suction Cups</h2>
                    <p>Welcome to Relax & Rejuvenate Massage Therapy! I specialize in providing high-quality massage services to help you unwind, destress, and feel your best.</p>
                </article>
            </div>
        </section>

    )
}

export default Work;
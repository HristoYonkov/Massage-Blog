"use client"

import "./Contact.scss";

const Contact: React.FC = () => {

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <article className="article-container-contact">
                <div className='image-holder-contact'>
                    <img src={`/images/email.png`} alt="email" />
                    <a href="mailto:hristopturs@gmail.com">hristopturs@gmail.com</a>
                </div>
                <div className='image-holder-contact'>
                    <img src={`/images/mobile.png`} alt="mobile" />
                    <a href="tel: +359 (899) 567-539">+359 (899) 567-539</a>
                </div>
            </article>
        </section>
    )
}

export default Contact;
"use client"

import { FaGithubSquare } from "react-icons/fa";
import  "./Footer.scss";

const Footer: React.FC = () => {

    return (
        <footer>
            <div className="container">
                <a href="https://github.com/HristoYonkov"><FaGithubSquare /></a>
                <p>&copy; 2024 Hristo Yonkov</p>
            </div>
        </footer>
    )
}

export default Footer;
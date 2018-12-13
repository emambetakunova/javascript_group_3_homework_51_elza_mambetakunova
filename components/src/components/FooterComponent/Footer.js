import React from 'react';
import './Footer.css';


const Footer = (props) => {
    return (
        <div className="footerContent">
            <p>{props.text}</p>
        </div>

    )
};

export default Footer;
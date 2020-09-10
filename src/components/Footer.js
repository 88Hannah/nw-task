import React from 'react';

function Footer() {

    return (
        <footer>
            <div className="footer-container">
                <ul>
                    <li className="footer__item"><a className="footer__link" href="#">About Us</a></li>
                    <li className="footer__item"><a className="footer__link" href="#">Contact Us</a></li>
                    <li className="footer__item"><a className="footer__link" href="#">Wines</a></li>
                    <li className="footer__item"><a className="footer__link" href="#">FAQs</a></li>
                </ul>

                <div className="social">
                    <a className="social__link footer__link" href="#" aria-label="Our Facebook page"><i className="fab fa-facebook-square social-icon"></i></a>
                    <a className="social__link footer__link" href="#" aria-label="Our Twitter page"><i className="fab fa-twitter-square social-icon"></i></a>
                </div>
            </div>  
            <p className="copy">&copy; Sangar's Wines 2020</p>     
        </footer>
    )
};

export default Footer;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp,faFacebook,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

export function Footer(){
    return(
        <footer id="Footer">
            <div>
                <div>
                    <div className='logo'>
                    <FontAwesomeIcon icon={faPlane}/>
                    <h1>EgyTour</h1>
                </div>
                    <p>Enjoy your vacition</p>
                </div>
                <div>
                    <h2>Service</h2>
                    <ul>
                        <li><a href="#AboutUs">About Us</a></li>
                        <li><a href="#Footer">Contact Us</a></li>
                        <li><Link to='/discover'>Services</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <div><a href="mailto:caffology@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a><p>sameh231115@gmail.com</p></div>
                    <div><a href="http://wa.me/+201097829089"><FontAwesomeIcon icon={faWhatsapp}/></a><p>+20 109 7829 089</p></div>
                    <div>
                        <a href='https://www.facebook.com/profile.php?id=100085262232189'><FontAwesomeIcon icon ={faFacebook}/></a>
                        <a href="https://github.com/SamehElzamly?fbclid=IwAR2qCJ1pJUG8BWyqbAg2_Xy7jC-tpsHhDbixMZ-5CsBOwNeqhCEWu4Bf5uk"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.instagram.com/samehelzamly/"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
                            <div className="foot">
                <FontAwesomeIcon icon={faCopyright}/>
                <p>Sameh SamehElzamly 2023 || All Rights Reserved</p>
            </div>
            </div>
        </footer>
        );
}
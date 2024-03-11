import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer =()=>{
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Chandra</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href="/">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a href="/">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>   
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>   
        </div>
    )
}
export default Footer;
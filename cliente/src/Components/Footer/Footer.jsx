import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faGooglePlusG, faInstagram} from "@fortawesome/free-brands-svg-icons"
import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
    
    return (
        <div ClassName={styles.Foot}>
        <div className={styles.pie}>
        <footer>
                <div className={styles.logofooter}>
                <i className={styles.uten}><FontAwesomeIcon icon={faUtensils}/></i>
             
             
                </div>
                <div className={styles.redesfooter}>
                    <a href="#"><i className={styles.face}><FontAwesomeIcon icon={faFacebookF}/></i></a>
                    <a href="#"><i className={styles.goo}><FontAwesomeIcon icon={faGooglePlusG}/></i></a>
                    <a href="#"><i className={styles.ins}><FontAwesomeIcon icon={faInstagram}/></i></a>
                </div>
                <hr/>
                <h4> Todos los derechos reservados, copyright &copy; 2021</h4>     
            </footer>
        </div>
               

        </div>
    )
};

export default Footer;
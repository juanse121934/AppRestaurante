import { faBell, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./Nav.module.css"




const Nav = () => {

  

    return (
        <div className={styles.nav}>
               <nav className={styles.encabezado}>
            <section class={styles.contenedor}>
                <div class={styles.logo}>
                   <FontAwesomeIcon icon={faUtensils}/>
                  <hr />
                </div>
                <div class={styles.enlaces}>
                    <a href="#">Inicio</a>
                    <a href="#">Nuestra Historia</a>
                    <a href="#">Servicios</a>
                    <a href="#">Contacto</a>
                    <a href="#">Ubicación</a>
                </div>
                
            </section>
        </nav>
      
        </div>
    )
}


export default Nav;
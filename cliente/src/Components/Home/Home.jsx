import React from "react";

import styles from "./Home.module.css"

const Home = () => {
    
    return (
        <div ClassName={styles.div}>
            
            <h1 className={styles.titulo}>
                hello world
                desde Home
            </h1>
            <input type="text" ></input>
            <button className={styles.Button} >Buscar</button>

        </div>
    )
};

export default Home;
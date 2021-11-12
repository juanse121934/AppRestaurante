import React from "react";

import styles from "./Nav.module.css"




const Nav = () => {

    const enlaces1 = [
        { id: 1, titulo: 'Crear Receta', patch: '/recipes/create' },
        { id: 2, titulo: 'Menú', patch: '/menu' }
    ]

    return (
        <div className={styles.nav}>
            {
                enlaces1.map(e => (
                    <div ClassName={styles.navAct}>
                        <div>
                            <li className={styles.Li} key={e.id} >{e.titulo}</li>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}


export default Nav;
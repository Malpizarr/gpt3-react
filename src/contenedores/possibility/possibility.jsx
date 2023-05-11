import React from 'react'
import './possibility.css'
import possibility from "../../assets/possibility.png"


const Possibility = () => {
    return (
        <div className={"gpt3__possibility section__padding"} id={"possi"}>
            <div className={"gpt3__possibility-img"}>
                <img src={possibility} alt={"possibility"}/>
            </div>
            <div className={"gpt3__possibility-text"}>
                <h4>Solicita acceso anticipado para Iniciar</h4>
                <h1 className={"gradient__text"}>Las posibilidades estan fuera de tu imaginacion</h1>
                <p>Aunque la idea de recibir asistencia mientras se viaja puede parecer atractiva, a veces puede resultar desagradable. No siempre es fácil aceptar la ayuda de extraños, y a menudo nos encontramos cuestionando sus intenciones. A pesar de esto, debemos recordar que no todas las personas tienen malas intenciones y que,
                    a veces, necesitamos dejar de lado nuestras inhibiciones para aceptar la ayuda que se nos ofrece.
                </p>
                <h4>Solicita acceso anticipado para Iniciar</h4>
            </div>
        </div>
    )
}
export default Possibility

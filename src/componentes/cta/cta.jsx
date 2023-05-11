import React from 'react';
import './cta.css';

const Cta = () => {
    return (
        <div className={"gpt3__cta section__margin" }>
                <div className={"gpt3__cta-text"}>
                    <p>Solicita acceso anticipado para empezar</p>
                    <h1>¡Registrate ahora & empieza a explorar las infinitas posibilidades!</h1>
                </div>
                <div className={"gpt3__cta-button"}>
                    <button className={"gradient__button"}>Solicitar Acceso</button>
                </div>
        </div>
    )
}
export default Cta

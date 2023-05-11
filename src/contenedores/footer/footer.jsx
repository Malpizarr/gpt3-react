import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className={"gpt3__footer"}>
            <div className={"gpt3__footer-header"}>
                <h1 className={"gradient__text"}>
                    Entra al futuro antes que los demas
                </h1>
                <button className={"gpt3__footer-header-button"}>Solicita acceso anticipado</button>
            </div>
            <div className={"gpt3__footer-container"}>
                <div className={"gpt3__footer-container-groupa"}>
                    <h3>GPT-3</h3>
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved.
                        Pagina web creada por Mauricio Alpizar utilizando React</p>
                </div>
                <div className={"gpt3_grupos"}>
                    <div className={"gpt3__footer-container-groupb"}>
                        <p><b>Enlances</b></p>
                        <p>Redes sociales</p>
                        <p>Informacion</p>
                        <p>Contacto</p>
                        <p>About us</p>
                    </div>

                    <div className={"gpt3__footer-container-groupc"}>
                        <p><b>Compañia</b></p>
                        <p>Terminos y Condiciones</p>
                        <p>Politicas de privacidad</p>
                        <p>Contacto</p>
                    </div>
                    <div className={"gpt3__footer-container-groupd"}>
                        <p><b>Ponte en contacto</b></p>
                        <p>Crechterwoord K12 182 DK Alknjkcb</p>
                        <p>085-132567</p>
                        <p>info@ejemplo.com</p>
                    </div>
                </div>
            </div>
            <p className={"p"}>© 2023 GPT-3. All rights reserved. Pagina Creada por: Mauricio Alpizar</p>
        </div>
    )
}
export default Footer

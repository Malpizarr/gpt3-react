import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
    return (
        <div className={"gpt3__header section__padding"} id={"home"}>
            <div className={"gpt3__header-content"}>
                <h1 className={"gradient__text"}>
                    Hagamos algo increíble con OpenAI GPT-3!
                </h1>
                <p>
                   GPT-3 es una red neuronal de lenguaje natural que puede generar texto, código, imágenes, audio y video.
                </p>
                <div className={"gpt3__header-content__input"}>
                    <input type={"email"} placeholder={"Ingresa tu email"}/>
                    <button type={"button"}>Enviar</button>
                </div>
                <div className={"gpt3__header-content__people"}>
                    <img src={people} alt={"people"}/>
                    <p>+1600 han intentado entrar en las ultimas 24 horas</p>
                </div>
            </div>
                <div className={"gpt3__header-image"}>
                    <img src={ai} alt={"ai"}/>
                </div>
        </div>
    )
}
export default Header

import React from 'react'
import './features.css'
import {Feature} from "../../componentes";

const FeatureData = [
    {
        title: 'Generacion de texto',
        text: 'GPT-3 puede generar texto de alta calidad en una variedad de estilos, desde noticias, ficción, poesía, ensayos, hasta guiones de películas, diálogos de películas, etc. Puede generar texto de acuerdo con el estilo y el contenido que desee.'
    },
    {
        title: 'Traduccion de Idiomas',
        text: 'El modelo GPT3 tiene la capacidad de traducir entre 100 idiomas. Puede traducir entre idiomas de manera muy eficiente y precisa. Puede traducir entre idiomas de manera muy eficiente y precisa.'
    },
    {
        title: 'Analisis de Seguimiento',
        text: 'GPT3 tiene la capacidad de analizar el seguimiento de un texto de manera muy eficiente y precisa. Puede analizar el seguimiento de un texto de manera muy eficiente y precisa.'
    },
    {
        title: 'Conversacion',
        text: 'GPT3 tiene la capacidad de mantener una conversación con un humano. Puede mantener una conversación con un humano de manera muy eficiente y precisa.'
    }
    ]
const Features = () => {
    return (
        <div className={"gpt3__features section__padding"} id={"features"}>
            <div className={"gpt3__features-heading"}>
                <h1 className={"gradient__text"}>
                    ¡El futuro de la inteligencia artificial es ahora!
                </h1>
                <p>
                    Obten acceso anticipado!
                </p>
            </div>
            <div className={"gpt3__features-container"}>
                {FeatureData.map((feature, index) => (

                    <Feature title={feature.title} text={feature.text} key={feature.title + index} />

                    ))}
            </div>
        </div>
    )
}
export default Features

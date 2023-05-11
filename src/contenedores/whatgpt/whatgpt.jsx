import React from 'react'
import './whatgpt.css'
import {Feature} from "../../componentes";

const Whatgpt = () => {
    return (
        <div className={"gpt3__whatgpt3 section__margin"} id={"wgpt3"}>
            <div className={"hover-ring"}></div>
            <div className={"gpt3__whatgpt3-feature"}>
                <Feature title={"¿Qué es GPT3?"} text={"GPT-3 son las siglas de «Generative Pre-trained Transformer 3», un sistema desarrollado por la " +
                    "californiana OpenAI. Se trata de un modelo lingüístico de inteligencia artificial capaz de generar textos similares a los humanos."}/>
            </div>
            <div className={"gpt3__whatgpt3-heading"}>
               <h1 className={"gradient__text"}>
                   Las posibilidades de GPT-3 son infinitas
               </h1>
                <p>
                    Explora la libreria de modelos de OpenAI y descubre las posibilidades de GPT-3
                </p>
            </div>
            <div className={"gpt3__whatgpt3-container"}>
                <Feature title={"Chatbots"} text={"Los chatbots de GPT-3 son sistemas de procesamiento de lenguaje sofisticados desarrollados por " +
                    "OpenAI que pueden entender el contexto de los mensajes y generar respuestas coherentes."}/>
                <Feature title={"Conocimientos"} text={"La función principal de GPT-3 es autocompletar tareas de lenguaje humano. Introduciendo unas " +
                    "pocas palabras en el modelo lingüístico de GPT-3, el " +
                    "sistema puede completar una frase compleja o incluso un párrafo entero con un alto grado de precisión y fluidez . "}/>
                <Feature title={"Educacion"} text={"GPT-3 puede ser utilizado en la educación superior para ayudar a los profesores a evaluar y proporcionar retroalimentación a los estudiantes de manera más " +
                    "rápida y precisa, lo que les permite enfocarse en otras tareas y en la formación de sus estudiantes."}/>
            </div>
        </div>
    )
}
export default Whatgpt



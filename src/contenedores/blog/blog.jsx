import React from 'react';
import './blog.css';
import {Article} from "../../componentes";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
    return (
        <div className={"gpt3__blog section__padding"} id={"blog"}>
            <div className={"gpt3__blog-heading"}>
                <h1 className={"gradient__text"}>Mucho esta ocurriendo ahora mismo, Estamos blogeando al respecto!.</h1>
            </div>
            <div className={"gpt3__blog-container"}>
                <div className={"gpt3__blog-container-groupa"}>
                    <Article imgUrl={blog01} fecha={"Hoy"} titulo={"OpenAi lanza GPT-4 32k!"}/>
                </div>
                <div className={"gpt3__blog-container-groupb"}>
                    <Article imgUrl={blog02} fecha={"26 de Febrero, 2023"} titulo={"ChatGPT Es un exito"}/>
                    <Article imgUrl={blog03} fecha={"26 de Febrero, 2023"} titulo={"ChatGPT Es un exito"}/>
                    <Article imgUrl={blog04} fecha={"26 de Febrero, 2023"} titulo={"ChatGPT Es un exito"}/>
                    <Article imgUrl={blog05} fecha={"26 de Febrero, 2023"} titulo={"ChatGPT Es un exito"}/>
                </div>
            </div>
        </div>
    )
}
export default Blog

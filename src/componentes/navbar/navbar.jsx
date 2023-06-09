import React, {useState} from 'react'
import './navbar.css'

import  logo  from "../../assets/logo.svg";
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";
//Utilizando BEM para mejor estructuras


//Forma de crear componentes Reutilizables dentro de React
const Menu = () => (
    <>
        <p><a href="#home">Inicio</a></p>
        <p><a href="#wgpt3">¿Qué es GPT3?</a></p>
        <p><a href="#possi">Posibilidades</a></p>
        <p><a href="#features">Funciones</a></p>
        <p><a href="#blog">Blog</a></p>
    </>
)
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className={"gpt3__navbar"}>
            <div className={"gpt3__navbar-links"}>
                <div className={"gpt3__navbar-links_logo"}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={"gpt3__navbar-links_container"}>
                    <Menu/>
                </div>
            </div>
            <div className={"gpt3__navbar-sign"}>
                <p>Sign in</p>
                <button type={"button"}>Sign Up</button>
            </div>
            <div className={"gpt3__navbar-menu"}>
                {menu
                    ? <RiCloseLine color={"#fafafa"} size={27} onClick={()=>setMenu(false)}/>
                    : <RiMenu3Line color={"#fff"} size={27} onClick={()=>setMenu(true)}/>
                }
                {menu && (
                    <div className={"gpt3__navbar-menu_container scale-up-center"}>
                        <div className={"gpt3__navbar-menu_container_links"}>
                            <Menu/>
                            <div className={"gpt3__navbar-menu_container-sign"}>
                                <p>Sign in</p>
                                <button type={"button"}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
export default Navbar

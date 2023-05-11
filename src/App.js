import React from 'react'
import { Blog, Footer, Header, Whatgpt, Features, Possibility } from "./contenedores";
import { Cta, Brand, Navbar} from "./componentes";
import './App.css'

const App = () => {
    return (
        <div className={"App"}>
            <div className={"gradient__bg"}>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Whatgpt />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}
export default App

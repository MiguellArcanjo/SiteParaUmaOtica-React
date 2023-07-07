import React from "react";
import './style.css'

export default function Topo() {
    return (
        <header>
            <div className="limita-secao topo">
                <img src="assets/logo.png" alt="Imagem De um oculos e o nome da clinica" className="imgLogo"/>
                
                <nav>
                    <a href="">PRODTUOS</a>
                    <a href="">SOBRE</a>
                    <a href="">CONTATO</a>
                </nav>
            </div>   
        </header>
    );
}
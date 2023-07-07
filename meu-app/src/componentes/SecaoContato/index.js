import React from "react";
import './style.css'

export default function SecaoContato() {
    return (
        <section className="secaoContato">
            <div className="limita-secao conteudoContato">
                <h1>FALE CONOSCO</h1>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

                <div className="cards-contato">
                    <div>
                        <h3>Contato</h3>
                        <div className="divIcon">
                            <img src="assets/local.png" />
                            <p className="local">Nova Iguaçu, RJ</p>
                        </div>
                        
                        <div className="divIcon">
                            <img src="assets/telefone.png" />
                            <p className="tel">(21) 9999-9999</p>
                        </div>
                        
                        <div className="divIcon">
                            <img src="assets/email.png" />
                            <p className="email">contato@oticavida.com</p>
                        </div>
                    </div>

                    <div className="div2">
                        <h3>Nossas Redes Sociais</h3>

                        <div className="divIcon">
                            <img src="assets/fb.png" />
                            <p className="face">/OticaVida</p>
                        </div>

                        <div className="divIcon">
                            <img src="assets/ig.png" />
                            <p className="ig">@oticavidarj</p>
                        </div>

                        <div className="divIcon">
                            <img src="assets/tt.png" />
                            <p className="tt">@oticavidarj</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
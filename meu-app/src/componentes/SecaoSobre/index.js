import React from "react";
import './style.css'

export default function SecaoSobre() {
    return (
        <section className="secaoSobre">
            <div className="limita-secao conteudoSobre">
                <h1>QUEM SOMOS NÓS?</h1>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

                <div className="box-card">
                    <img src="assets/loja.png"/>
                    
                    <div>
                        <h1>NOSSAS FILIAIS</h1>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    
                    <div>
                        <h1>ATENDIMENTO FLEXIVEL</h1>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img src="assets/atendimento.png"/>
                </div>

                
            </div>
        </section>
    );
}
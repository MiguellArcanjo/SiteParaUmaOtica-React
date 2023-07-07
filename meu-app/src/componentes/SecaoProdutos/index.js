import React from "react";
import './style.css'

export default function SecaoProduto() {
    return (
        <section className="secaoProdutos">
            <div className="limita-secao">
                <h2>NOSSO PRODTUOS</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
                Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

                <div className="cards">
                    <div>
                        <h3>óculos de grau</h3>
                        <img src="assets/oculos01.png" alt="" />
                        <p>R$ 500,00</p>
                    </div>
                
                    <div>
                        <h3>Óculos transition</h3>
                        <img src="assets/oculos02.png" alt="" />
                        <p>R$ 750,00</p>
                    </div>
                
                    <div>
                        <h3>Óculos de sol</h3>
                        <img src="assets/oculos03.png" alt="" />
                        <p>R$ 700,00</p>
                    </div>
                
                    <div>
                        <h3>Óculos infantil</h3>
                        <img src="assets/oculos04.png" alt="" />
                        <p>R$ 500,00</p>
                    </div>
                
                </div>

                <p>Todos os nosos produtos incluem:</p>
                <ul className="listaProdutos">
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    );
}
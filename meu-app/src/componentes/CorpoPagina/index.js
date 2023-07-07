import React from "react";

import SecaoCapa from "../SecaoCapa";
import SecaoProduto from "../SecaoProdutos";
import SecaoSobre from "../SecaoSobre";
import SecaoContato from "../SecaoContato";

export default function CorpoPagina() {
    return (
        <main>
            <SecaoCapa />
            <SecaoProduto />
            <SecaoSobre />
            <SecaoContato />
        </main>
    );  
}
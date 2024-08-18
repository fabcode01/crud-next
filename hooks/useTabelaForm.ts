import { useState } from "react";

export default function useTabelaForm(){
    const[visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

    const exibirTabela = ()=>{
        setVisivel('tabela')
    }

    const exibirForm = ()=>{
        setVisivel('formulario')
    }

    return {
        formularioVisivel: visivel === 'formulario',
        tabelaVisivel: visivel === 'tabela',
        
        exibirTabela,
        exibirForm
    }
}
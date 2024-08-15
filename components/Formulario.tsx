import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";
import { cancelIcon, saveIcon } from "./Icones";

interface FormularioProps{
    cliente: Cliente
    cancelado?: ()=>void
    clienteMudou?: (cliente: Cliente)=>void
}

export default function Formulario(props: FormularioProps){

    const id = props.cliente?.id

    const[nome, setNome] = useState(props.cliente?.nome ?? '')

    const[idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada 
                    texto="Código" 
                    valor={id}
                    className="mb-4"
                    somenteLeitura
                    />
            ):false}
            
            <Entrada 
                texto="Nome"
                valor={nome}
                className="mb-4"
                valorMudou={setNome}
                />


            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
                />

                <div className="flex justify-end mt-5 gap-4">
                    <Botao onClick={()=> props.clienteMudou?.(new Cliente(nome,+idade, id))} cor="btn-accent" icon={saveIcon}>
                        {id ? 'Alterar' : 'Salvar'}
                    </Botao>

                    <Botao cor="btn-error" icon={cancelIcon} onClick={props.cancelado}>
                        Cancelar
                    </Botao>
                </div>
        </div>
    )
}
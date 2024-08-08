import Cliente from "@/core/Cliente";
import { editIcon, trashIcon } from "./Icones";

interface TableProps{   
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente)=> void
    clienteExcluido?: (cliente: Cliente)=> void
}

export default function Table(props: TableProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return (
            <thead className="text-white bg-gray-900">
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    {exibirAcoes ? <th className="text-center">Ações</th> : false}
                </tr>
            </thead>

        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i)=>{
            return (
                <tbody>
                    <tr key={cliente.id}
                        className={`${i % 2 === 0 ? 'bg-slate-100' : ''}`}
                    >
                        <td className="text-purple-800 ">{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.idade}</td>
                        {exibirAcoes ? renderizarAcoes(cliente) : false}
                        
                    </tr>
                </tbody>
            )
        })

    }

    function renderizarAcoes(cliente: Cliente){

        return (
            <td className={`flex items-center justify-center`}>
                {props.clienteSelecionado ? (

                <button onClick={() => props.clienteSelecionado?.(cliente)} className={`text-green-400 hover:text-green-700 m-1`}>
                    {editIcon}
                </button>

                ):false}
                

                {props.clienteExcluido ? (
                    
                <button onClick={()=>props.clienteExcluido?.(cliente)} className={`text-red-500 hover:text-red-700`}>
                    {trashIcon}
                </button>
                ): false}
            </td>
        )
    }

    

  return (
      <table className="table table-zebra">

            {renderizarCabecalho()}
            {renderizarDados()}
      </table>
  
  );

}
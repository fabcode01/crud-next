
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { addIcon } from "@/components/Icones";
import { Layout } from "@/components/Layout";
import Table from "@/components/Table";

import useClientes from "@/hooks/useClientes";
import Head from "next/head";



export default function Home() {

  const{
    cliente, 
    clientes, 
    novoCliente,
    salvarCliente, 
    selecionarCliente, 
    excluirCliente, 
    tabelaVisivel,
    exibirTabela
  } = useClientes()

 
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-400 to-pink-300
    `}>
      <Head>
        <title>Crud Next</title>
      </Head>

      
      	<Layout titulo="Cadastro">  
        {tabelaVisivel ? (
          <>

          <Table clientes={clientes} 
          clienteSelecionado={selecionarCliente}
          clienteExcluido={excluirCliente}
        ></Table>
          </>
        ):(

          <Formulario clienteMudou={salvarCliente} cliente={cliente} cancelado={()=>exibirTabela()}>

          </Formulario>

        )}


              <div className="flex justify-end">
          { tabelaVisivel ? (
                <Botao className="mt-5" cor='btn-neutral' icon={addIcon} onClick={()=>novoCliente()}>
                    Novo cliente
                </Botao>
          ):false}
              </div>
        </Layout>

    </div>
  );
}

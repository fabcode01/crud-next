import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { addIcon } from "@/components/Icones";
import { Layout } from "@/components/Layout";
import Table from "@/components/Table";
import Cliente from "@/core/Cliente";
import Head from "next/head";
import { useState } from "react";



export default function Home() {

  const[visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
  
    new Cliente('Bia', 24, '2'),
  
    new Cliente('Pedro', 64, '3'),

    new Cliente('Julio', 62, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
      console.log(cliente.nome);
      
  }

  function clienteExcluido(cliente: Cliente){
      console.log('Excluir... ' + cliente.nome);
      
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)


    setVisivel('tabela')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-400 to-pink-300
    `}>
      <Head>
        <title>Crud Next</title>
      </Head>

      
      	<Layout titulo="Cadastro">  
        {visivel === 'tabela' ? (
          <>

          <Table clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Table>
          </>
        ):(

          <Formulario clienteMudou={salvarCliente} cliente={clientes[2]} cancelado={()=>setVisivel('tabela')}>

          </Formulario>

        )}


         


              <div className="flex justify-end">
          {visivel === 'tabela' ? (
                <Botao className="mt-5" cor='btn-neutral' icon={addIcon} onClick={()=>setVisivel('formulario')}>
                    Novo cliente
                </Botao>
          ):false}
              </div>
        </Layout>

    </div>
  );
}

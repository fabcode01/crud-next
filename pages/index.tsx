import Botao from "@/components/Botao";
import { Layout } from "@/components/Layout";
import Table from "@/components/Table";
import Cliente from "@/core/Cliente";
import Head from "next/head";



export default function Home() {

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

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-400 to-pink-300
    `}>
      <Head>
        <title>CRUD Next</title>
      </Head>

      
      	<Layout titulo="Cadastro">  
         

            <Table clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
            ></Table>


              <div className="flex justify-end">
                <Botao className="mt-5" cor='btn-neutral'>
                    Novo cliente
                </Botao>
              </div>
        </Layout>

    </div>
  );
}

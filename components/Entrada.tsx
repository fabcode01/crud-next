interface EntradaProps{
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    className?: string
    somenteLeitura?: boolean
    valorMudou?: (valor: any)=>void
}

export default function Entrada(props: EntradaProps){
    return (
        <div className={`flex flex-col ${props.className}`}>

            <label id="input" className="mb-2 mt-4">
                {props.texto}
            </label>

            <input id="input" type={props.tipo} 
            onChange={e => props.valorMudou?.(e.target.value)}
            readOnly={props.somenteLeitura}
            value={props.valor}
            className={`input input-bordered w-full bg-gray-100 focus:outline-none ${props.somenteLeitura ? '' : 'focus:bg-white'}`} />
        </div>
    )
}
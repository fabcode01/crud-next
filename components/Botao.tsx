import { addIcon } from "./Icones"

interface BotaoProps{
    cor?: 'btn-neutral' | "btn-outline" | 'btn-accent'
    children: any
    className?: string
}

export default function Botao(props: BotaoProps){
    return (
        <button className={`btn ${props.cor} ${props.className}
        `}>
            {addIcon}
            {props.children}
        </button>
    )
}
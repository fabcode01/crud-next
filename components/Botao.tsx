import { addIcon } from "./Icones"

interface BotaoProps{
    cor?: 'btn-neutral' | "btn-outline" | 'btn-accent' | 'btn-error'
    children: any
    className?: string
    icon?: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    return (
        <button onClick={props.onClick} className={`btn ${props.cor} ${props.className}
        `}>
            {props.icon}
            {props.children}
        </button>
    )
}
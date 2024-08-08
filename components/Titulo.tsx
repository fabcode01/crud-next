
export default function Titulo(props){
    return (
        <div className={`
            flex flex-col justify-center
        `}>
            <h1 className={`
                pl-7 py-2 text-2xl
            `}>
                {props.children}
            </h1>
            <hr className="border border-gray-400"/>
        </div>
    )
}
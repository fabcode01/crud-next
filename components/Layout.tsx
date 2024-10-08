import Titulo from "./Titulo"

interface LayoutProps {
    titulo: string
    children: any
}

export function Layout(props: LayoutProps) {
  return (
    <div
      className={`
            overflow-auto
            flex flex-col w-2/3
            bg-white text-gray-900 rounded-md
        `}
    >
         <Titulo>{props.titulo}</Titulo>
        <div className="p-6">
            {props.children}
        </div>
    </div>
  );
}

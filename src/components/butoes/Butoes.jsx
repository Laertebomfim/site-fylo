import { tv } from "tailwind-variants"
const button = tv({
    base: "text-white text-xl capitalize hover:bg-slate-800 py-1 px-3 rounded-xl",
    
  })

export default function Botao(){

    return( <nav className="hidden min-w-[325px] w-1/2 max-w-[500px] sm:flex justify-between"> 
      <button className={button()}>recursos</button>
      <button className={button()}>equipe</button>
      <button className={button()}>faça login</button>
    </nav>
    )
  }
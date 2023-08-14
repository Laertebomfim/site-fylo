import { X } from "lucide-react";
import { tv } from "tailwind-variants";
import ProptTypes from "prop-types"
const button = tv({
    base:'text-white text-xl capitalize hover:bg-slate-800 py-1 px-3 rounded-xl ',
    variants:{
      espasamento:{
        button:"col-start-1 col-span-2 text-left ",
        class:" box-content col-start-2 ml-auto my-auto p-1"
      }
    }
  })
export default function ButoesMobile ({Mobile}){
    return( <nav className="absolute right-0 -top-1 h-full w-1/2 bg-slate-600 pt-2 px-3 rounded-l-xl sm:hidden z-20"> 
    <div className="grid grid-cols-2 gap-2 h-1/3">
    <X color="white" className={button({espasamento:"class"})} onClick={()=>{Mobile(false)}}/>
    <button className={button({espasamento:"button"})}>recursos</button>
    <button className={button({espasamento:"button"})}>equipe</button>
    <button className={button({espasamento:"button"})}>faça login</button>
    </div>
  </nav>
  )

}
ButoesMobile.propTypes ={
    Mobile:ProptTypes.func
}
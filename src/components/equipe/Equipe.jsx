import PropTypes from"prop-types"

export default function Equipe({Texto, Img, Nome, Cargo}){
    return(

        <article className="p-8 bg-fundo rounded-lg mb-10 sm:w-full sm:inline-block">
          <p className="leading-6 py-4">{Texto}</p>
          <div className="flex items-center gap-5">
            <img className="w-1/4 max-w-[100px] rounded-full inline-block" src={Img} alt="" />
            <div className="inline-block">
              <span className=" block text-xl text-slate-300 font-bold">{Nome}</span>
              <span className="text-slate-300">{Cargo}</span>
            </div>
          </div>
        </article>
)
}
Equipe.propTypes = {
  Texto:PropTypes.string,
  Img:PropTypes.string,
  Nome:PropTypes.string,
  Cargo:PropTypes.string
}
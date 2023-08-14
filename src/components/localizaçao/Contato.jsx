import PropTypes from "prop-types"
export default function Contato({Img, Texto}){
    return(
        <div className="flex gap-6 pb-5">

        <img className="w-5 h-6" src={Img} alt="" />
        <p>{Texto}</p>

      </div>
    )
}
Contato.propTypes = {
    Img:PropTypes.string,
    Texto:PropTypes.string
}
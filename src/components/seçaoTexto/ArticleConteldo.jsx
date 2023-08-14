import PropTypes from"prop-types"
export default function ArticleConteldo({Img,H2,Texto}){
    return(
        <article className=" text-center inline-block mx-auto max-w-[400px]">
        <img className="mx-auto pb-5" src={Img} alt="" />
        <div>
          <h2 className="py-5">{H2}</h2>
          <p>{Texto}</p>
        </div>
      </article>
    )
}
ArticleConteldo.propTypes ={
  Img:PropTypes.any,
  H2:PropTypes.string,
  Texto:PropTypes.string
}

// Img=""
// H2=""
// Texto=""
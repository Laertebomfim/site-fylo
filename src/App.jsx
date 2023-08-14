import Botao from "./components/butoes/Butoes"
import ButoesMobile from "./components/butoes/ButoesMobile";
import Equipe from "./components/equipe/Equipe";
import Contato from "./components/localizaçao/Contato";
import ArticleConteldo from "./components/seçaoTexto/ArticleConteldo";
import { AlignJustify } from 'lucide-react';
import { useState } from "react";
export default function App() {
  const [mobileBoleano, setMobileBoleano ] = useState(false)
  return (
    <>
    <header className="bg-fundo">

      <section className="flex p-5 justify-between">
        <img className="max-w-[100px] w-2/6" src="/logo.svg" alt="" />
        <Botao/>
        { mobileBoleano ?<ButoesMobile Mobile={setMobileBoleano}/>:false}
        <AlignJustify color="white" className="sm:hidden" onClick={()=>{setMobileBoleano(!mobileBoleano)}}/>
      </section>

      <section>
        <div className="absolute  left-1/2 translate-y-16 -translate-x-1/2 z-10 text-center w-9/12 max-w-padrao sm:translate-y-0">
          <img className="w-9/12 mx-auto mt-7  " src="illustration-intro.png" alt="" />
          <h1 className="text-xl font-bold text-slate-300 mt-5 px-5">Recursos Equipe Entrar Todos os seus arquivos em um local seguro, acessível em qualquer lugar.</h1>
        </div>

        <div className="h-[540px] w-screeen">
          <img className=" h-64 w-full absolute z-0 top-[370px]" src="bg-curvy-mobile.svg" alt="" />{/*imagem fundo*/}

        </div>

        <article className=" bg-[#181d29] ">
          <div className="text-center p-5 relative z-10 max-w-padrao mx-auto sm:absolute sm:top-[440px] sm:left-1/2 sm:-translate-x-1/2 ">
          <p className="my-10">
          O Fylo armazena todos os seus arquivos mais importantes em um local seguro. Acesse-os sempre que precisar, compartilhe e colabore com amigos, família e colegas de trabalho.
          </p>
          <button className="py-3 px-20 rounded-full text-white font-bold bg-gradient-to-r from-sky-300 to-sky-500 hover:from-sky-600 hover:to-sky-800">Iniciar</button>
          </div>
        </article>
      </section>

    </header>
    <main className="bg-[#181d29]">
      <section className="px-5 flex flex-col justify-center gap-20 py-20 max-w-[800px] sm:mx-auto sm:pt-32 sm:grid sm:grid-rows-2 sm:grid-cols-2 ">

        <ArticleConteldo
          Img="icon-access-anywhere.svg"
          H2="Acesse seus arquivos, em qualquer lugar"
          Texto="A capacidade de usar um smartphone, tablet ou computador para acessar sua conta significa que seus arquivos o seguem em todos os lugares."
        />

        <ArticleConteldo
          Img="icon-security.svg"
          H2="Segurança em que você pode confiar"
          Texto="A autenticação de dois fatores e a criptografia controlada pelo usuário são apenas alguns dos recursos de segurança que permitimos para ajudar a proteger seus arquivos."
        />

        <ArticleConteldo
          Img="icon-collaboration.svg"
          H2="Colaboração em tempo real"
          Texto="Compartilhe arquivos e pastas com segurança com amigos, familiares e colegas para colaboração ao vivo. Não são necessários anexos de e-mail."
        />

        <ArticleConteldo
          Img="icon-any-file.svg"
          H2="Armazene qualquer tipo de arquivo"
          Texto="Esteja você compartilhando fotos de férias ou documentos de trabalho, o Fylo o cobre, permitindo que todos os tipos de arquivo sejam armazenados e compartilhados com segurança."
        />
      </section>

      <div className="px-10 sm:w-11/12 sm:px-0 sm:mx-auto md:flex md:gap-20 md:items-center">
        <img className="mb-10 md:w-1/2" src="illustration-stay-productive.png" alt="" />
        <div className="md:w-1/2">
          <h2 className="sm:text-3xl">Mantenha-se produtivo, onde quer que esteja</h2>
          <p className="my-10 ">Nunca deixe que a localização seja um problema ao acessar seus arquivos. A Fylo atende a todas as suas necessidades de armazenamento de arquivos.</p>
          <p>Compartilhe arquivos e pastas com segurança com amigos, familiares e colegas para colaboração ao vivo. Não são necessários anexos de e-mail.</p>
          <a className=" inline-block pt-10 pb-2 text-cyan-400  border-b-2  border-cyan-500" href="#">Veja como o Fylo funciona <img className="inline " src="icon-arrow.svg" alt=""/></a>
        </div>
      </div>
      
      <section className="pt-52 px-5">
        <div>
          <img className="ml-2" src="bg-quotes.png" alt="" />
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-9 md:grid-cols-3">
          <Equipe
            Texto="A Fylo melhorou a produtividade de nossa equipe em uma ordem de magnitude. Desde a mudança, nossa equipe se tornou uma máquina de colaboração bem lubrificada."
            Img="profile-1.jpg"
            Nome="Satish Patel"
            Cargo="Fundador e responsável"
          />
          <Equipe
            Texto="A Fylo melhorou a produtividade de nossa equipe em uma ordem de magnitude. Desde a mudança, nossa equipe se tornou uma máquina de colaboração bem lubrificada."
            Img="profile-2.jpg"
            Nome="Bruce McKenzie"
            Cargo="Fundador e responsável"
          />
          <div className="sm:col-span-2 md:col-span-1">

          <Equipe
            Texto="Huddle Fylo melhorou a produtividade de nossa equipe em uma ordem de grandeza. Desde a mudança, nossa equipe se tornou uma máquina de colaboração bem lubrificada."
            Img="profile-3.jpg"
            Nome="Iva Boyd "
            Cargo="Fundador e responsável"
          />
          </div>
        </div>

      </section>

      <article className="px-10 relative top-40 z-10">
        
        <div className="px-5 py-12 bg-fundo text-center rounded-lg max-w-[800px] mx-auto">
            <h2 >Obtenha acesso antecipado hoje</h2> 
            <p className="my-4">Leva apenas um minuto para se inscrever e nosso nível inicial gratuito é extremamente generoso. Se você tiver alguma dúvida, nossa equipe de suporte ficará feliz em ajudá-lo.</p>
            <div>
              <input className="w-full max-w-[500px] py-3 pl-5 rounded-full"  type="email" name="" id="" placeholder="Email@.com"/>
              <button className="w-[200px]  p-3 mt-8 sm:ml-5 rounded-full text-white font-bold bg-gradient-to-r from-sky-300 to-sky-500 hover:from-sky-600 hover:to-sky-800"> Get Started For Free </button>
            
          </div>
        </div>
      </article>
    </main>

    <footer className="bg-fundo3 pt-60">
       <img className="pb-10 w-32 ml-5 md:ml-16" src="logo.svg" alt="" />
      <section className="px-10 lg:flex lg:justify-around  ">


      <article className="lg:w-2/5 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-10 lg:self-center ">
        <div className="lg:row-span-3 ">
          <Contato
            Img="icon-location.svg"
            Texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          ></Contato>
        </div>
        
        <div className="lg:flex md:items-center">
          <Contato
            Img="icon-phone.svg"
            Texto="+55-5123-4567"
          ></Contato>
        </div>

        <div className="lg:col-start-2 md:flex md:items-center">
          <Contato
            Img="icon-email.svg"
            Texto="example@fylo.com"
          ></Contato>
        </div>

      </article >

      <article className="overflow-auto md:flex md:gap-10">
        <div>
          <div className="flex flex-col gap-3 my-10">
          <p className="text-base">Quem Somos</p>
            <p>Empregos</p>
            <p>Imprensa</p>
            <p>Blog</p>
            <p>Fale</p>
          </div>
          
        </div>
          <div  className="flex flex-col gap-3 my-10">
            <p className="text-base">Quem Somos</p>
            <p>Termos</p>
            <p>Privacidade</p>
          </div>
          
      </article>
      </section>
    </footer>
    </>
  )
}
//  Empregos Imprensa Blog Fale Conosco Termos Privacidade
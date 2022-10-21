import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Fundadores() {
    const [toggleShowText, setToggleShowText] = useState(true);

    function toggleHiddenText() {
        var textoEscondido = document.getElementsByClassName('texto-escondido')[0]

        if(!toggleShowText) {
            textoEscondido.style.fontSize = '0px';
        } else {
            textoEscondido.style.fontSize = '24px';
        }
    }
    
    return(
        <>
            <div className="corpo_3">
            <img className="fundadores" src="src/assets/img/razor-fundadores2.jpeg" alt="" />
            <div className="nos">
            <p id="noses">
                Quem somos nós
                <FontAwesomeIcon className="arrow-btn btn-exibir"
                icon={toggleShowText? faChevronRight:faChevronDown} onClick={() => {
                    setToggleShowText(!toggleShowText)
                    toggleHiddenText()
                    //toggleShowText? textoEscondido.style.fontSize = '0px':textoEscondido.style.fontSize = '24px';
                }}/>

                <i className="fa-solid fa-chevron-right btn-exibir arrow-btn"></i>
            </p>
            <div className="nos-btn">
                <button className="arrow-btn"></button>
            </div>
            </div>
            
                
            </div>
    
        <p className="texto-escondido">
            A Razor Computadores foi fundada em 2014 com o intuito de tornar acessível
            serviços profissionais de informática de qualidade.
            <br />
            Em 2015 lançamos nosso e-commerce com foco em máquinas de alta performance
            para profissionais e empresas.
            <br />
            Com investimento e muito trabalho, a Razor está se tornando a maior e mais
            confiável fabricante de computadores profissionais e de alto desempenho do
            Brasil.
        </p>
      </>
    )
}
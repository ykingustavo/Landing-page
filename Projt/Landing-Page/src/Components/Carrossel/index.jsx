import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import Workstation from "./Workstation";
import Indicadores from "./Indicadores";

export default function Carrossel() {
    const [numCarrossel, setNumCarrossel] = useState(0);

    function cliqueEsquerdo() {
        if(numCarrossel == 0) {
            setNumCarrossel(3);
        } else {
            setNumCarrossel(numCarrossel - 1);
        }
    }

    function cliqueDireito() {
        if(numCarrossel == 3) {
            setNumCarrossel(0);
        } else {
            setNumCarrossel(numCarrossel + 1);
        }
    }

    /*useEffect(() => {
        console.log("Valor real state " + numCarrossel )
    }, [numCarrossel])*/


  return (
    <div className="cont" id="carrossel">
      <div className="display carrossel">
        <Workstation 
        desc={["Workstation PRO",
        "TALENT",
        "",
        "A PARTIR DE R$6.883,45",
        "Até 4.3GHz",
        "Até 6 núcleos",
        "AMD Ryzen 5 5600G ou Intel Core i5-12400",
        "1 placa de vídeo",
        "GeForce GTX 1650",
        "",
        "Até 64GB de RAM",
        "DDR4 até 3200MHz"]}
        img={"src/assets/img/talent_novo_1.jpg"}
        id={0}
        numCarrossel={numCarrossel}/>

        <Workstation
        desc={["Workstation PRO",
        "PRODIGY",
        "A PARTIR DE R$10.841,16",
        "Até 5.1GHz",
        "Até 8 núcleos",
        "AMD Ryzen 7 5800X ou Intel Core i5-12400",
        "Até 2 placas de vídeo",
        "GeForce RTX 3050 ou RTX 3060",
        "",
        "Até 128GB de RAM",
        "DDR4 até 3200MHz"]}
        img={"src/assets/img/prodigy-galeria-2.jpg"}
        id={1}
        numCarrossel={numCarrossel}/>

        <Workstation
        desc={["Workstation PRO",
        "VIRTUOS",
        "A PARTIR DE R$39.848,94",
        "Até 4.8GHz",
        "Até 64 núcleos",
        "AMD Ryzen Threadripper 3960X",
        "",
        "Até 3 placas de vídeo",
        "GeForce RTX 3080",
        "",
        "Até 256GB de RAM",
        "DDR4 até 3200MHz"]}
        img={"src/assets/img/virtuos-galeria-2.jpg"}
        id={2}
        numCarrossel={numCarrossel}/>

        <Workstation
        desc={["Desktop LEAN",
        "A PARTIR DE R$3.647,64",
        " ",
        "Até 4.3GHz Até 4 núcleos Intel",
        " ",
        "Core i3-12100 Placa de vídeo integrada Intel UHD",
        " ",
        "Graphics Até 64GB",
        "de RAM DDR4 até 3200MHz"]}
        img={"src/assets/img/desktop_lean.jpg"}
        id={3}
        numCarrossel={numCarrossel}/>
      </div>

      <button onClick={cliqueEsquerdo}>Esquerda</button>
      <button onClick={cliqueDireito}>Direita</button>

      <Indicadores numAtual={numCarrossel}/>
    </div>
  );
}

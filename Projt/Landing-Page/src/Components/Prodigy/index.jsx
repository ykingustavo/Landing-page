import './style.css'

export default function Prodigy() {
    return(
        <div className="prodigy">
            <div className="corpoBox_1">
                <p className="descricao_1">
                    Workstation Pro 
                    <span className="sp_1">PRODIGY</span>
                </p>
                <img src="src/assets/img/prodigy-galeria-2.jpg"/>
            </div>

            <div className="corpoBox_2">
                <p className="descricao_2">
                A PARTIR DE R$10.841,16 <br />

                Até 5.1GHz <br />
                Até 8 núcleos
                </p>

                <p className="descricao_3">
                AMD Ryzen 7 5800X ou <br />
                Intel Core i5-12400
                </p>

                <p className="descricao_4">
                    <span className="sp_2">Até 2 placas de vídeo</span><br />
                    <span className="sp_3">GeForce RTX 3050 ou RTX 3060</span>
                </p>

                <p className="descricao_5">Até 128GB de RAM</p>
                <p className="descricao_6">DDR4 até 3200MHz</p>

                <p className="p-btn">
                    <button className="orcamento-prodigy"
                    onClick={() => (window.open("https://razor.com.br/produtos/"))}>Solicitar orçamento</button>
                </p>
            </div>
        </div>
    )
}
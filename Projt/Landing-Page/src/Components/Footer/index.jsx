import "./style.css";

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="caixa_1">
        <div id="icons">
          <a href="http://www.facebook.com/razorcomp/">
            <img src="src/assets/img/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/razor_computadores/">
            <img src="src/assets/img/instagram.png" alt="" />
          </a>
          <a href="https://br.linkedin.com/company/razor-computadores-do-brasil">
            <img src="src/assets/img/linkedin.png" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCinRMTaJQqqqqshaoYkuLoA">
            <img src="src/assets/img/youtube.png" alt="" />
          </a>
        </div>
        <div id="razor_LTDA">
          <p>
            Razor do Brasil LTDA. <br />
            CNPJ: 19.847.182/0001-69
          </p>
        </div>
      </div>
      <div className="caixa_2">
        <div id="icon_razor">
          <img id="razor3" src="src/assets/img/razor-logo3.png" alt="" />
        </div>
        <div className="endr-razor">
          <p>
            Rua Dr. Plínio Moura, 153-C, Vila Planaltina <br />
            Passo Fundo, Rio Grande do Sul - CEP 99.062-340
          </p>
        </div>
      </div>
      <div className="caixa_3">
        <div className="div-btn-ajuda" role="button">
          <button className="btn-ajuda" onClick={() => (window.open("https://razor.com.br/suporte/"))}>
            Solicitar ajuda
          </button>
        </div>
        <div id="atd-razor">
          <p>
            atendimento@razorcomputadores.com.br <br />
            54 3046.6350 | 0800 006 6350
          </p>
        </div>
      </div>
    </footer>
  );
}

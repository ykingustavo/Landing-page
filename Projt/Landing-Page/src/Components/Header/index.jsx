import './style.css';

export default function Header() {
    return(
        <header className="cabecalho">
            <img className="img_logo" src="src/assets/img/logoNew.png"/>
            <div className="botoes">
                <a href="#carrossel">
                    <button className="btn-header">
                        Produtos
                    </button>
                </a>

                <a href="#form-cadastro">
                    <button className="btn-header">
                        Cadastre-se
                    </button>
                </a>

                <a href="#form-cadastro">
                    <button className="btn-header">
                        Login
                    </button>
                </a>
            </div>
        </header>
    ) 
}
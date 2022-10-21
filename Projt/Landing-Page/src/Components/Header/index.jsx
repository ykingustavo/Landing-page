import './style.css';

export default function Header() {
    return(
        <header className="cabeçalho">
            <img className="img_logo" src="src/assets/img/logoNew.png"/>
            <div className="botoes">
                <button className="btn-header" onClick={() => window.open("https://razor.com.br/produtos/%22")}>
                    Produtos
                </button>
                <button className="btn-header" onClick={() => window.open("https://razor.com.br/minha-conta/")}>
                    Cadastre-se
                </button>
                <button className="btn-header" onClick={() => window.open("https://razor.com.br/minha-conta/")}>
                    Login
                </button>
            </div>
        </header>
    ) 
}
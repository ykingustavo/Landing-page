import './style.css'

export default function Cadastro() {
    return(
        <div className="form-div" id="form-cadastro">
            <form className="form-cadastro">
                <div className="form-div-titulo">
                    <h2 className="form-titulo">Cadastro/Login</h2>
                </div>
    
                <label htmlFor="form-nome">Nome Completo</label>
                <input type="text"
                id="form-nome"
                name="form-nome"
                placeholder="Nome Completo" />
    
                <label htmlFor="form-email">E-mail</label>
                <input type="email"
                id="form-email"
                name="form-email"
                placeholder="seuemail@email.com" />
    
                <label htmlFor="form-telefone">Telefone</label>
                <input type="tel"
                id="form-telefone"
                name="form-telefone"
                placeholder="(XX) XXXXX-XXXX"/>

                <button className="form-btn-cadastrar">Cadastrar/Login</button>
            </form>
        </div>
    )
}
import "./style.css";

export default function Participante({imagem, nome, titulo, funcao, email, contato}) {
  return (
    <div className="column">
      <div className="card">
        <img className="pessoa" src={imagem}/>
        <div className="container">
          <h2>{nome}</h2>
          <p className="title">{titulo} </p>
          <p>{funcao}</p>
          <p>{email}</p>
          <p>
            <a target="_blank" href={contato}>
              <button className="button">Contato</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

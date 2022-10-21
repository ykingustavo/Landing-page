import "./style.css";
import Participante from "./Participante";

export default function Participantes() {
  return (
    <div className="card-equipe">
      <div className="row">
        <Participante
        imagem="src/assets/img/Gustavo.jpeg"
        nome="Gustavo Bonemann"
        titulo="Desenvolvedor líder"
        funcao="Responsável pela equipe dos devs"
        email="gustavobonemann@gmail.com"
        contato="https://linkedin.com/in/gustavo-bonemann-100317238/"/>
        <Participante
        imagem="src/assets/img/Gesiane.jpeg"
        nome="Gesiane Amorim"
        titulo="Apresentadora/Designer"
        funcao="Apresentação do trabalho e design"
        email="gesikmvingat@gmail.com"
        contato="https://www.linkedin.com/in/gesiane-vingat-amorim-619534123/"/>
        <Participante
        imagem="src/assets/img/Lorenzo.jpg"
        nome="Lorenzo Bacchieri"
        titulo="Designer"
        funcao="Designer do projeto"
        email="zenzo.bacch@gmail.com"
        contato="https://www.linkedin.com/in/lorenzo-bacchieri-0b8b5724b/"/>
        <Participante
        imagem="src/assets/img/Thomas.jpeg"
        nome="Thomás Knack"
        titulo="Líder/Scrum Master"
        funcao="Responsável por coordenar toda equipe"
        email="thomasknack@hotmail.com"
        contato="https://www.linkedin.com/in/thomasknack/"/>
        <Participante
        imagem="src/assets/img/wesley2.png"
        nome="Wesley Henrique"
        titulo="Designer"
        funcao="Designer do projeto"
        email="wesleyhssgames@gmail.com"
        contato="https://www.linkedin.com/in/wesley-henrique-silva-da-silva-71bb5224b/"/>
      </div>
    </div>
  );
}

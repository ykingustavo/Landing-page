import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle as faCircleSolid} from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-regular-svg-icons'

export default function Indicadores({numAtual}) {
    function click() {
        console.log(numAtual);
    }

    return(
        <div className="lista-indicadores">
            {numAtual == 0 ? (<FontAwesomeIcon icon={faCircleSolid} className="indicador"/>) : (<FontAwesomeIcon icon={faCircle} className="indicador"/>)}
            {numAtual == 1 ? (<FontAwesomeIcon icon={faCircleSolid} className="indicador"/>) : (<FontAwesomeIcon icon={faCircle} className="indicador"/>)}
            {numAtual == 2 ? (<FontAwesomeIcon icon={faCircleSolid} className="indicador"/>) : (<FontAwesomeIcon icon={faCircle} className="indicador"/>)}
            {numAtual == 3 ? (<FontAwesomeIcon icon={faCircleSolid} className="indicador"/>) : (<FontAwesomeIcon icon={faCircle} className="indicador"/>)}
            <button onClick={click}>a</button>
        </div>
    )
}
import { useEffect } from 'react'
import './style.css'

export default function Workstation({desc, img, id, numCarrossel}) {
  useEffect(() => {
    if(id == numCarrossel) {
      document.getElementsByClassName("img-carrossel")[id].classList.remove("esconder");
      console.log(numCarrossel)
      console.log(id)
    } else {
      document.getElementsByClassName("img-carrossel")[id].classList.add("esconder");
      console.log(numCarrossel)
      console.log(id)
    }
  }, [numCarrossel])

    return(
        <div className="img-carrossel esconder">
          <img class="img-display" src={img} />
          <div className="desc">
            <div className="pc">
              {desc.map((val, index) => (
                <p key={index}>{val}</p>
              ))}
            </div>
          </div>
        </div>
    )
}
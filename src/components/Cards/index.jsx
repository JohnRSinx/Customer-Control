import { Container } from "./styles";
import { Trash , Pen} from "phosphor-react";

export function Cards() {
  return (
   <Container>
    <article>
       <div className="contentHeader">
        <time>Horário - 15:00</time>
        <button className="trashButton">
          <Trash size={20}/>
        </button>
        
       </div>
    
      <div className="infoClient">
        <div className="categoryInfo">
          <h3>Kauanny Victoria</h3>
          <button className="buttonEditor">
            <Pen size={20} />
          </button>
        </div>
        <div className="categoryInfo">
          <h3>Desigin+Henna</h3> 
          <button className="buttonEditor">
            <Pen size={20} />
          </button>
        </div>
        <div className="categoryInfo">
          <h3>
            Valor: R$20
          </h3>
          <button className="buttonEditor">
              <Pen size={20} />
          </button>
        </div>
      </div>
    </article>
   </Container>
  )
}
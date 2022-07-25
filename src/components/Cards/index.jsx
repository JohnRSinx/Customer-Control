import { Container } from "./styles";
import { Trash , Pen} from "phosphor-react";

export function Cards() {
  return (
   <Container>
    <article>
       <div>
        <time>Horário - 15:00</time>
       </div>
    
      <div className="infoClient">
        <div className="categoryInfo">
          <h1>Kauanny Victoria</h1>
          <button className="buttonEditor">
            <Pen size={20} />
          </button>
        </div>
        <div className="categoryInfo">
          <h1>Desigin+Henna</h1> 
          <button className="buttonEditor">
            <Pen size={20} />
          </button>
        </div>
        <div className="categoryInfo">
          <h1>
            Valor: R$20
          </h1>
          <button className="buttonEditor">
              <Pen size={20} />
          </button>
        </div>
      </div>
    </article>
   </Container>
  )
}
import { Container } from "./styles";
import { Trash , Pen} from "phosphor-react";

export function Cards({content}) {
  return (
   <Container>
    <article>
       <div className="contentHeader">
        <time>
          {content.time}
        </time>
        <button className="trashButton">
          <Trash size={20}/>
        </button>
        
       </div>
    
      <div className="infoClient">
        <div className="categoryInfo">
          <h3>
            {content.name}
            </h3>
          <button className="buttonEditor">
            <Pen size={20} />
          </button>
        </div>
        <div className="categoryInfo">
          <h3>{content.category}</h3> 
          <button className="buttonEditor">
            <Pen size={20} />
          </button>
        </div>
        <div className="categoryInfo">
          <h3>{content.value}</h3>
          <button className="buttonEditor">
              <Pen size={20} />
          </button>
        </div>
      </div>
    </article>
   </Container>
  )
}
import { Container } from "./styles";
import { Trash , Pen} from "phosphor-react";
import { FormDialog } from "../Dialog/Dialog";
import {useState} from "react";


export function Cards({content}) {
  const [open, setOpen] = useState(false);
  function handleClickCard () {
    setOpen(true);
  }
  return (
    <>
    <FormDialog 
    open={open} 
    setOpen={setOpen}
    content={content}
    listCard={content.listCard}
    setListCard={content.setListCard}
    
    
    />
    <Container>
    <article onClick={()=>handleClickCard()}>
       <div className="contentHeader">
        <time>
          Data{content.time}
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
          <h3>R$ {content.value}</h3>
          <button className="buttonEditor">
              <Pen size={20} />
          </button>
        </div>
      </div>
    </article>
   </Container>
    </>
   
  )
}
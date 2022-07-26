import { useState } from "react";
import { Cards } from "../Cards";
import { Sidebar } from "../Sidebar";
import { Wrapper } from "./styles";



export function Home() {
  const [cardData , setCardData] = useState(null)


  const cards = [
    { 
        content: 
        { 
          name : 'John',
          time : 'Horário 14:49',
          category : 'Design',
          value : 'R$20',
      }
    }
  ]
 if (cardData === null) {
    return <Sidebar setCardData={setCardData}/>;
 }
  return (
    <Wrapper>
        <Sidebar setCardData={setCardData}/>
        <div className="containerCards">
         <Cards content={cardData}/>   
        </div>  
    </Wrapper>
  )
}
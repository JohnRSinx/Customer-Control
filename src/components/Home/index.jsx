import { Cards } from "../Cards";
import { Sidebar } from "../Sidebar";
import { Wrapper } from "./styles";

export function Home() {
  return (
    <Wrapper>
        <Sidebar/>
        <div className="containerCards">
          <Cards/>
          <Cards/>
          <Cards/> 
          <Cards/>  
          <Cards/>   
        </div>
        
    </Wrapper>
  )
}
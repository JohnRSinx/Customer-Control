import { Cards } from "../Cards";
import { Sidebar } from "../Sidebar";
import { Wrapper } from "./styles";

export function Home() {
  return (
    <Wrapper>
        <Sidebar/>
        <Cards/>
        
    </Wrapper>
  )
}
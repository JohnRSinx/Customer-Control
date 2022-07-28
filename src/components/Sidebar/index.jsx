import { Container } from "./styles";
import perfilFoto from '../../assets/perfilthalita.jpg';
import { useState } from "react";

export function Sidebar({setCardData }) {
  const [valuesInputs, setValuesInputs] = useState({
    name: '',
    time:'',
    category : '',
    value : '',
  })


  function handleChangeValues({target}) {
    setValuesInputs({
      ...valuesInputs,
      [target.name]:target.value
    });
  }

  function handleStorageCard (event) {
    event.preventDefault();

    setCardData(valuesInputs)
    
  }

  return ( 
    <Container>
      
      
    </Container>
  )
}
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
      <div className="profile">
        <img 
          src={perfilFoto} 
          alt="Foto de Thalita"
        />
        <strong>Thalita Couto</strong>

        <form className="formRegister">
          <h1>Dados da Cliente</h1>
          <input 
            onChange={handleChangeValues}
            type="text"
            name="name"
            placeholder="Nome do Cliente"
            className="inputName"
          />
          <input 
            onChange={handleChangeValues}
            type="date"
            name="time"
            className="inputName"
          />
          <input 
            onChange={handleChangeValues}
            type="text"
            name="category"
            placeholder="Procedimento"
            className="inputName"
          />
          <input 
            onChange={handleChangeValues}
            type="number"
            name="value"
            placeholder="Valor"
            className="inputName"
          />
          <button onClick={handleStorageCard}>
            Adicionar
          </button>
        </form>
      </div>
      
    </Container>
  )
}
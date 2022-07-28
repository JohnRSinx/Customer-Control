import { useState, useEffect } from "react";
import { Cards } from "../Cards";
import { Wrapper } from "./styles";
import perfilFoto from '../../assets/perfilthalita.jpg';
import Axios from "axios";



export function Home() {
 
  const [storageInput, setStorageInput] = useState({
    name : "",
    time:"",
    category : "",
    value : "",
  });

  const [listClient, setListClient] = useState();



  useEffect(()=>{
    Axios.get("http://localhost:3001/getCards").then((response)=> {
      setListClient(response.data);
    })
  },[])

 
  function handleStorageCard ({target}) { 
    setStorageInput({...storageInput,[target.name]:target.value});
   
  }
  function handleClickSalve() {
    event.preventDefault();
    Axios.post("http://localhost:3001/register", {
      name: storageInput.name,
      time: storageInput.time,
      category: storageInput.category,
      value: storageInput.value,
    }).then((response)=> {
      console.log(response)
    });
  }
 
  return (
    <Wrapper>

      
        <aside>
            <div className="profile">
            <img 
              src={perfilFoto} 
              alt="Foto de Thalita"
            />
            <strong>Thalita Couto</strong>
            <form className="formRegister">
              <h1>Dados da Cliente</h1>
              <input
                onChange={handleStorageCard}
                type="text"
                name="name"
                placeholder="Nome do Cliente"
                className="inputName"
              />
              <input 
                onChange={handleStorageCard}
                type="date"
                name="time"
                className="inputName"
              />
              <input 
                onChange={handleStorageCard}
                type="text"
                name="category"
                placeholder="Procedimento"
                className="inputName"
              />
              <input 
                onChange={handleStorageCard}
                type="number"
                name="value"
                placeholder="Valor"
                className="inputName"
              />
              <button onClick={() => handleClickSalve()}>
                Adicionar
              </button>
            </form>
          </div>
        </aside>

        
        <div className="containerCards">
        {  typeof listClient !== "undefined" && 
            listClient.map((value)=>{
              return (<Cards 
                key={value.iddadosclient}
                content={value}/>)
            })
          }
        </div>  
    </Wrapper>
  )
}
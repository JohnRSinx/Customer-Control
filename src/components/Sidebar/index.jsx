import { Container } from "./styles";
import perfilFoto from '../../assets/perfilthalita.jpg';

export function Sidebar() {
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
          type="text"
          name="name"
          placeholder="Nome do Cliente"
          className="inputName"/>
          <input 
          type="date"
          name="date"
          placeholder="Nome do Cliente"
          className="inputName"/>
          <select name="category" id="category">
              <option value="">Design</option>
              <option value="">Design + Henna</option>
              <option value="">Design + Henna + Bulso</option>
              <option value="">Henna</option>
              <option value="">Bulso</option>
              <option value="">Microblanding</option>
              <option value="">Shadow</option>
          </select>
          <input 
          type="number"
          name="value"
          placeholder="Valor"
          className="inputName"/>

          <button>
            Adicionar
          </button>
        </form>
      </div>
      
    </Container>
  )
}
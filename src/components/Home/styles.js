import styled from "styled-components";

export const Wrapper = styled.main`

  max-width: 70rem;
  margin: 1.5rem 0;
  padding: 0 1rem;
  
  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 1rem;
  align-items: flex-start;
  
  
  

  @media (max-width:768px) {
  html {
    font-size: 87.5%
  }

  {
    grid-template-columns: 1fr;
  }
}

`
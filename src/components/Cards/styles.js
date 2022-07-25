import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--pink-200);
  border-radius: 2px;
  padding: 0.5rem 0rem;

.infoClient {
  padding: 0.5rem 0.5rem
}

.categoryInfo {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem ;
  margin: 0.25rem;
  border-radius: 2px;
  background-color: var(--green-600);
  color: var(--pink-200);
}
.buttonEditor {
  background-color: var(--pink-200);
  color: var(--green-800);
  border: none;
  border-radius: 2px;
  padding: 0.25rem;
  transition: background-color 0.1s;
  
  :hover {
    background-color: var(--pink-100);
  }
}

.buttonTrash {
  
}

time {
  display: flex;
  justify-content: center;
}
  
`
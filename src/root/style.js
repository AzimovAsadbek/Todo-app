import styled from "styled-components";

const Main = styled.div`
  padding: 50px 20px;
  border-radius: 5%;
  min-width: 32vw;
  max-width: 32vw;
  box-shadow: rgba(0, 0, 0, 0.95) 0px 25px 30px 0px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  @media (max-width: 1320px) {
    min-width: 70vh;
    transition: 0.3s;
  }
  @media (max-width: 800px) {
    max-width: 50vw;
  }

  @media (max-width: 600px) {
    max-width: 50vw;
    min-width: 95vw;
  }
  @media (max-width: 500px) {
    max-width: 80vw;
    min-width: 70vw;
    max-height: 90vh;
  }

  @media (max-width: 400px) {
    min-width: 90vw;
    max-height: 80vh;
  }
  @media (max-height: 450px) {
    min-height: 60%;
    max-height: 85vh;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: green;
  @media (max-width: 800px) {
    width: 50%;
  }
`;

const Task_count = styled.h1`
  font-size: 40px;
  margin: 15px;
  white-space: nowrap;
  @media (max-width: 800px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
    flex-wrap: nowrap;
  }
  @media (max-width: 300px) {
    font-size: 35px;
  }
  @media (max-height: 250px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const Search = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: space-around;
`;

const Search_input = styled.input`
  padding: 5px 20px;
  width: 80%;
  font-size: 20px;
  outline: none;
  color: green;
  border: 2px solid green;
  border-radius: 15px;
  &::placeholder {
    color: green;
  }
`;

const Search_btn = styled.button`
  background-color: transparent;
  outline: none;
  font-size: 20px;
  color: green;
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 5px 20px;
  &:hover {
    background-color: green;
    cursor: pointer;
    color: white;
  }
  &:active {
    background-color: rgba(0, 128, 0, 0.808);
    cursor: pointer;
    color: white;
  }
`;

const MainDate = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;

const DateAdd = styled.div`
  width: 95%;
  display: flex;
  gap: 5px;
  color: #122348;
  align-items: center;
  height: 10%;
  justify-content: space-between;
`;

const DateAdd__input = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 20px;
  outline: none;
  color: green;
  border: 2px solid green;
  border-radius: 15px;
  &::placeholder {
    color: green;
    font-style: italic;
  }
  @media (max-width: 300px) {
    font-size: 15px;
  }
  @media (max-height: 300px) {
    font-size: 15px;
    padding: 5px;
  }
  @media (max-height: 250px) {
    font-size: 15px;
    padding: 5px;
  }
`;

const DateAdd__btn = styled.button`
  background-color: transparent;
  outline: none;
  font-size: 20px;
  color: ${(props) => (props.delete ? "red" : "green")};
  border: 2px solid white;
  border-radius: 20px;
  padding: 10px 25px;
  &:hover {
    background-color: ${(props) => (props.delete ? "red" : "green")};
    cursor: pointer;
    color: white;
    &:active {
      background-color: ${(props) =>
        props.delete ? "red" : "rgba(0, 128, 0, 0.808)"};
      cursor: pointer;
      color: white;
    }
  }
  @media(max-width: 450px){
    padding: 5px 13px;
    border-radius: 12px;
  }
  @media (max-width: 300px) {
    padding: 10px 15px;
    font-size: 15px;
  }

  @media (max-height: 300px) {
    padding: 10px 15px;
    font-size: 15px;
  }
`;

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 70%;
  text-align: center;
`;

const Date__item = styled.div`
  padding: 2px;
  width: 95%;
  display: flex;
  min-height: 25%;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  @media (max-width: 300px) {
    font-size: 15px;
  }
  
`;
const img = styled.img`
  @media (max-width: 1320px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`;

export {
  Main,
  Title,
  Task_count,
  Search,
  Search_input,
  Search_btn,
  MainDate,
  DateAdd,
  DateAdd__input,
  DateAdd__btn,
  NotFound,
  Date__item,
};

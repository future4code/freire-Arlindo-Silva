import styled from "styled-components";

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  max-width: 400px;
  min-height: 100vh;
  color: white;
  position: relative;
  & input {
    background-color: #0d1117;
    color: white;
    width: 380px;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid white;
  }
  & img {
    width: 300px;
  }
  & header {
    width: 100vw;
    padding-bottom: 10px;
    box-sizing: border-box;
    background-color: #161b22;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & section {
    align-items: center;
    box-sizing: border-box;
    height: 70vh;
    display: flex;
  }
`;

export const UserContainer = styled.div`
  display: grid;
  height: 70vh;
  box-sizing: border-box;
  padding: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70% 5% 5% 10% 10%;
  gap: 5px;
  grid-template-areas:
    "img img"
    "name name"
    "username username"
    "data data";
  & h4 {
    grid-area: name;
    margin: 0;
  }
  & > p {
    grid-area: username;
    margin: 0;
    color: #ffffff7b;
  }
  & img {
    justify-self: center;
    grid-area: img;
    border-radius: 1000px;
  }
  & > div {
    & > a {
      text-decoration: none;
      color: white;
      font-weight: 500;
    }
    grid-area: data;
  }
`;

export const HistoryButton = styled.button`
  background-color: #161b22;
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid white;
  :hover {
    background-color: #0d1117;
  }
`;

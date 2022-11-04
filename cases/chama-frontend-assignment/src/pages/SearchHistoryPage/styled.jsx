import styled from "styled-components";

export const SearchHistoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  max-width: 400px;
  min-height: 100vh;
  color: white;
  background-color: #0d1117;
  position: relative;

  & header {
    z-index: 1000;
    position: fixed;
    width: 100vw;
    height: 10vh;
    box-sizing: border-box;
    background-color: #161b22;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    align-items: center;
    justify-content: center;
    & label {
      justify-self: center;
    }
  }
`;

export const SearchHistory = styled.div`
  width: 100%;
  margin-top: 12vh;
  display: flex;
  flex-direction: column;
  gap: 2px;
  & > div {
    width: 100%;
    cursor: pointer;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      width: 100%;
    }
    :hover {
      background-color: #ffffff28;
      border-radius: 100px;
    }
  }
`;

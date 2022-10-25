import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #5c16c5;
  height: 56px;
  display: flex;
  align-items: center;
  padding-left: 112px;
  box-sizing: border-box;
  > img {
    height: 24.03px;
  }
  @media (max-width: 850px) {
    justify-content: center;
    padding: 0;
  }
`;

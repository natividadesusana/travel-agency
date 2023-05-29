import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 25px;
    margin-top: -100px;
  }
`;

export const Header = styled.div`
  background-color: whitesmoke;
  font-size: 20px;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: italic;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.09);

  a {
    text-decoration: none;
    color: black;
  }

  p {
    margin-right: 40px;
    margin-left: 40px;
    cursor: pointer;
    &:hover {
      color: green;
    }
  }
`;

export const ContainerFlightsDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 50px;
  height: 40vh;
  width: 100%;
  padding-left: 200px;

  p {
    font-size: 20px;
    padding: 10px;
  }
`;

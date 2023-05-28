import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  select {
    width: 60vw;
    height: 40px;
    margin-bottom: 100px;
    font-size: 15px;
    padding: 10px;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  background-color: whitesmoke;
  font-size: 20px;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 35px;
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
`;

export const SelectDestination = styled.div`
  width: 60vw;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 100px;
  background-color: gray;
  color: white;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 20vw;
  height: 20vh;
  cursor: pointer;
  box-shadow: rgba(49, 57, 165, 0.2) 0px 8px 24px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    z-index: 1;
  }
`;

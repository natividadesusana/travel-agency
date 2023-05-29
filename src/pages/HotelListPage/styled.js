import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    padding-left: 50px;
    font-size: 25px;
    margin-top: -500px;
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

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 10vh;
  left: 0;
  width: 15vw;
  height: 100%;
  padding: 20px;
  padding-top: 60px;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.09);

  .filter {
    padding: 10px;
    margin-bottom: 15px;
  }

  p {
    padding-bottom: 15px;
    font-size: 17px;
  }

  button {
    padding: 10px;
    width: 15vw;
    padding-left: 15px;
    cursor: pointer;
    font-size: 15px;
  }
`;

export const ContainerHotels = styled.div`
  margin-left: 330px;
  margin-top: -330px;
  height: 100%;
  width: 65vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;

export const Box = styled.div`
  height: 35vh;
  width: 17vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: -50px;
  cursor: pointer;
  box-shadow: rgba(49, 57, 165, 0.2) 0px 8px 24px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    z-index: 1;
  }
  img {
    width: 15vw;
    padding-bottom: 35px;
  }
  p {
    padding: 10px;
    font-size: 18px;
  }
`;

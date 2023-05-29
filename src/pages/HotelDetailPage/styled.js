import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 25px;
    margin-top: 130px;
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

export const ContainerHotelDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  height: 100%;
  width: 100%;

  p {
    font-size: 20px;
    padding: 10px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;

  height: 20vh;
  width: 95vw;

  img {
    width: 15vw;
    border: 1px solid black;
    border-radius: 10px;
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  height: 50vh;
  width: 100%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: left;
  border: 1px solid black;
  height: 50vh;
  width: 30vw;
  p {
    padding: 20px;
    font-size: 18px;
  }
  li {
    margin-left: 20px;
    padding-bottom: 8px;
    font-size: 16px;
  }
`;

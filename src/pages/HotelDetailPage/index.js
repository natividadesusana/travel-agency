import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Header,
  ContainerHotelDetails,
  ImageBox,
  Infos,
  InfoBox,
} from "./styled";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function HotelDetailPage() {
  const navigate = useNavigate();
  const { hotelId } = useParams();
  const [hotelData, setHotelData] = useState(null);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/hotels/${hotelId}/details`)
      .then((response) => {
        setHotelData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line
  }, [hotelId]);

  if (!hotelData) {
    return <div>Loading...</div>;
  }

  const {
    name = "",
    photos = [],
    city = {},
    price = "",
    description = "",
    conveniences = [],
  } = hotelData || {};

  return (
    <Container>
      <Header>
        <Link to="/">
          <p>VIAGENS ALUCINANTES</p>
        </Link>
        <p onClick={handleGoBack}>VOLTAR</p>
      </Header>

      <h1>Nome do Hotel: {name}</h1>

      <ContainerHotelDetails>
        <ImageBox>
          <ion-icon name="caret-back-outline"></ion-icon>
          {photos.map((photo, index) => (
            <img src={photo} alt="Avatar" key={index} />
          ))}
          <ion-icon name="caret-forward-outline"></ion-icon>
        </ImageBox>
        <Infos>
          <InfoBox>
            <p>Características:</p>
            <li>Local: {city.name}</li>
            <li>Preço: {`R$ ${price}`}</li>
            <li>Descrição: {description}</li>
          </InfoBox>
          <InfoBox>
            <p>Comodidades:</p>
            {conveniences.map((convenience) => (
              <li key={convenience.id}>{convenience.name}</li>
            ))}
          </InfoBox>
        </Infos>
      </ContainerHotelDetails>
    </Container>
  );
}

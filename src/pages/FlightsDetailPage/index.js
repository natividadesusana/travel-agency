import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header, ContainerFlightsDetails } from "./styled";
import { Link, useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";

export default function FlightsDetailPage() {
  const [flightDetails, setFlightDetails] = useState({});
  const [cities, setCities] = useState([]);
  const { flightId } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/flights/${flightId}/details`)
      .then((response) => {
        setFlightDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line
  }, [flightId]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cities`)
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const selectedCity = cities.find(
    (city) => city.id === flightDetails?.destination?.id
  );

  const formatTime = (time) => {
    if (time) {
      const dateObj = new Date(time);
      return format(dateObj, "HH:mm");
    }
    return "";
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <p>VIAGENS ALUCINANTES</p>
        </Link>
        <p onClick={handleGoBack}>VOLTAR</p>
      </Header>

      <h1>Passagens para {selectedCity?.name}</h1>

      <ContainerFlightsDetails>
        <p>CIDADE DE DESTINO: {flightDetails?.destination?.name}</p>
        <p>CIDADE DE ORIGEM: {flightDetails?.origin?.name}</p>
        <p>COMPANHIA AÉREA: {flightDetails?.airline}</p>
        <p>HORÁRIO DE PARTIDA: {formatTime(flightDetails?.departureTime)}</p>
        <p>
          HORÁRIO PREVISTO DE CHEGADA: {formatTime(flightDetails?.arrivalTime)}
        </p>
        <p>PREÇO DE PASSAGEM: R$ {flightDetails?.price}</p>
      </ContainerFlightsDetails>
    </Container>
  );
}

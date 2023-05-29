import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header, Filters, ContainerFlights, Box } from "./styled";
import { Link, useParams, useNavigate } from "react-router-dom";
import Slider from "react-input-slider";
import "rc-slider/assets/index.css";
import { format } from "date-fns";

export default function FlightsPage() {
  const [cities, setCities] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const { cityId } = useParams();
  const navigate = useNavigate();

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

  const selectedCity = cities.find((city) => city.id === parseInt(cityId));

  const handleFlightClick = (flightId) => {
    navigate(`/flights/${flightId}/details`);
  };

  const handleSearch = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/flights/cities/${cityId}`, {
        params: { minPrice, maxPrice },
      })
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (flights.length > 0) {
      filterFlights();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minPrice, maxPrice, flights]);

  const filterFlights = () => {
    const filtered = flights.filter((flight) => {
      return flight.price >= minPrice && flight.price <= maxPrice;
    });
    setFilteredFlights(filtered);
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <p>VIAGENS ALUCINANTES</p>
        </Link>
      </Header>

      <h1>Passagens para {selectedCity?.name}</h1>

      <Filters>
        <div className="filter">
          <p>Preço mínimo: R$ {minPrice}</p>
          <Slider
            axis="x"
            x={minPrice}
            xmin={0}
            xmax={1000}
            onChange={({ x }) => setMinPrice(x)}
          />
        </div>

        <div className="filter">
          <p>Preço máximo: R$ {maxPrice}</p>
          <Slider
            axis="x"
            x={maxPrice}
            xmin={0}
            xmax={1000}
            onChange={({ x }) => setMaxPrice(x)}
          />
        </div>

        <button onClick={handleSearch}>Buscar</button>

        <ContainerFlights>
          {filteredFlights.map((flight) => (
            <Box key={flight.id} onClick={() => handleFlightClick(flight.id)}>
              <img src={flight.avatar} alt="Avatar" />
              <p>
                Data: {format(new Date(flight.departureTime), "dd/MM/yyyy")}
              </p>
              <p>Horário: {format(new Date(flight.departureTime), "HH:mm")}</p>
              <p>Preço: R$ {flight.price}</p>
              <p>Local de Partida: {flight.origin.name}</p>
            </Box>
          ))}
        </ContainerFlights>
      </Filters>
    </Container>
  );
}

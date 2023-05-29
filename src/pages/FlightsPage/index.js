import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header, Filters, ContainerFlights, Box } from "./styled";
import { Link, useParams } from "react-router-dom";
import Slider from "react-input-slider";
import "rc-slider/assets/index.css";
import { format } from "date-fns";

export default function FlightsPage() {
  const [cities, setCities] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const { cityId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/flights/cities/${cityId}`)
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cityId]);

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

  useEffect(() => {
    filterFlights();
    // eslint-disable-next-line
  }, [minPrice, maxPrice, flights]);

  const selectedCity = cities.find((city) => city.id === parseInt(cityId));

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

        {filteredFlights.length > 0 ? (
          <ContainerFlights>
            {filteredFlights.map((flight) => (
              <Box key={flight.id}>
                <img src={flight.avatar} alt="Avatar" />
                <p>
                  Data: {format(new Date(flight.departureTime), "dd/MM/yyyy")}
                </p>
                <p>
                  Horário: {format(new Date(flight.departureTime), "HH:mm")}
                </p>
                <p>Preço: R$ {flight.price}</p>
                <p>Local de Partida: {flight.originCity}</p>
              </Box>
            ))}
          </ContainerFlights>
        ) : (
          <p>Nenhum voo disponível com os critérios de filtro selecionados.</p>
        )}
      </Filters>
    </Container>
  );
}

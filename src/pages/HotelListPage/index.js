import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header, Filters, ContainerHotels, Box } from "./styled";
import { Link, useParams, useNavigate } from "react-router-dom";
import Slider from "react-input-slider";
import "rc-slider/assets/index.css";

export default function HotelsPage() {
  const [cities, setCities] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

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
    navigate(`/hotels/${flightId}/details`);
  };

  const handleSearch = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/hotels/cities/${cityId}`, {
        params: { minPrice, maxPrice },
      })
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (hotels.length > 0) {
      filterHotels();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minPrice, maxPrice, hotels]);

  const filterHotels = () => {
    const filtered = hotels.filter((hotel) => {
      return hotel.price >= minPrice && hotel.price <= maxPrice;
    });
    setFilteredHotels(filtered);
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <p>VIAGENS ALUCINANTES</p>
        </Link>
      </Header>

      <h1>Hospedagens em {selectedCity?.name}</h1>

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

        <ContainerHotels>
          {filteredHotels.map((hotel) => (
            <Box key={hotel.id} onClick={() => handleFlightClick(hotel.id)}>
              <img src={hotel.avatar} alt="Avatar" />
              <p>Nome do Hotel: {hotel.name}</p>
              <p>Preço: R$ {hotel.price}</p>
            </Box>
          ))}
        </ContainerHotels>
      </Filters>
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header, Infos, InfoBox } from "./styled";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cities`)
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error("Error when searching for cities:", error);
      });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <p>VIAGENS ALUCINANTES</p>
        </Link>
      </Header>

      <select
        className="form-select"
        value={selectedDestination}
        onChange={handleSelectChange}
      >
        <option disabled value="">
          Selecione a cidade de destino
        </option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>

      <Infos>
        <InfoBox>
          <p>1. Escolha a cidade de destino que deseja visitar acima.</p>
        </InfoBox>

        <Link to={`/flights/${selectedDestination}`}>
          <InfoBox>
            <p>
              2. Veja as passagens disponíveis, com preços e datas clicando
              aqui!
            </p>
          </InfoBox>
        </Link>

        <Link to="/hotels">
          <InfoBox>
            <p>
              3. Veja os locais onde você pode se hospedar e todo o conforto que
              eles oferecem clicando aqui!
            </p>
          </InfoBox>
        </Link>
      </Infos>
    </Container>
  );
}

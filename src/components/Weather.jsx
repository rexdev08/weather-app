import { useEffect, useState } from "react";
import styled from "styled-components";
import searchIcon from "../assets/search.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import GridTile from "./GridTile";
import spinner from "../assets/spinner.gif";

const Weather = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchState, setSearchState] = useState("Santiago");
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const key = import.meta.env.VITE_API_WEATHER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchState}&appid=${key}&lang=es&units=metric`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setInfo(data);
      setLoading(false);
    };

    fetchData();
  }, [searchState]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== "") {
        setSearchState(searchInput);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  if (!loading) {
    if (info?.cod === 200) {
      return (
        <>
          <SearchContainer>
            <SearchIcon src={searchIcon} alt="" />
            <SearchInput
              type="text"
              placeholder="Ciudad, ejemplo Paris"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </SearchContainer>
          <WeatherContainer>
            <Header>
              <span>
                {info.sys.country}, {info.name}
              </span>
              <span>{info.weather[0].description}</span>
            </Header>
            <GridContainer>
              <GridTile
                img={`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
                subtitle={"18%"}
                line1={`Actual ${info.main.temp} ℃`}
                line2={`Max ${info.main.temp_max} ℃`}
                line3={`Min ${info.main.temp_min} ℃`}
              />
              <GridTile
                img={humidity}
                subtitle={"18%"}
                line1={`Humedad ${info.main.humidity}%`}
                line2={`Presion ${info.main.pressure} hPa`}
              />
              <GridTile
                img={wind}
                subtitle={"5.6km"}
                line1={`Velocidad ${info.wind.speed}K/h`}
                line2={`Grados ${info.wind.deg}°`}
              />
            </GridContainer>
            <Link
              target={"_blank"}
              href={`https://www.google.com/maps/place/${info.coord.lat},${info.coord.lon}`}
            >
              <Footer>
                <span>{`coords. lat ${info.coord.lat}, lon ${info.coord.lon}`}</span>
              </Footer>
            </Link>
          </WeatherContainer>
        </>
      );
    } else {
      return (
        <>
          <SearchContainer>
            <SearchIcon src={searchIcon} alt="" />
            <SearchInput
              type="text"
              placeholder="Ciudad"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </SearchContainer>
          <WeatherContainer>
            <h1>Sin resultados 😅</h1>
          </WeatherContainer>
        </>
      );
    }
  } else {
    return <img src={spinner} />;
  }
};

const SearchContainer = styled.div`
  width: clamp(100px, 90vw, 300px);
  height: 50px;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  /* gap: 0.5rem; */
  /* background-color: #ffffff; */
  /* border: solid gray; */
  border-radius: 1rem;
  padding: 0.2rem;
  /* overflow: hidden; */
  position: relative;
`;

const SearchIcon = styled.img`
  width: 30px;
  aspect-ratio: 1/1;
  object-fit: contain;
  /* aspect-ratio:1/1; */
  /* background-color: #314cb0; */
  /* object-fit: contain; */
  position: absolute;
  top: 10px;
  left: 10px;
  pointer-events: none;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  text-align: left;
  text-indent: 3rem;
  border: none;
  font-size: clamp(10px, 7vw, 18px);
  border-radius: 1rem;
`;

const Header = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
`;

const WeatherContainer = styled.div`
  width: clamp(300px, 90vw, 700px);
  min-height: 400px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 4px 4px 10px 0.5px #474747a0;
  margin-top: 1rem;
  padding: 1rem;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  /* background-color: green; */
  grid-template-columns: 1fr;
  gap: 0.5rem;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Link = styled.a`
  width: 100%;
  text-decoration: none;
`;

const Footer = styled.footer`
  width: 100%;
  /* background-color: red; */
  text-align: right;

  span {
    font-size: clamp(8px, 4vw, 16px);
    font-weight: 500;
    background-color: #1616d4cc;
    border-radius: 0.8rem;
    padding: 0.3rem 0.4rem;
    color: white;
  }
`;

export default Weather;

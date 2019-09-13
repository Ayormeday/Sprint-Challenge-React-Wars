import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ActorInfo from "./ActorsInfo";
import styled from "styled-components";

const starWarsApi = "https://swapi.co/api/people/";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacter] = useState([]);

  const H1 = styled.h1`
    color: #615961;
    text-align: center;
  `;
  const Adiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: brown;
  `;

  useEffect(() => {
    axios
      .get(starWarsApi)
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log("invalid Api");
      });
  }, []);

  return (
    <div>
      <H1 className="Header">Actors</H1>
      <Adiv className="App">
        {character.map((info, index) => {
          return (
            <ActorInfo
              name={info.name}
              key={index}
              birth_year={info.birth_year}
              skin_color={info.skin_color}
              hair_color={info.hair_color}
              height={info.height}
            />
          );
        })}
      </Adiv>
    </div>
  );
};

export default App;

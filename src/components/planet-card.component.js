// @flow
import React from "react";
import styled from "styled-components";
import PlanetName from "./planet-name.component";
import PlanetFilms from "./planet-films.component";
import PlanetDescription from "./planet-description.component";

type PlanetCardProps = {
  name: string,
  filmsQuantity: number,
  description: {
    population: string,
    terrain: string,
    climate: string
  }
};

export default (props: PlanetCardProps) => (
  <PlanetCard>
    <PlanetName name={props.name} />
    <PlanetFilms filmsQuantity={props.filmsQuantity} />
    <PlanetDescription {...props.description} />
  </PlanetCard>
);

const PlanetCard = styled.View`
  flex: 1;
`;

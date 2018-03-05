// @flow
import React from "react";
import styled from "styled-components";
import PlanetDescriptionRow from "./planet-description-row.component";

type PlanetDescriptionProps = {
  population: string,
  climate: string,
  terrain: string
};

export default (props: PlanetDescriptionProps) => (
  <PlanetDescription>
    <PlanetDescriptionRow title="Population" value={props.population} />
    <PlanetDescriptionRow title="Climate" value={props.climate} />
    <PlanetDescriptionRow title="Terrain" value={props.terrain} />
  </PlanetDescription>
);

const PlanetDescription = styled.View`
  flex: 1;
  margin: 0 20px;
`;

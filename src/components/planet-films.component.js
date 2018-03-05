// @flow
import React from "react";
import styled from "styled-components";

type PlanetFilmsProps = {
  filmsQuantity: number
};

export default (props: PlanetFilmsProps) => (
  <PlanetFilms>
    <PlanetFilmsQuantity>
      featured in {props.filmsQuantity} films
    </PlanetFilmsQuantity>
  </PlanetFilms>
);

const PlanetFilms = styled.View`
  margin: 0 20px;
  margin-bottom: 20px;
`;
const PlanetFilmsQuantity = styled.Text`
  color: yellow;
  text-align: right;
  font-size: 16px;
  font-style: italic;
`;

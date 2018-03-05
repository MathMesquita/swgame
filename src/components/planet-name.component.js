// @flow
import React from "react";
import styled from "styled-components";

type PlanetDescriptionProps = {
  name: string
};

export default (props: PlanetDescriptionProps) => (
  <PlanetName>
    <PlanetNameText>{props.name}</PlanetNameText>
  </PlanetName>
);

const PlanetName = styled.View`
  margin: 20px;
  margin-bottom: 5px;
  padding: 20px 0;
  background-color: yellow;
`;
const PlanetNameText = styled.Text`
  text-align: center;
  color: black;
  font-size: 30px;
  font-weight: bold;
`;

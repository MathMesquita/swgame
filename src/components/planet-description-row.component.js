// @flow
import React from "react";
import styled from "styled-components";

type PlanetDescriptionRowProps = {
  title: string,
  value: string
};

export default (props: PlanetDescriptionRowProps) => (
  <PlanetDescriptionRow>
    <PlanetDescriptionRowTitle>{props.title}:</PlanetDescriptionRowTitle>
    <PlanetDescriptionRowValue>{props.value}</PlanetDescriptionRowValue>
  </PlanetDescriptionRow>
);

const PlanetDescriptionRow = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;
const PlanetDescriptionRowTitle = styled.Text`
  color: yellow;
  font-weight: bold;
  font-size: 20px;
  width: 50%;
  text-align: right;
`;
const PlanetDescriptionRowValue = styled.Text`
  color: yellow;
  font-size: 20px;
  margin-left: 10px;
  width: 50%;
`;

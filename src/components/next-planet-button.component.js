// @flow
import React from "react";
import styled from "styled-components";

type NextPlanetButtonProps = {
  _onPress: Function
};

export default (props: NextPlanetButtonProps) => (
  <NextPlanetButton onPress={props._onPress}>
    <NextPlanetButtonText>NEXT PLANET</NextPlanetButtonText>
  </NextPlanetButton>
);

const NextPlanetButton = styled.TouchableOpacity`
  background-color: yellow;
  padding: 20px 0;
`;
const NextPlanetButtonText = styled.Text`
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

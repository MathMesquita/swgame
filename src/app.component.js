// @flow
import React from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import PlanetCard from "./components/planet-card.component";
import NextPlanetButton from "./components/next-planet-button.component";

import addHttpsToUrl from "./utils/addHttpsToUrl";

import type {
  NextPlanetAction,
  SavePlanetsAction,
  FinishedFetchingAction
} from "./redux/planets.reducer";

type SWGameProps = {
  planetCard: {
    name: string,
    filmsQuantity: number,
    description: {
      population: string,
      terrain: string,
      climate: string
    }
  },
  nextPlanetAction: () => NextPlanetAction,
  savePlanetsAction: (Planet[]) => SavePlanetsAction,
  finishedFetchingAction: () => FinishedFetchingAction
};

export default class componentName extends React.Component<SWGameProps> {
  componentWillMount() {
    this.fetchPlanetsData("https://swapi.co/api/planets/?page=1");
  }

  fetchPlanetsData = (page: string): void => {
    const { savePlanetsAction, finishedFetchingAction } = this.props;

    fetch(addHttpsToUrl(page))
      .then(response => response.json())
      .then(({ next, results }) => {
        savePlanetsAction(results);

        if (next) this.fetchPlanetsData(next);
        else finishedFetchingAction();
      })
      .catch(console.error); // eslint-disable-line no-console
  };

  render() {
    const { planetCard, nextPlanetAction } = this.props;
    return (
      <SWGame>
        <StatusBar hidden={true} />
        <PlanetCard {...planetCard} />
        <NextPlanetButton _onPress={nextPlanetAction} />
      </SWGame>
    );
  }
}

const SWGame = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

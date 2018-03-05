// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SWGame from "./app.component";

import {
  savePlanetsAction,
  finishedFetchingAction,
  nextPlanetAction
} from "./redux/planets.reducer.js";

const mapStateToProps = (state: GlobalStore) => {
  const selectedPlanet = state.planets[state.selectedPlanet];

  return {
    planetCard: {
      name: selectedPlanet && selectedPlanet.name,
      filmsQuantity: selectedPlanet && selectedPlanet.films.length,
      description: {
        population: selectedPlanet && selectedPlanet.population,
        terrain: selectedPlanet && selectedPlanet.terrain,
        climate: selectedPlanet && selectedPlanet.climate
      }
    }
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      savePlanetsAction,
      finishedFetchingAction,
      nextPlanetAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SWGame);

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ planet, population, climate, terrain, films }) => (
  <section className="card">
    <h2 className="card-title">{planet}</h2>
    <ul className="card-info">
      <InfoItem title="Population" data={population} />
      <InfoItem title="Climate" data={climate} />
      <InfoItem title="Terrain" data={terrain} />
    </ul>
    <footer className="card-films">featured in {films} films</footer>
  </section>
);

Card.propTypes = {
  planet: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  films: PropTypes.number.isRequired,
};

export default Card;


const InfoItem = ({ title, data }) => (
  <li className="card-infoItem">
    <span className="card-infoTitle">{title}:</span>
    <span className="card-infoData">{data}</span>
  </li>
);

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ({ clickHandler, label }) => (
  <button className="card-button" onClick={clickHandler}>
    {label}
  </button>
);

NextButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default NextButton;

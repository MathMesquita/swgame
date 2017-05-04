import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ({ clickHandler }) => (
  <button className="nextCard" onClick={clickHandler}>
    next
  </button>
);

NextButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default NextButton;

import React from 'react';
import PropTypes from 'prop-types';

const Notiflix = ({ message }) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};

Notiflix.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notiflix;

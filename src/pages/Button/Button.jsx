import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonLoadMore } from './ButtonLoadMore.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonContainer>
      <ButtonLoadMore type="button" className="button" onClick={onClick}>
        Load more
      </ButtonLoadMore>
    </ButtonContainer>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

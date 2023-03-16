import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ theme, disabled, text, ...props }) => {
  return (
    <button
      type="button"
      className={['button', `button--${theme}`].join(' ')}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  theme: PropTypes.arrayOf(PropTypes.oneOf(['primary', 'secondary'])),
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false, 
  theme: 'primary',
};

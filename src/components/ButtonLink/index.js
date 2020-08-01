import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ButtonLink({ className, to, children }) {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

ButtonLink.defaultProps = {
  to: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
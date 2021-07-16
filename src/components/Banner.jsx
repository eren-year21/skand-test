import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ children, title, subtitle }) => (
  <div className="banner">
    <h1>{title}</h1>
    <div />
    <p>{subtitle}</p>
    {children}
  </div>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Banner.defaultProps = {
  subtitle: '',
};

export default Banner;

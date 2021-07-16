import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children, hero }) => <header className={hero}>{children}</header>;

Hero.propTypes = {
  hero: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Hero.defaultProps = {
  hero: 'defaultHero',
};

export default Hero;

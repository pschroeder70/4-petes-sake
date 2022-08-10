import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ children, headerTitle }) => (
  <header className="header">
  <div className="header__content">
    <div className="header__logo">{headerTitle}</div>
    {children}
  </div>
</header>
);

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  children: PropTypes.string
};

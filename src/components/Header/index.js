import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from 'src/assets/images/logo.png';

import './styles.scss';
import './hamburger.css';

const Header = ({ handleOnHamburger, displayNavBar }) => {
  const navListClassName = displayNavBar ? 'nav__list nav__list--show' : 'nav__list';
  const hamburgersClassName = displayNavBar ? 'hamburger hamburger--arrowturn is-active' : 'hamburger hamburger--arrowturn';

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav__main-page" href="">
          <img className="nav__logo" src={logo} alt="logo" />
        </NavLink>
        {/* https://jonsuh.com/hamburgers/ */}
        <button className={hamburgersClassName} onClick={() => handleOnHamburger()} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <ul className={navListClassName}>
          <NavLink to="/" className="nav__item nav__item--home" activeClassName="nav__item--active" exact><i className="fas fa-home fa-lg" /></NavLink>
          <NavLink to="/about" className="nav__item nav__item--about" activeClassName="nav__item--active" exact><i className="fas fa-user fa-lg" /></NavLink>
          <NavLink to="/skills" className="nav__item nav__item--skills" activeClassName="nav__item--active" exact><i className="fas fa-cogs fa-lg" /></NavLink>
          <NavLink to="/projects" className="nav__item nav__item--projects" activeClassName="nav__item--active" exact><i className="fas fa-briefcase fa-lg" /></NavLink>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  handleOnHamburger: PropTypes.func.isRequired,
  displayNavBar: PropTypes.bool.isRequired,
};

export default Header;

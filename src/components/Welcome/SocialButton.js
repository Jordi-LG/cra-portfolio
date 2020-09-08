import React from 'react';
import PropTypes from 'prop-types';

const SocialButton = ({ title, iconClass, url }) => (
  <div className="button__container">
    <a
      href={title === 'Email' ? `mailto: ${url}` : url}
      className={`button button__${title.toLowerCase()}`}
      type="button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={iconClass} />
      <div className="button__line" />
      <span className="button__content">{title}</span>
    </a>
  </div>
);

SocialButton.propTypes = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialButton;

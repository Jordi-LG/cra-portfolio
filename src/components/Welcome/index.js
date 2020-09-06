import React from 'react';
import PropTypes from 'prop-types';
import SocialButton from 'src/components/Welcome/SocialButton';

import './styles.scss';

const Welcome = ({ socialButtons }) => {
  const mappedSocialButtons = socialButtons.map((socialButton) => (
    <SocialButton
      {...socialButton}
      key={socialButton.title}
    />
  ));

  return (
    <section className="welcome">
      <h1 className="welcome__title">
        Bienvenue ! <br />
        Je suis Jordi, <br /> développeur web.
      </h1>
      <p className="welcome__content">
        Développeur Front End / React / Redux
      </p>
      <div className="welcome__buttons">
        { mappedSocialButtons }
      </div>
    </section>
  )
};

Welcome.propTypes = {
  socialButtons: PropTypes.array.isRequired,
};

export default Welcome;

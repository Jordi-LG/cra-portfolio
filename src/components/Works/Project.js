import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Project = ({
  id,
  title,
  describe,
  tags,
  url,
  urlGitHub,
  img,
}) => {
  const [panelOpen, setPanel] = useState(false);
  const [toggleArrow, setArrow] = useState(false);

  const mappedTags = tags.map((tag) => (
    <li
      className="works__tag"
      key={tag}
    >
      #{tag}
    </li>
  ));

  const panelClasses = panelOpen ? 'works__panel works__panel--open' : 'works__panel';
  const iconClasses = toggleArrow ? 'works__icon works__icon--open' : 'works__icon';

  return (
    <>
      <li className="works__accordion">
        <div className="works__img" style={{ backgroundImage: `url(${img})` }}>
          <span
            className={iconClasses}
            onClick={() => {
              setPanel(!panelOpen);
              setArrow(!toggleArrow);
            }}
          >
            <i className="fas fa-angle-down fa-2x" />
          </span>
          <h2 className={`works__title works__title--${id}`}>
            { title }
          </h2>
        </div>
        <div className={panelClasses}>
          <p className="works__describe">
            { describe }
          </p>

          <hr />

          <ul className="works__tags">
            {mappedTags}
          </ul>

          <hr />

          <div className="works__buttons">
            <a href={url} rel="noreferrer" target="_blank" className="works__link">
              <i className="fas fa-globe fa-4x" />
            </a>
            <a href={urlGitHub} rel="noreferrer" target="_blank" className="projects__github">
              <i className="fab fa-github fa-4x" />
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

Project.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  describe: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  urlGitHub: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Project;

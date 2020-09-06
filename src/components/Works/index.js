import React from 'react';
import PropTypes from 'prop-types';
import Project from 'src/components/Works/Project';

import './styles.scss';

const Works = ({ projects }) => {
  // Data to display in left column for large screen
  const filterLeftColumnProjects = projects.slice(0, Math.ceil(projects.length / 2));

  // Data to display in right column for large screen
  const filterRightColumnProjects = projects.slice(Math.ceil(projects.length / 2));

  /**
   * return Project component with data
   * @param {object} arg
   * @return Project with data
   */
  const mappedProjects = (arg) => (
    arg.map((project) => (
      <Project
        key={project.id}
        {...project}
      />
    ))
  );

  return (
    <section className="works">
      <ul className="works__list-left">
        {mappedProjects(filterLeftColumnProjects)}
      </ul>
      <ul className="works__list-right">
        {mappedProjects(filterRightColumnProjects)}
      </ul>
    </section>
  );
};

Works.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Works;

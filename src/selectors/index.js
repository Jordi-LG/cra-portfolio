/* eslint-disable import/prefer-default-export */
import React from 'react';
import Project from 'src/components/Works/Project';

export const mappedProjects = (projects) => (
  projects.map((project) => (
    <Project
      key={project.id}
      {...project}
    />
  ))
);

import React from 'react';

import './styles.scss';

const Skills = () => (
  <section className="skills">
    <h1 className="skills__title">Compétences</h1>
    <p className="skills__content">
      Mon domaine principal est le développement front end (interraction avec l'utilisateur). <br/>
      Mes notions en développement back end me permet d'interragir entre les deux sans difficulté. <br/>
      La découverte de plusieurs langages me permet aisément de m'adapter à l'apprentissage de nouvelles technologies. <br/>
    </p>
    <div className="skills__list">
      <div className="skills__list-1">
        <article className="skills__item">HTML5/CSS3</article>
        <article className="skills__item">Javascript</article>
        <article className="skills__item">PHP</article>
        <article className="skills__item">Ruby</article>
        <article className="skills__item">SQL</article>
      </div>

      <div className="skills__list-2">
        <article className="skills__item">React</article>
        <article className="skills__item">Redux</article>
        <article className="skills__item">Vue.js</article>
        <article className="skills__item">Ruby On Rails</article>
      </div>

      <div className="skills__list-3">
        <article className="skills__item">REST</article>
        <article className="skills__item">Responsive Design</article>
        <article className="skills__item">BEM</article>
        <article className="skills__item">Librairies/Frameworks</article>
      </div>
    </div>
  </section>
);

export default Skills;

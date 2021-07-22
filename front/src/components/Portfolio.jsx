import React, { useState } from 'react';
import './style/Portfolio.css';
import WildPost from '../assets/WildPost.png';
import BattleOfHeroes from '../assets/BattleOfHeroes.png';
import Pipelette from '../assets/Pipelette.png';

function Portfolio() {
  const [language, setLanguage] = useState();
  const languages = ['React', 'VueJS', 'JavaScript', 'NodeJS', 'MySQL'];
  const discoverButton = (classname, text, path) => <a href={path}><button type="button" id="button" className={classname}>{text}</button></a>;

  console.log(language);
  return (
    <div className="Portfolio">
      <h1 className="pageTitle">Web Developer portfolio</h1>
      {
        languages.map((e) => (
          <button type="button" onClick={() => setLanguage(e)}>{e}</button>
        ))
      }
      <section id="projects-container">
        <div id="WildPost-container">
          <img alt="wildpost" id="WildPost-image" className="img" src={WildPost} />
          <h3 id="WildPost-title" className="title">Wild Post</h3>
          {discoverButton('discover', 'Discover', 'https://dthomas51.github.io/WildPostV2/')}
        </div>
        <div id="BattleOfHeroes-container">
          <img alt="battle of heroes" id="BattleOfHeroes-image" className="img" src={BattleOfHeroes} />
          <h3 id="BattleOfHeroes-title" className="title">Battle of Heroes</h3>
          {discoverButton('discover', 'Discover', 'https://github.com/WildCodeSchool/reims-js-2103-project2-insomniac-battle-of-heroes')}
        </div>
        <div id="Pipelette-container">
          <img alt="pipelette" id="Pipelette-image" className="img" src={Pipelette} />
          <h3 id="Pipelette-title" className="title">Pipelette</h3>
          {discoverButton('discover', 'Discover', 'https://github.com/WildCodeSchool/reims-js-2103-project3-pipelette-front')}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

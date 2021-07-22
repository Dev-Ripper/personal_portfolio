import React from 'react';
import moi from '../assets/moi.jpg';
import reactlogo from '../assets/reactlogo.png';
import vuelogo from '../assets/vuelogo.png';
import javascriptlogo from '../assets/javascriptlogo.png';
import nodejslogo from '../assets/nodejslogo.png';
import mysqllogo from '../assets/mysqllogo.png';
import githublogo from '../assets/githublogo.png';
import linkedinlogo from '../assets/linkedinlogo.png';
import './style/Home.css';

function Home() {
  return (
    <div className="Home">
      <header>
        <img alt="moi" src={moi} className="photo" />
        <h1 className="whoami">Hello, my name is Jean-Marc Epis.</h1>
      </header>
      <main id="main">
        <p className="presentation">
          {' '}
          I am a Web & Web Mobile junior developer.
          I mostly work with ReactJs, ExpressJs and MySQL.
          You can check my latest projects in the next page
          or on my
          <a href="https://github.com/JeanMarcEpis" className="gitlink"> GitHub</a>
          .
        </p>
        <section className="linksToSocials">
          <p className="followme">Follow me!</p>
          <a href="https://github.com/JeanMarcEpis"><img alt="github" src={githublogo} className="socials" id="github" /></a>
          <hr className="solid" />
          <a href="https://www.linkedin.com/in/devripper/"><img alt="linkedin" src={linkedinlogo} className="socials" /></a>
        </section>
      </main>
      <footer>
        <p className="footerText">Languages and frameworks i use :</p>
        <img alt="react" src={reactlogo} className="languagelogos" />
        <img alt="react" src={vuelogo} className="languagelogos" />
        <img alt="react" src={javascriptlogo} className="languagelogos" />
        <img alt="react" src={nodejslogo} className="languagelogos" />
        <img alt="react" src={mysqllogo} className="languagelogos" />
      </footer>
    </div>
  );
}

export default Home;

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Sobre o Pinterest</h1>
        <div className="about-section">
          <h2>Nossa Missão</h2>
          <p>Trazer inspiração para todas as pessoas do mundo através de ideias visuais que podem ser transformadas em realidade.</p>
        </div>
        
        <div className="about-section">
          <h2>O que fazemos</h2>
          <p>O Pinterest é um catálogo mundial de ideias. Aqui você encontra inspiração para todos os seus projetos e interesses, desde decoração até receitas, moda e muito mais.</p>
        </div>

        <div className="about-grid">
          <div className="about-stat">
            <h3>400M+</h3>
            <p>Usuários ativos mensais</p>
          </div>
          <div className="about-stat">
            <h3>200B+</h3>
            <p>Pins salvos</p>
          </div>
          <div className="about-stat">
            <h3>4M+</h3>
            <p>Ideias salvas diariamente</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
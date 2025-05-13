import React from 'react';
import './News.css';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Pinterest lança nova funcionalidade de IA para busca visual',
      date: '15 de Março, 2024',
      description: 'Nova ferramenta permite aos usuários encontrar pins similares usando inteligência artificial avançada.',
      image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=500'
    },
    {
      id: 2,
      title: 'Atualizações na política de privacidade',
      date: '10 de Março, 2024',
      description: 'Novas medidas para proteger a privacidade dos usuários e garantir uma experiência mais segura.',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=500'
    },
    {
      id: 3,
      title: 'Pinterest alcança marca de 500 milhões de usuários',
      date: '5 de Março, 2024',
      description: 'Plataforma celebra crescimento significativo e anuncia novos recursos para criadores de conteúdo.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500'
    }
  ];

  return (
    <div className="news-container">
      <div className="news-content">
        <h1 className="news-title">Últimas Notícias</h1>
        
        <div className="news-grid">
          {news.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-text">
                <span className="news-date">{item.date}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button className="news-read-more">Ler mais</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News; 
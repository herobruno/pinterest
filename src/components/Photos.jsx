import { useState, useEffect } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import './Photos.css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Pegando página aleatória para garantir variedade
        const randomPage = Math.floor(Math.random() * 50) + 1;
        const response = await axios.get(`https://picsum.photos/v2/list?page=${randomPage}&limit=20`);
        setPhotos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar fotos:', error);
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  const filteredPhotos = photos.filter(photo =>
    photo.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="photos-loader">Carregando...</div>
    );
  }

  return (
    <div className="photos-page-bg">
      <div className="photos-search-container">
        <input
          type="text"
          placeholder="Buscar por autor..."
          className="photos-search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="photos-masonry-grid"
        columnClassName="photos-masonry-grid_column"
      >
        {filteredPhotos.length === 0 && (
          <div className="photos-notfound">Nenhuma foto encontrada.</div>
        )}
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="photos-card">
            <img
              src={`${photo.download_url}?w=400&auto=format`}
              alt={photo.author}
              className="photos-img"
              loading="lazy"
            />
            <div className="photos-card-info">
              <span className="photos-author" title={photo.author}>{photo.author}</span>
              <a
                href={photo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="photos-link"
              >
                Ver original
              </a>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Photos; 
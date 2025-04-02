// src/components/Designs.js
import React, { useEffect, useState } from 'react';
import '../styles/designs.css';
import title from '../assets/25.png';

const Designs = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Konumları manuel olarak tanımlıyoruz
  const projectPositions = [
    { x: 10, y: 300 },
    { x: 78, y: 500 },
    { x: 385, y: 690 },
    { x: 140, y: 700 },
    { x: 230, y: 900 },
    { x: 1050, y: 300 },
    { x: 1250, y: 450 },
    { x: 1400, y: 600 },
    { x: 1600, y: 880 },
    { x: 1400, y: 940 },
    { x: 980, y: 900 },
    { x: 740, y: 600 },
    { x: 650, y: 1110 },
    { x: 25, y: 1250 },
    { x: 1200, y: 1200 },
    { x: 1850, y: 500 },
    { x: 400, y: 150 },
    { x: 610, y: 1500 },
    { x: 500, y: 300 },
    { x: 550, y: 300 },
    { x: 100, y: 150 },
    { x: 250, y: 200 },
    { x: 400, y: 100 },
    { x: 0, y: 0 }
    // Yeni projeler için daha fazla konum ekleyebilirsin
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.github.com/users/SMeydan/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="map-container">
      <img src={title} alt="Designs" className="designs-title" />
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        repos.map((repo, index) => {
          // Her projeye özel konumu alıyoruz
          const position = projectPositions[index] || { x: 0, y: 0 }; // Eğer konum tanımlanmadıysa varsayılan (0, 0) konumunu kullan

          return (
            <div
              key={repo.id}
              className="project-node"
              style={{
                left: `${position.x}px`, // X koordinatını belirliyoruz
                top: `${position.y}px`, // Y koordinatını belirliyoruz
              }}
            >
              <div className="project-info">
                <h3>{repo.name}</h3>
                <p>{repo.description || 'No description available'}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  View Repository
                </a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Designs;

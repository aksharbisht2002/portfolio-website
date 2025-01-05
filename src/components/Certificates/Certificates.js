// Certificates.js
import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Software Engineer Intern Certificate',
      issuedBy: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/548b5738cf89',
    },
    {
      title: 'Android Development Certificate',
      issuedBy: 'Ainwik Infotech',
      link: 'https://drive.google.com/file/d/1p3JaIJ8lZ3A-AljdfTbMCsFIYHUUoUOA/view?usp=drive_link',
    },
    {
      title: 'IT & Web Developer Intern Certificate',
      issuedBy: 'BasketHunt',
      link: 'https://drive.google.com/file/d/1_NAuOjm_v74GERDV4UiFhXt-u-T0QSn_/view?usp=drive_link',
    },
    {
      title: 'Java Programming',
      issuedBy: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/iframe/e79ee2f3b76f',
    },
    {
      title: 'SQL',
      issuedBy: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/iframe/747e3d7aaf92',
    },
    {
      title: 'JavaScript',
      issuedBy: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/038b104cddc1',
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <h2>Certificates</h2>
      <div className="certificate-cards">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <h3>{cert.title}</h3>
            <p>Issued by: {cert.issuedBy}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

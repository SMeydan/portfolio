import React from 'react';
import '../App.css';
import orangeSlice from '../assets/13.png'; // Portakal dilimi resmi
import certificateIcon from '../assets/12.png'; // Sertifika simgesi
import certificates from '../assets/11.png'; // Sertifikalar resmi

const CertificatesPage = () => {
  return (
    <div className="certificates-page">
      <img src={certificates} alt="certificates" className="certificates" />
      <div className="certificates-grid">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="certificate-item">
            <img src={certificateIcon} alt="certificate-icon" className="certificate-icon" />
            <p>CERTIFICATE {index + 1}</p>
          </div>
        ))}
      </div>
      <img src={orangeSlice} alt="orange-slice" className="orange-slice top-left" />
      <img src={orangeSlice} alt="orange-slice" className="orange-slice top-right" />
      <img src={orangeSlice} alt="orange-slice" className="orange-slice bottom-left" />
      <img src={orangeSlice} alt="orange-slice" className="orange-slice bottom-right" />
    </div>
  );
};

export default CertificatesPage;
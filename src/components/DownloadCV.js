import React from 'react';

const DownloadCV = () => {
  return (
    <div>
      <h2>Download My CV</h2>
      <a href="/Tarzan-CV.png" download>
        <button style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
          Download CV
        </button>
      </a>
    </div>
  );
};

export default DownloadCV;

import React, { useState } from 'react';

const ImageRotation = () => {
  const [degree, setDegree] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ backgroundColor: 'black', color: 'white' }}>
        Image Rotation
      </h1>

      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/083/933/835/small/beautiful-and-inspiring-picture-detailing-a-bright-hot-air-balloon-over-river-pure-cozy-perfect-for-creatives-moods-stock-image-free-photo.jpeg"
        alt="Scenic mountain view"
        style={{
          width: '500px',
          height: '500px',
          objectFit: 'cover',
          borderRadius: '12px',
          transform: `rotate(${degree}deg)`,
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
        }}
      />

      <br />

      <button onClick={() => setDegree(degree - 90)}>
        Left
      </button>

      <button onClick={() => setDegree(degree + 90)}>
        Right
      </button>
    </div>
  );
};

export default ImageRotation;
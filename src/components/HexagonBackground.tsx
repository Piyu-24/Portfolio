import React from 'react';
import '../styles/hexagon-background.css';

const HexagonBackground: React.FC = () => {
  return (
    <div className="hexagon-background">
      <div className="hex-layer hex-layer-1"></div>
      <div className="hex-layer hex-layer-2"></div>
      <div className="hex-layer hex-layer-3"></div>
    </div>
  );
};

export default HexagonBackground;

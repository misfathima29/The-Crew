import { useEffect, useState } from 'react';
import './SnowEffect.css';

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 5 + 5,
      size: Math.random() * 5 + 3,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity
          }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;
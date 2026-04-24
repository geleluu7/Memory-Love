import React, { useState, useEffect } from 'react';

const AnimatedImageGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const images = [
    {
      src: "/6.0.jpg",
      caption: "You Made My Dreams Come True",
      delay: 0
    },
    {
      src: "/6.1.jpg",
      caption: "Every Moment With You",
      delay: 0.2
    },
    {
      src: "/7.jpg",
      caption: "Forever In My Heart",
      delay: 0.4
    },
    {
      src: "/8.0.jpg",
      caption: "You Are My Everything",
      delay: 0.6
    },
    {
      src: "/8.1.jpg",
      caption: "Love Beyond Words",
      delay: 0.8
    },
    {
      src: "/9.jpg",
      caption: "Beautiful Like You",
      delay: 1.0
    },
    {
      src: "/10.jpg",
      caption: "Forever and Always",
      delay: 1.2
    },
    {
      src: "/11.jpg",
      caption: "Deeply in Love",
      delay: 1.4
    },
    {
      src: "/12.jpg",
      caption: "Together forever,always",
      delay: 1.6
    },
    {
      src: "/13.jpg",
      caption: "Love First",
      delay: 1.8
    },
    {
      src: "/14.jpg",
      caption: "Endless Love Story",
      delay: 2.0
    },
    {
      src: "/15.0.jpg",
      caption: "You Complete Me",
      delay: 2.2
    },
    {
      src: "/15.1.jpg",
      caption: "Start Somewhere",
      delay: 2.4
    },
    {
      src: "/16.jpg",
      caption: "Beloved",
      delay: 2.6
    },
    {
      src: "/17.jpg",
      caption: "My Life",
      delay: 2.8
    },
    {
      src: "/18.jpg",
      caption: "Only One For Me",
      delay: 3.0
    },
    {
      src: "/19.jpg",
      caption: "My Heart Belongs To You",
      delay: 3.2
    },
    {
      src: "/23.jpg",
      caption: "You're My Happiness",
      delay: 3.4
    },
    {
      src: "/24.jpg",
      caption: "With You, I'm Home",
      delay: 3.6
    },
    {
      src: "/25.jpg",
      caption: "Best Decision Ever",
      delay: 3.8
    },
    {
      src: "/26.jpg",
      caption: "Your Smile Is Everything",
      delay: 4.0
    },
  ];

  const decorativeElements = [
    { emoji: '🌸', top: '10%', left: '5%', delay: 0 },
    { emoji: '💕', top: '15%', left: '85%', delay: 0.5 },
    { emoji: '🦋', top: '25%', left: '15%', delay: 1 },
    { emoji: '✨', top: '35%', left: '90%', delay: 1.5 },
    { emoji: '🌺', top: '45%', left: '8%', delay: 2 },
    { emoji: '💖', top: '55%', left: '92%', delay: 2.5 },
    { emoji: '🌹', top: '65%', left: '12%', delay: 3 },
    { emoji: '🎀', top: '75%', left: '88%', delay: 3.5 },
    { emoji: '🍓', top: '85%', left: '10%', delay: 4 },
    { emoji: '🌟', top: '95%', left: '85%', delay: 4.5 }
  ];

  return (
    <div className="animated-image-grid-container">
      <div className="grid-background-decoration">
        {decorativeElements.map((element, index) => (
          <div
            key={index}
            className="floating-decoration"
            style={{
              top: element.top,
              left: element.left,
              animationDelay: `${element.delay}s`
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      <div className="grid-header">
        <h2 className="grid-title">
          <span className="title-line">You Made</span>
          <span className="title-line">My World</span>
          <span className="title-line">Even More</span>
          <span className="title-line">Beautiful</span>
        </h2>
      </div>

      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`grid-item ${hoveredIndex === index ? 'hovered' : ''}`}
            style={{ animationDelay: `${image.delay}s` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="image-container">
              <img
                src={image.src}
                alt={image.caption}
                className="grid-image"
              />
              <div className="image-overlay">
                <div className="image-hearts">
                  <span className="heart-1">💕</span>
                  <span className="heart-2">💖</span>
                  <span className="heart-3">💕</span>
                </div>
                <p className="image-caption">{image.caption}</p>
              </div>
            </div>
            <div className="item-border"></div>
          </div>
        ))}
      </div>

      <div className="grid-message">
        <p className="romantic-message">
          Every picture tells our story, every moment is a treasure 💕
        </p>
      </div>
    </div>
  );
};

export default AnimatedImageGrid;
import  { useState } from 'react';
import './Card.css'; 

// eslint-disable-next-line react/prop-types
const Card = ({ title, content,link }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleCard = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`}>
    <div className="card-content">
      <h2>{title}</h2>
      <p>{content}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="button" onClick={toggleCard}>
            Read More..
        </button>
        </a>
    </div>
  </div>
  );
};

export default Card;

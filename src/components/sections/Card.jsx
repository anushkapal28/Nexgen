import React from 'react';
import './Card.css'; 
import { Link } from 'react-router-dom';

function Card({ id, photo, title, description}) {
  

  return (

    <div className="card">
      <Link to={`/details/${id}`} className="arrow-link">
        <div className="arrow-icon">&#10148;</div>
      </Link>
      <div className="image">
        <img src={photo} />
        <div className="card-content">
          <h2 className='card-conh'>{title}</h2>
          <br/>
          <p className='card-des'>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
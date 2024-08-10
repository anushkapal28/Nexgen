import React , {useState} from 'react';
import './Cardsec.css';
import data from './Data.jsx';
import Card from './Card.jsx';

function Cardsec() {

  const[cards , setCards] = useState(data);

  return (
    <div>
    <div className='alll'>
        WHAT WE DO
        </div>
    <div className='cardsecw'>
      <div className="card-section">
        {
          cards.map((card) => (
            <Card 
            key={card.id}
            id={card.id}
            photo={card.photo}
            title={card.title}
            description={card.description}
            /> 
          ))
        }
      </div>
      </div>
      </div>
  );
}

export default Cardsec;
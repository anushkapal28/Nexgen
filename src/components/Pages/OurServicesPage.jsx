import React , {useState} from 'react';
import logo from '../../assets/img/Logo.png';
import './OurServicesPage.css';
import data from '../sections/Data.jsx';
import Footer from '../sections/Footer';
import About from '../sections/About.jsx';
import Card from '../sections/Card.jsx';
function OurServicesPage() {

  const[cards , setCards] = useState(data);

  return (
    <div className='abbbbb'>
      <About/>
      <div className='pagecard'>
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
    
    <Footer/>
    </div>
  );
}

export default OurServicesPage;
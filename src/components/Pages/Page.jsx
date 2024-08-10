import React from 'react'
import './Page.css';
import { useParams, Link } from 'react-router-dom';
import Data from '../sections/Data';
import Footer from '../sections/Footer';
const Page = () => {
  const { id } = useParams();
  const item = Data.find(item => item.id === parseInt(id));

  return (
    <div className='page'>
    <div className="description-container">
      {item ? (
        <div>
          <h1 className="title">{item.title}</h1>
          <img src={item.photo} alt={item.title} className="image" />
          <p className="description">{item.description}</p>
          <Link to="/" className="back-link">Go Back</Link>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
    <Footer/>
    </div>
  );
}

export default Page

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/card';
import Australia from "./components/bg4.jpg"
import Japan from "./components/bg2.jpg"
import France from "./components/bg3.jpg"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<h1 className='head'>Travel Around the World!</h1>
  <div className='card-container'>

    <Card 
    title="Australia"
    cardImg={Australia}
    content="Australia, a vibrant and diverse continent, is renowned for its breathtaking landscapes, unique wildlife, and rich cultural heritage."/>
    <Card 
    title="Japan"
    cardImg={Japan}
    content="Australia, a vibrant and diverse continent, is renowned for its breathtaking landscapes, unique wildlife, and rich cultural heritage."/>
    <Card 
    title="France"
    cardImg={France}
    content="Australia, a vibrant and diverse continent, is renowned for its breathtaking landscapes, unique wildlife, and rich cultural heritage."/>
    

  </div>

  </>
  
);

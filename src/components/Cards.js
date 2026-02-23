import { memo } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import CardItem from './CardItem';



const Cards = memo(function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <h1>Our Premium Manufacturing Solutions</h1>
        <ul className='cards__items'>
          <CardItem
            src='images/1.jpeg'
            text='Bobst High Speed Die Cut Punching'
            label='Machinery'
            path='/services'
          />
          <CardItem
            src='images/2.jpeg'
            text='High Speed Folder Gluer (FFG)'
            label='Luxury'
            path='/services'
          />
          <CardItem
            src='images/3.jpeg'
            text='High Speed 5ply Auto Corrugation Plant'
            label='Production'
            path='/services'
          />
          <CardItem
            src='images/4.jpeg'
            text='Rotary Die Cut'
            label='Precision'
            path='/products'
          />
          <CardItem
            src='images/5.jpeg'
            text='4 color Offset Printing'
            label='Printing'
            path='/contact'
          />
          <CardItem
            src='images/image.jpeg'
            text='Reel to Sheet Cutting'
            label='Cutting'
            path='/contact'
          />
          <CardItem
            src='images/automatic_gluer.jpeg'
            text='Auto Gluer and Stitcher'
            label='Finishing'
            path='/services'
          />
        </ul>
        <div className="cards__cta">
          <Link to="/products" className="btn-view-all">View All Products</Link>
        </div>
      </div>
    </div>
  );
});
export default Cards;
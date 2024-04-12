import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout the Awesome machinery we use</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpeg'
              text='High Speed Die Cut Punching Machine'
              label='Machinery'
              path='/services'
            />
            <CardItem
              src='images/2.jpeg'
              text='High Speed Folder Gluer Machine'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpeg'
              text='High Speed 5ply Auto Corrugation Plant'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/4.jpeg'
              text='Two Color Printer Slotter Machines - 5nos'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/5.jpeg'
              text='4 color Offset Printing Machine'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/6.jpeg'
              text='Cut-to-Cut Sheet Trimmer'
              // label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/7.jpeg'
              text='Two Color Printer Slotter Machines - 5nos'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/8.jpeg'
              text='4 color Offset Printing Machine'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
import React from 'react';
import './Boxes.css';
import CardItem from '../../CardItem';
import image from '../Boxes/assets/2_ply_roll.jpeg'
import boardBox from '../Boxes/assets/board_box.png'
import threePlyTray from '../Boxes/assets/3_ply_tray.png'
import threePlySheet from '../Boxes/assets/3_ply_sheet.webp'
import fivePlySheet from '../Boxes/assets/5_ply_sheet.jpeg'
import threePlyBox from '../Boxes/assets/3_ply_corrugated_box.png'
import fivePlyBox from '../Boxes/assets/5_ply_box.png'
import partititon from '../Boxes/assets/partition.jpeg'

function Boxes() {
 

  return (
    <div className='cards' >
      <h1>OUR PRODUCTS</h1>
      <div className='cards__container' >
        <div  className='cards__wrapper' >
          <ul className='cards__items'>
            <CardItem
              src={image}
              text='2 Ply Liner Rolls'
              label='Machinery'
              path='/services'
            />
            <CardItem
              src={boardBox}
              text='Mono Carton Boxes'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={threePlySheet}
              text='3 Ply Corrugated Sheets'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={fivePlySheet}
              text='5 Ply Corrugated Sheets'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={threePlyBox}
              text='3 Ply Corrugated Boxes'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={fivePlyBox}
              text='5 Ply Corrugated Boxes'
              // label='Mystery'
              path='/services'
            />
            <CardItem
              src={threePlyTray}
              text='Corrugated Trays'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={partititon}
              text='Partitions'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
        <h2>and many more</h2>
      </div>
    </div>
  );
}

export default Boxes;
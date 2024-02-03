import React from 'react'
import '../Customers.css'
import CardItem from '../CardItem'

export default function Customers() {
  return (
    <div className='cards'>
      <h1>Our Valued Customers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/customers_logo/aurobindo.jpg'
              text=''
                          path='/services'
                          label=''
            />
            <CardItem
              src='/images/customers_logo/coromandel.jpg'
              text=''
              label=''
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/customers_logo/drl.jpg'
              text=''
              label=''
              path='/services'
            />
            <CardItem
              src='/images/customers_logo/eisai.jpg'
              text=''
              label=''
              path='/products'
            />
            <CardItem
              src='/images/customers_logo/hetero.jpg'
              text=''
              label=''
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/customers_logo/hormann.jpg'
              text=''
              label=''
              path='/services'
            />
            <CardItem
              src='/images/customers_logo/kaveri.jpg'
                          text='
              '
              label=''
              path='/products'
            />
            <CardItem
              src='/images/customers_logo/mrf.jpg'
              text=''
              label=''
              path='/sign-up'
            />
                  </ul>
                  <ul className='cards__items'>
            <CardItem
              src='/images/customers_logo/msn.jpg'
              text=''
              label=''
              path='/services'
            />
            <CardItem
              src='/images/customers_logo/paradise.jpg'
              text=''
              label=''
              path='/products'
            />
            
          </ul>
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import './Article.css'
import logo from './tick.png'

export default function Article3() {

  return (
    <div className="articleContainer3">

      <article>
        <div className='articleTitle listItemsDescription'>Were here to help</div>
        <div className="largeCenter">
          <ul>
            <a href='/signup' className='listItems'>Chat</a>
            <img className='img' src={logo} alt="logo missing" />
            <br></br>
            <a href='/' className='listItems'> Call us on : 1300 Rental-Man </a>
            <img className='img' src={logo} alt="logo missing" />
            <br></br>
            <a href='/' className='listItems'>Email : RenMan@rent.com</a>
            <img className='img' src={logo} alt="logo missing" />
            <br></br>
            <a href='/' className='listItems'>Request a call back</a>
            <img className='img' src={logo} alt="logo missing" />
            <br></br>
          </ul>
        </div>
      </article>
    </div>
  );
}
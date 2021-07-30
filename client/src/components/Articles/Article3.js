import React from 'react';
import './Article.css'
import logo from './tick.png'

export default function Article3() {

  return (
    <div className="articleContainer3">

      <article>
        <div className='articleTitle listItemsDescription'>Were here to help</div>

        <ul>
          <a href='/signup' className='listItems'>Live Chat</a>

          <img className='img' src={logo} alt="logo missing" />
          <br></br>
          <a href='/' className='listItems'> Call us on : 0402825610 </a>
          <img className='img' src={logo} alt="logo missing" />
          <br></br>
          <a href='/' className='listItems'>Email : c.onions101@gmail.com</a>
          <img className='img' src={logo} alt="logo missing" />
          <br></br>
          <a href='/' className='listItems'>Request a call back</a>
          <img className='img' src={logo} alt="logo missing" />
          <br></br>



        </ul>



      </article>
    </div>
  );
}
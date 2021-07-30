import React from 'react';
import './Article.css'

export default function Article() {

  return (
    <div className="articleContainer">

      <article>
        <div className='articleTitle'>How we work</div>

        <ul>
          <li className='listItems'><span className="dot">1</span>Check out our Rates</li>
          <div className='underText'>See if Property management is right for you</div>

          <li className='listItems'><span class="dot">2</span>Sign up</li>
          <div className='underText'>Signup is quick and simple </div>

          <li className='listItems'><span class="dot">3</span>Choose A plan</li>
          <div className='underText'>Add Your properties</div>

          <li className='listItems'><span class="dot">4</span>We do the rest</li>
          <div className='underText'>Its that simple </div>
        </ul>

        <button className='buttonStart' href="/SignUp" >Get Started</button>

      </article>
    </div>
  );
}
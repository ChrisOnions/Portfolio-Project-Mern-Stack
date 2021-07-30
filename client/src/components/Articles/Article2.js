import React from 'react';
import './Article.css'

export default function Article2() {

  return (
    <div className="articleContainer2">

      <article>
        <div className='articleTitle listItemsDescription'>Australias Number #1 Rental property management system</div>

        <ul>
          <li className='listItemsDescription'>10+ million Homes Managed by us on a weekly basis</li>
          <li className='listItemsDescription'>no need for Realestate agents we do it all here </li>
          <li className='listItemsDescription'>Self managge though the app</li>
          <li className='listItemsDescription'>Request inspections from one of our Representatives </li>
          <li className='listItemsDescription'>Book in maintanance though the 24 hour call center</li>
          <li className='listItemsDescription'>Emergancy maintanace We got you covered </li>


        </ul>

        <button className='buttonStart' href="/SignUp" >Login and save</button>

      </article>
    </div>
  );
}
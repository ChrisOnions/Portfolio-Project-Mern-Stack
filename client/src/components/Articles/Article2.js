import React from 'react';
import './Article.css'
import Auth from "../../utils/auth";
import Button from '@material-ui/core/Button';
export default function Article2() {

  return (
    <div className="articleContainer2">
      <article>
        <div>
          <div className='articleTitle listItemsDescription'>Australias Number #1 Rental property management system</div>
          <ul>
            <li className='listItemsDescription'>10+ million Homes Managed by us on a weekly basis</li>
            <li className='listItemsDescription'>no need for Realestate agents we do it all here </li>
            <li className='listItemsDescription'>Self managge though the app</li>
            <li className='listItemsDescription'>Request inspections from one of our Representatives </li>
            <li className='listItemsDescription'>Book in maintanance though the 24 hour call center</li>
            <li className='listItemsDescription'>Emergancy maintanace We got you covered </li>
          </ul>
          {Auth.loggedIn() ? <> </> :
            <div className="flex  center" >
              <Button variant="contained" color="primary" aria-controls="simple-menu" aria-haspopup="true" className='buttonStart' href="/signUp" >Sign Up and save</Button>
            </div>}

        </div>
      </article>
    </div >
  );
}
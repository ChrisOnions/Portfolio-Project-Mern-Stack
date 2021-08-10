import React from 'react';
import './Article.css'
import Auth from "../../utils/auth";
import Button from '@material-ui/core/Button';
export default function Article2() {

  return (
    <div className="articleContainer2">
      <article>
        <div>
          <div className='articleTitle listItemsDescription'>Australia's Number #1 Rental Property Management System</div>
          <ul>
            <li className='listItemsDescription'>10+ million homes managed by us on a weekly basis</li>
            <li className='listItemsDescription'>No need for realestate agents - We do it all here!</li>
            <li className='listItemsDescription'>Self manage though the app</li>
            <li className='listItemsDescription'>Request inspections from one of our representatives </li>
            <li className='listItemsDescription'>Book in maintanance through the 24 hour Call Centre</li>
            <li className='listItemsDescription'>Emergancy maintenance - We got you covered! </li>
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
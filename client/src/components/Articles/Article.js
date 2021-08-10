import React from 'react';
import './Article.css'
import ImageImported from "../../assets/howWeWork.png"
import Auth from "../../utils/auth";
import Button from '@material-ui/core/Button';
export default function Article() {

  return (
    <div className="articleContainer ">
      <div >
        <div className=" flex spaceBetween">
          <article className=" " >
            <div className='articleTitle'>How we work</div>
            <ul>
              <li className='listItems'><span className="dot">1</span>Check Out Our Rates</li>
              <div className='underText'>See if Property Management is right for you</div>
              <li className='listItems'><span className="dot">2</span>Sign Up</li>
              <div className='underText'>Signup is quick and simple </div>
              <li className='listItems'><span className="dot">3</span>Choose A Plan</li>
              <div className='underText'>Add your properties</div>
              <li className='listItems'><span className="dot">4</span>We do the rest</li>
              <div className='underText'>It's that simple! </div>
            </ul>
            {Auth.loggedIn() ? <> </> :
              <div className="flex">
                <Button style={{ marginLeft: "50px" }} className='buttonStart' variant="contained" color="primary" aria-controls="simple-menu" aria-haspopup="true" href="/SignUp" >Get Started</Button></div>}

          </article>

          <img className="sideimg fifty" src={ImageImported} alt="description" />
        </div>


      </div>
    </div>
  );
}
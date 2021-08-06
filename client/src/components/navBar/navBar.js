import React from 'react';
import Dropdown from './dropdown/dropdown'
import Title from './NameIcon/icon'
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './navBar.css'

import '../../style.css'
export default function Header() {

  return (
    <div className='headerContainer flex between align-center' >
      <Title />
      <div>
        {Auth.loggedIn() ? <Dropdown /> :
          <Link className='buttonNav' to="/login" >
            LOGIN
          </Link>}

      </div>
    </div >
  );
}
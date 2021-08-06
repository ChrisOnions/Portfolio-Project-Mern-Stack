import React from 'react';
import logo from './Rent.png'
<img className='iconLogo' src={logo} alt="Logo" />
export default function icon() {
  return (
    <div className='flex space'>
      <img className='iconLogo' src={logo} alt="Logo" />
      <a className='iconContainer' href="/">
        Property
        <span className='iconManagement'> Management</span>
      </a>
    </div>
  );
}
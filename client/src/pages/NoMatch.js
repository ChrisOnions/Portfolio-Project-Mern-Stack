import React from "react";
import '../style.css'
import oops from '../assets/404.png'

const NoMatch = () => {
  return (
    <div className="sizeContainer">
      <div className="margin-50 flex alignCenter col" >
        <h1 className="center2">404 Page Not Found</h1>
        <img className="center2 smaller" src={oops} alt="description" />
      </div>
    </div>
  );
};

export default NoMatch;

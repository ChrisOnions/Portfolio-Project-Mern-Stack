import React from 'react';
import './home.css'

import Article from '../../components/Articles/Article';
import Article2 from '../../components/Articles/Article2';
import Article3 from '../../components/Articles/Article3';
export default function home() {

  return (
    <div className="sizeContainer">

      <Article2 />
      <Article />
      <Article3 />

    </div>
  );
}
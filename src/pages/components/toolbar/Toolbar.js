import React from 'react';
import './css/toolbar.css';
import brand from './images/brand.png';

export default function Toolbar() {
  return (
    <header>
        <nav>
            <img src={brand} alt=""></img>
            <h4>Home</h4>
            <h4>Review</h4>
            <h4>Story</h4>
        </nav>
    </header>
  )
}
import React from 'react';
import './css/toolbar.css';
import brand from './images/brand.png';
import { Link } from 'react-router-dom';

export default function Toolbar() {
  return (
    <header>
      <nav>
        <img src={brand} alt=""></img>
        <div className="toolbar-itens">
          <Link to="/">Home</Link>
          <Link to="/overview">Overview</Link>
          <Link to="/story">Story</Link>
        </div>
      </nav>
    </header>
  )
}
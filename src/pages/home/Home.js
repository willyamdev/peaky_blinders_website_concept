import React, { useState } from 'react';
import character from './characters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './css/home.css';

export default function Home() {

  let [characterSelected, setCharacter] = useState(0);

  function changeCharacter(char) {
    if(char === -1) char = character.length - 1;

    if(char >= character.length){
      setCharacter(0);
    }else{
      setCharacter(char);
    }

  }

  return (
    <section>

      {character.map((value, key) => {
        if (value.index === characterSelected) {
          return <div className="content" key={key}>

            <div className="info-container">
              <h1>{value.name}</h1>

              {value.description.split("\n").map((i, keytwo) => {
                return <p key={keytwo}>{i}</p>;
              })}

            </div>

            <div className="image-container">
              <img src={value.photo} alt=""></img>
            </div>

            <div className="character-image-container">
              <button className="character-image-button" onClick={() => changeCharacter(value.index - 1)}>
                <FontAwesomeIcon icon={faChevronLeft} className="icon" />
              </button>
              <button className="character-image-button" onClick={() => changeCharacter(value.index + 1)}>
                <FontAwesomeIcon icon={faChevronRight} className="icon" />
              </button>
            </div>

          </div>
        } else {
          return null;
        }
      })}

    </section>
  )
}
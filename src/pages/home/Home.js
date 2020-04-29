import React, { useState } from 'react';
import character from './characters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './css/home.css';

export default function Home() {

  let [characterSelected, setCharacter] = useState(0);

  function changeCharacter(char){

    if(char.index === 1){
      setCharacter(0);
    }else{
      setCharacter(1);
    }

  }

  return (
    <section>

      {character.map((value, key) => {
        if (value.index === characterSelected) {
          return <div className="content">

            <div className="info-container">
              <h1>{value.name}</h1>
              <p>
                {value.description}
              </p>
            </div>

            <div className="image-container">
              <img src={value.photo} alt=""></img>

              <div className="character-image-container">
                <div className="character-image-button" onClick={()=> changeCharacter(value)}>
                  <FontAwesomeIcon icon={faChevronLeft} className="icon"/>
                </div>
                <div className="character-image-button" onClick={()=> changeCharacter(value)}>
                  <FontAwesomeIcon icon={faChevronRight} className="icon"/>
                </div>
              </div>

            </div>

          </div>
        } else {
          return null;
        }
      })}

    </section>
  )
}
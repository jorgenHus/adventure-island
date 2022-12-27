import React, { useState } from 'react';

import './App.css';
import stories from './img/books-removebg-preview.png';
import characters from './img/characters-removebg-preview.png'
import places from './img/places-removebg-preview.png'

import story1_1 from './img/story1-1.jpg';
import story1_2 from './img/story1-2.jpg';
import story1_3 from './img/story1-3.jpg';

function App() {
  const [output, setOutput] = useState('menu');

  return (
    <div className="page">
      <div className="headliner" onClick={() => setOutput('menu')}>
        <a>
          back
          {/* <MatIcon className="back-arrow-icon">arrow_back_ios</MatIcon> */}
        </a>
        EVENTYRØYA
      </div>
      {output === 'menu' && (
        <div className="output">
          <div className="menu">
            <div className="grid">
              <div
                className="grid-item"
                onClick={() => setOutput('stories')}
              >
                <img src={stories} alt="Historier"/>
                <div className="title">HISTORIER</div>
              </div>
              <div
                className="grid-item"
                onClick={() => setOutput('characters')}
              >
                <img src={characters} alt="Karakterer"/>
                <div className="title">KARAKTERER</div>
              </div>
              <div
                className="grid-item"
                onClick={() => setOutput('places')}
              >
                <img src={places} alt="Steder"/>
                <div className="title">STEDER</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {output === 'stories' && (
        <div className="output">
          <div className="stories">
            <div>
              Stories output</div>

          </div>
        </div>
      )}
      {output === 'characters' && (
        <div className="output">
          <div>Characters content</div>
        </div>
      )}
      {output === 'places' && (
        <div className="output">
          <div>Places content</div>
        </div>
      )}
    </div>
  );
}

export default App;

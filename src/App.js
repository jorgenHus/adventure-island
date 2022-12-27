import React, { useState } from 'react';

import './App.css';
import stories from './img/books-removebg-preview.png';
import characters from './img/characters-removebg-preview.png'
import places from './img/places-removebg-preview.png'
import Story from './components/Story';



function App() {
  const [output, setOutput] = useState('menu');

  return (
    <div className="page">
      <div className="headliner" onClick={() => setOutput('menu')}>
        {output !== 'menu' && (<a>
          MENY | 
          {/* <MatIcon className="back-arrow-icon">arrow_back_ios</MatIcon> */}
        </a>)}
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
                <img class="img-meny" src={stories} alt="Historier"/>
                <div className="title">HISTORIER</div>
              </div>
              <div
                className="grid-item"
                onClick={() => setOutput('characters')}
              >
                <img class="img-meny" src={characters} alt="Karakterer"/>
                <div className="title">KARAKTERER</div>
              </div>
              <div
                className="grid-item"
                onClick={() => setOutput('places')}
              >
                <img class="img-meny" src={places} alt="Steder"/>
                <div className="title">STEDER</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {output === 'stories' && (
        <div className="output">
          <div className="stories">
            <Story></Story>
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

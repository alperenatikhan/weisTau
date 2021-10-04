import React from 'react';
import './style.css';
import Kontakt from './components/Kontakt.jsx';

export default function App() {
  return (
    <div>
      <h1>Weisse Tauben</h1>
      <nav>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <li className="nav-item">Uber uns</li>
          <li className="nav-item">Unsere Servicen</li>
          <li className="nav-item">Kontaktieren</li>
        </ul>
      </nav>

      <Kontakt> </Kontakt>
    </div>
  );
}

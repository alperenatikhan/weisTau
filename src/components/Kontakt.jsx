import React from 'react';

export default function Kontakt() {
  return (
    <>
      <h1>Kontakt</h1>

      <main>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            placeItems: 'center',
          }}
        >
          <input
            type="text"
            className="contact-knowledge"
            placeholder="Vorname"
          />
          <input
            type="text"
            className="contact-knowledge"
            placeholder="Nachname"
          />
          <input
            type="text"
            className="contact-knowledge"
            placeholder="Telefonnummer"
          />
          <input
            type="text"
            className="contact-knowledge"
            placeholder="Address"
          />
          <input
            type="text"
            className="contact-knowledge"
            placeholder="Email"
          />
          <button type="submit"> Senden </button>
        </form>
      </main>
    </>
  );
}

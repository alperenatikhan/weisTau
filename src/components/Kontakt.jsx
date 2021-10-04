import React, { useState, useEffect } from 'react';

export default function Kontakt() {
  let [firstname, setFirstname] = useState(false);
  let [surname, setSurname] = useState(false);
  let [telnumber, setTelnumber] = useState(false);
  let [address, setAddress] = useState(false);
  let [postcode, setPostcode] = useState(false);
  let [email, setEmail] = useState('');

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
          onSubmit={() => {
            let data = {
              firstname,
              surname,
              telnumber,
              address,
              postcode,
              email,
            };

            console.log(data);
          }}
        >
          <input
            type="text"
            className="contact-knowledge"
            placeholder="Vorname"
            onChange={(el) => setFirstname(el.target.value)}
            required
          />
          <input
            type="text"
            className="contact-knowledge"
            placeholder="Nachname"
            onChange={(el) => setSurname(el.target.value)}
          />
          <input
            type="text"
            className="contact-knowledge"
            placeholder="Telefonnummer"
            onChange={(el) => setTelnumber(el.target.value)}
          />
          <input
            type="text"
            className="contact-knowledge"
            placeholder="Address"
            onChange={(el) => setAddress(el.target.value)}
          />

          <input
            type="text"
            className="contact-knowledge"
            placeholder="PLZ"
            onChange={(el) => setPostcode(el.target.value)}
          />

          <input
            type="text"
            className="contact-knowledge"
            placeholder="Email"
            onChange={(el) => setEmail(el.target.value)}
          />
          <button type="submit"> Senden </button>
        </form>
      </main>
    </>
  );
}

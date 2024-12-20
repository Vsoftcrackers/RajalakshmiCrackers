import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './safetytips.css';

function Safetytips() {
  const dos = [
    'Read the instructions and follow all safety precautions instructed with regard to the use of fireworks.',
    'Wear thick cotton clothes while bursting crackers and avoid synthetic fiber and loose or flowing garments.',
    'In case of burns, pour a large quantity of water on the burnt area.',
    'Keep an eye on children while they light candles, diyas, and crackers.',
    'Make sure your pets feel comfortable at this time and feed them well before the crackers start bursting.',
  ];

  const donts = [
    "Don't burst crackers inside the house.",
    "Don't keep your face close to the cracker while trying to light it.",
    "Don't allow very small children to handle fireworks.",
    "Don't apply any cream, ointment, or oil on the burnt area.",
  ];

  return (
    <div className="safetytips-container">
      <img
        src="https://festivalcrackersonline.com/images/jb7.jpg"
        alt="RajaLakshmi Crackers - Safety Tips Banner"
        className="image-style"
      />
      <h1>RajaLakshmi Crackers</h1>
      <p>
        Following specific do's and don'ts during the purchase, use, and storage of fireworks is crucial. 
        It's essential to adhere to precautions while handling crackers, as even a slight lapse in attention 
        or carelessness can lead to serious injuries.
      </p>

      <div className="sections-container">
        {/* Do's Section */}
        <section aria-labelledby="do-section" className="section section--do">
          <h2 id="do-section">Do's</h2>
          <ul>
            {dos.map((text, index) => (
              <li key={index} className="do-item">
                <FontAwesomeIcon icon={faCheckCircle} className="icon do-icon" /> {text}
              </li>
            ))}
          </ul>
        </section>

        {/* Don'ts Section */}
        <section aria-labelledby="dont-section" className="section section--dont">
          <h2 id="dont-section">Don'ts</h2>
          <ul>
            {donts.map((text, index) => (
              <li key={index} className="dont-item">
                <FontAwesomeIcon icon={faTimesCircle} className="icon dont-icon" /> {text}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Safetytips;

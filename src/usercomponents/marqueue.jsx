import React, { useState, useEffect } from 'react';
import './marqueue.css';

const Marqueue = () => {
  const [message, setMessage] = useState(
    'Crackers available in 365 days, we deliver to Tamilnadu, Kerala, Andhra, and other states. The Minimum order values are 3000 for Tamilnadu and above 5000 for all other states. Thank you!'
  );

  useEffect(() => {
    const updateMessage = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      if (currentMonth === 12) {
        setMessage('Merry Christmas! Special discounts available for Christmas.Thank You');
        return;
      }
      if (currentMonth === 1 && currentDay === 1) {
        setMessage('Happy New Year! Start the year with fresh crackers!');
        return;
      }
      if ((currentMonth > 1 && currentMonth < 12) || (currentMonth === 1 && currentDay > 1)) {
        setMessage('Happy Diwali! Crackers for a brighter celebration!');
        return;
      }
      setMessage(
        'Crackers available in 365 days, we deliver to Tamilnadu, Kerala, Andhra, and other states. The Minimum order values are 3000 for Tamilnadu and above 5000 for all other states. Thank you!'
      );
    };

    updateMessage();

    const interval = setInterval(updateMessage, 86400000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="marqueue-container">
      <div className="marqueue-content">
        <img src="/assets/rocket.png" alt="rocket 1" className="rocket 1" />
        <h2>{message}</h2>
        <img src="/assets/bomb.webp" alt="bomb" className="bomb" />
      </div>
    </div>
  );
};

export default Marqueue;

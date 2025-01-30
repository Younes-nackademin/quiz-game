import React, { useEffect, useState } from 'react';

const Timer = ({ initialTime, onTimeUp }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setTime(initialTime); // Återställ timern vid varje återmontering
    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          onTimeUp(); // Anropa funktionen när tiden är slut
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval); // Rensa intervallet vid avmontering
  }, [initialTime, onTimeUp]);

  return <div className="timer">Tid kvar: {time} sekunder</div>;
};

export default Timer;

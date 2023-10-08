import React, { useState } from 'react';
import Timer from './components/Timer/Timer';
import Output from './components/Outputs/Output';
import './App.css'

function App() {
  const [lapTimes, setLapTimes] = useState([]);

  const handleLap = time => {
    setLapTimes(prevLapTimes => [...prevLapTimes, time]);
  };

  return (
    <div class='container'>
      <Timer onLap={handleLap} />
      <Output times={lapTimes} />
    </div>
  );
}

export default App;
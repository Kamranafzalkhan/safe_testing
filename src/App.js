import React, { useState, useEffect } from 'react';
import './App.css';
//import './Register.css';
import Land from './Components/Land';
import Splash from './Components/Splash';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the splash screen after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showSplash ? <Splash /> : <Land />}
    </div>
  );
}

export default App;

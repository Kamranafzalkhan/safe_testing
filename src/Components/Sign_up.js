import React, { useState } from 'react';
import SignUp from './Components/SignUp';

function App() {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpVisible(true);
  };

  return (
    <div className="App">
      {!isSignUpVisible && (
        <button onClick={handleSignUpClick}>
          Sign Up
        </button>
      )}
      {isSignUpVisible && <SignUp />}
    </div>
  );
}

export default App;

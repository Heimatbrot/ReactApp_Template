import React, { useState } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import './App.css';

function App() {
  const [showPage1, setShowPage1] = useState(true);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);

  const handleClick1 = () => {
    setShowPage1(true);
    setShowPage2(false);
    setShowPage3(false);
  }

  const handleClick2 = () => {
    setShowPage1(false);
    setShowPage2(true);
    setShowPage3(false);
  }

  const handleClick3 = () => {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1><u>Homebread</u></h1>
      </header>
      <body>
        {showPage1 && <Page1 />}
        {showPage2 && <Page2 />}
        {showPage3 && <Page3 />}
        <div class="menu">
          <button onClick={handleClick1} class="links">Page 1</button>
          <button onClick={handleClick2} class="links">Page 2</button>
          <button onClick={handleClick3} class="links">Page 3</button>
        </div>
      </body>
    </div>
  );
}

export default App;

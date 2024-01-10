import './App.css';
import React, { useState } from 'react';
import ServerResponse from './components/ServerResponse/ServerResponse';

function App() {

  const [currentType, setCurrentType] = useState<string>();
  const buttonNamesList = ['data', 'error', 'loading'];
  
  return (
    <div className="App">
      <div className='button-list'>
        {
          buttonNamesList.map((name, i) => {
            return <button className='button' key={i} onClick={() => setCurrentType(name)}>{name}</button>
          })
        }
      </div>
      {
        currentType
          ? <ServerResponse type={currentType}></ServerResponse>
          : null
      }
    </div>
  );
}

export default App;

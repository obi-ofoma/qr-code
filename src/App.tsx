import React from 'react';
import './App.css';

import HelloWorld10 from './qrcode/HelloWorld10';
import HelloWorld11 from './qrcode/HelloWorld11';
import HelloWorld12 from './qrcode/HelloWorld12';

const App: React.FC = () => {
  return (
    <div className="Container">
      <div className="Column1">
        <HelloWorld11 />
      </div>
      <div className="Column2">
        <HelloWorld10 />
      </div>
      <div className="Column3">
        <HelloWorld12 />
      </div>
    </div>
  );
}

export default App;


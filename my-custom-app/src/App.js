import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Custom React App</h1>
        <p>This is a custom content section!</p>
        <button onClick={() => alert('Hello from React!')}>Click Me</button>
      </header>
    </div>
  );
}

export default App;


import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header'
import './assets/styles/main.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;

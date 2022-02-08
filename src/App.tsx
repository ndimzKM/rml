import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Main from './components/Main';
import './assets/styles/main.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;

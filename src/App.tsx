import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Main from './components/Main';
import './assets/styles/main.scss'

const Home: React.FC = () => {
  return(
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Dashboard />} />
      </Routes> 
    </div>
  );
}



export default App;

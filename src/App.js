import React from 'react';
import './App.css';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <LeftNav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

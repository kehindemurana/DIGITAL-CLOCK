import React from 'react';
import './App.css';
import Header from './components/Header'
import TimeBody from './components/TimeBody';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-yellow-500">
     <Header/>
     <TimeBody/>
     <Footer/>
    
    </div>
  );
}

export default App;

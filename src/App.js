import React from 'react';
import './App.css';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Premium from './components/Premium/Premium';

function App() {
  return (
    <div className="App">
      <Navbar/> <br/>
      <Header/>
      <Home/>
      <Premium/>
      <Details/>
      <Footer/>
    </div>
  );
}

export default App;

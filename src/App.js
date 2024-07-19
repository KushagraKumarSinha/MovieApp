import React, { useState, useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Images/Banner.jpg'
import Image from 'react-bootstrap/Image';
import ShowMovies from './ShowMovies';
import ShowRec from './ShowRec';


function App() {

  return (
    <div className='App'>
      <center><Image src={Banner} style={{ width: 'auto', height: 'auto', paddingBottom: '10px' }} fluid /></center>
      <ShowMovies />
      <ShowRec />
    </div>
  );
}

export default App;

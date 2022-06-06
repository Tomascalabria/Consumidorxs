import React from 'react';
import './App.scss';
import {Routes,Route} from 'react-router-dom'
import { NavBar } from './Components/NavBar/NavBar.js';
import { Main } from './Components/Main/Main';

function App() {
  return (
  <>
  <NavBar/>

  <Routes>
    <Route exact path='/' element={<Main/>}></Route>
    </Routes>
  </>
  );
}

export default App;
